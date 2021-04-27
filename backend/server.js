const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const createPopulateTable = require('./utils/create-populate-table');

const app = express();
const port = process.env.PORT || 8081;
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
app.get('/', () => {
  const db = new sqlite3.Database('./database/customers.db');
  createPopulateTable(db, 'users', './database/users.json');
  createPopulateTable(db, 'users_statistic', './database/users_statistic.json');
});

app.get('/users/:page', (req, res, next) => {
  const limit = req.query.limit;
  const page = req.params.page;
  const offset = page * limit;
  if (limit) {
  if (isNaN(parseInt(limit, 10))) {
    res.status(412).json({message: 'The "limit" query in URI should be an Integer type'});
  } else if (isNaN(parseInt(page, 10))) {
    res.status(412).json({message: 'The "page" parameter in URI should be an Integer type'});
  } else {
    const db = new sqlite3.Database('./database/customers.db');
    const sqlUsers = `SELECT * FROM users LIMIT ?,?`;
    db.all(sqlUsers, [offset, limit], (err, rows) => {
      if (err) {
        throw err;
      } else {
        const lastIndex = rows.length - 1;
        let usersData = JSON.parse(JSON.stringify(rows));
        usersData.map((item, index) => {
          db.all(`SELECT page_views, clicks FROM users_statistic WHERE user_id = ${item.id}`, [], (err, rows) => {
            if (err) {
              throw err;
            } else {
              let totalData = rows.reduce(
                  (acc, val) => {
                    acc.total_clicks += val.clicks;
                    acc.total_page_views += val.page_views;
                    return acc;
                  },
                  {total_clicks: 0, total_page_views: 0}
              );
              item.total_clicks = totalData.total_clicks;
              item.total_page_views = totalData.total_page_views;
              if (index === lastIndex) {
                db.get('SELECT COUNT(*) as count FROM users', [], (err, row) => {
                  if (err) {
                    throw err;
                  } else {
                    let total = row.count;
                    db.get('SELECT min(date) FROM users_statistic', [], (err, row) => {
                      if (err) {
                        throw err;
                      } else {
                        const minDate = row['min(date)'];
                        db.get('SELECT max(date) FROM users_statistic', [], (err, row) => {
                          if (err) {
                            throw err;
                          } else {
                            const maxDate = row['max(date)'];
                            res.json({data: usersData, total, minDate, maxDate});
                          }
                        });
                      }
                    });
                  }
                });
              }
            }
          });
        });
      }
    });
  }
} else {
    next();
  }
});

app.get('/users/:page/user/:id', (req, res, next) => {
  if (req.query.from && req.query.to) {
    const startDate = `'${req.query.from}'`;
    const finishDate = `'${req.query.to}'`;
    const userId = req.params.id;
    if (!/\d{4}-\d{2}-\d{2}/.test(startDate) || !/\d{4}-\d{2}-\d{2}/.test(finishDate)) {
      res.status(412).json({ message: 'Dates "from" and "to" should be sent to the server in "yyyy-mm-dd" format' });
    } else if (isNaN(parseInt(userId, 10))) {
      res.status(412).json({ message: 'The "id" parameter in URI should be an Integer type' });
    } else {
      const db = new sqlite3.Database('./database/customers.db');
      const sqlStmnt = `SELECT clicks, page_views, date FROM users_statistic WHERE user_id = ${userId} and date BETWEEN ${startDate} AND ${finishDate}`;
      db.all(sqlStmnt, [], (err, rows) => {
        if (err) {
          throw err;
        } else {
          res.json({ data: rows });
        }
      });
    }
  } else {
    next();
  }
});

app.listen(port);
