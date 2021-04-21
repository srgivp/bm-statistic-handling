const createPopulateTable = require('./utils/create-populate-table');
const express = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));
const port = process.env.PORT || 8080;
app.get('/', (req, res) => {
    const db = new sqlite3.Database('./database/customers.db');
    createPopulateTable(db, 'users', './database/users.json');
    createPopulateTable(db, 'users_statistic', './database/users_statistic.json');
});

app.get('/users/:page', (req, res) => {
    const limit = req.query.limit; //don't forget about validation
    const page = req.params.page;
    const offset = page * limit;
    const db = new sqlite3.Database('./database/customers.db');
    const sqlUsers = `SELECT * FROM users LIMIT ?,?`;
    db.all(sqlUsers, [offset, limit], (err, rows) => {
        if (err) {
            res.json({error: err});
        } else {
            const lastIndex = rows.length - 1;
            let usersData = JSON.parse(JSON.stringify(rows));
            usersData.map( (item, index) => {
                db.all(`SELECT page_views, clicks FROM users_statistic WHERE user_id = ${item.id}`, [], (err, rows) => {
                    if (err) {
                        res.json({error: err});
                    } else {
                        let totalData = rows.reduce((acc, val) => {
                            acc.total_clicks += val.clicks;
                            acc.total_page_views += val.page_views;
                            return acc;
                        }, {total_clicks: 0, total_page_views: 0});
                        item.total_clicks = totalData.total_clicks;
                        item.total_page_views = totalData.total_page_views;
                        if (index === lastIndex){
                            db.get('SELECT COUNT(*) as count FROM users', [], (err, row) => {
                                let total = row.count;
                                db.get('SELECT min(date) FROM users_statistic', [], (err, row) => {
                                    if (err) {
                                        res.json({error: err});
                                    } else {
                                        const minDate = row['min(date)'];
                                        db.get('SELECT max(date) FROM users_statistic', [], (err, row) => {
                                            if (err) {
                                                res.json({error: err});
                                            } else {
                                                const maxDate = row['max(date)'];
                                                res.json({data: usersData, total, minDate, maxDate});
                                            }
                                        })
                                    }
                                })
                            });
                        }
                    }})
            })}
    })
})

app.get('/users/:page/:id', (req, res) => {
    const startDate = `'${req.query.from}'`;
    const finishDate = `'${req.query.to}'`;
    const userId = req.params.id;
    console.log(startDate, finishDate);
    const db = new sqlite3.Database('./database/customers.db');
    const sqlStmnt = `SELECT clicks, page_views, date FROM users_statistic WHERE user_id = ${userId} and date BETWEEN ${startDate} AND ${finishDate}`;
    db.all(sqlStmnt, [], (err, rows) => {
        res.json({data: rows});
    })
})


app.listen(port);
