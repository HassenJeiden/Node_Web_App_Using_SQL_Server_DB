const sql = require('mssql');
const config = require('../configMSSQL')

var getAllItems = async (req,res)=> {
    try {
        //connect to database
        await sql.connect(config);
        console.log("DataBase Connected Successfully");
        // Query to select all items from a table named 'YourTableName'
        const result = await sql.query('SELECT * FROM books');
        // Output the retrieved items
        const records=result.recordset
        console.log('Retrieved Items:', result.recordset);
        res.status(201).json({ msg: "All records are following", records })
        sql.close()
    } catch (err) {
        console.error('Error:', err);
    }
}

module.exports = {getAllItems}