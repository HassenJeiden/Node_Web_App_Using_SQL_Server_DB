const config = require('./configMSSQL')
const sql = require('mssql');

async function connect() {
    try {
        await sql.connect(config);
        console.log("powred by SQL Server Database");
    } catch (err) {
        console.error(err.message);
    }
}
module.exports = connect