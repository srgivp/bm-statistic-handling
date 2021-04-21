const fs = require('fs');
const createPopulateTable = (db, tableName, pathToData) => {
    const createAndPopulate = (usersValues, allPlaceholders, columns) => {
        let sqlStmnt = `INSERT INTO ${tableName} (${columns.join(', ')}) VALUES ${allPlaceholders} `;
        db.serialize(() => {
            db.run(`CREATE TABLE IF NOT EXISTS ${tableName} (${columns.join(', ')})`, function (error) {
                db.run(sqlStmnt, usersValues, function (err) {
                    if (err) {
                        return console.error('error: ', err.message);
                    }
                    console.log(`Rows inserted ${this.changes}`);
                });
            });
        })
    }
    db.get(`SELECT * FROM ${tableName}`, [], (err) => {
        if (err) {
            console.log(`the table ${tableName} doesn't exist and will be created and populated with data`);
            const usersData = JSON.parse(fs.readFileSync(pathToData, 'utf8', (err, data) => {
                if (err) {
                    throw err;
                }
                return data;
            }));
            const columns = Object.keys(usersData[0]);
            // const columns = ['id', 'first_name', 'last_name', 'email', 'gender', 'ip_address'];
            const placeholder = '(?),';
            let allPlaceholders = '';

            const usersValuesDeep = usersData.map(item => {
                let placeholdersPortion = '';
                const usersValues = columns.map(columnName => {
                    if (item[columnName]) {
                        placeholdersPortion = placeholdersPortion.concat(placeholder);
                        return item[columnName];
                    }
                })
                allPlaceholders = allPlaceholders.concat(`(${placeholdersPortion.slice(0, -1)}),`);
                return usersValues;
            })
            const usersValues = usersValuesDeep.reduce((acc, val) => {
                return acc.concat(val);
            }, []);
            allPlaceholders = allPlaceholders.slice(0, -1);
            // console.log(usersValues, allPlaceholders);
            const sqlVarMax = 32766;
            if (usersValues.length > sqlVarMax) {
                const step = sqlVarMax - sqlVarMax % columns.length;
                let usersValuesArr = [];
                for (let i = 0; i < usersValues.length; i += step){
                    if (i < usersValues.length) {
                        usersValuesArr.push(usersValues.slice(i, i+step));
                    } else {
                        usersValuesArr.push(usersValues.slice(i-step));
                    }
                }
                const placeholder = '(' + '(?),'.repeat(columns.length).slice(0, -1) + '),';
                const placeholdersArray = usersValuesArr.map(item => {
                    return placeholder.repeat(item.length/columns.length).slice(0, -1);
                });
                usersValuesArr.forEach((item, index) => {
                    createAndPopulate(item, placeholdersArray[index], columns);
                })
            } else {
                createAndPopulate(usersValues, allPlaceholders, columns);
            }
        } else {
            console.log(`the table ${tableName} already exists`);
        }
    })
}

module.exports = createPopulateTable;