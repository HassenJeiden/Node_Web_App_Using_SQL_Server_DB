const config = require('./configMSSQL')
const sql = require('mssql');

async function connect() {
    try {
        await sql.connect(config);
        console.log("DataBase Connected Successfully");
    } catch (err) {
        console.error(err.message);
    }
}
module.exports = connect