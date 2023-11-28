const sql = require('mssql');
const config = require('../configMSSQL')

async function getAllItems() {
    try {
        //connect to database
        await sql.connect(config);
        console.log("DataBase Connected Successfully");
        // Query to select all items from a table named 'YourTableName'
        const result = await sql.query('SELECT * FROM books');
        // Output the retrieved items
        console.log('Retrieved Items:', result.recordset);
    } catch (err) {
        console.error('Error:', err);
    }
}

module.exports = getAllItems