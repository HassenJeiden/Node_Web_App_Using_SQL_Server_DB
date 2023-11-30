const sql = require('mssql');
const config = require('../configMSSQL')




var conectDB = (err) => {
    sql.connect(config, (err) => {
        err ? console.log(err) : console.log("DataBase Connected Successfully")
    });
}
var getAllItems = async (req, res) => {
    try {
        //connect to database
        conectDB()
        // Query to select all items from a table named 'YourTableName'
        const result = await sql.query('SELECT * FROM books');
        // Output the retrieved items
        const records = result.recordset
        console.log('Retrieved Items:', result.recordset);
        res.status(201).json({ msg: "All records are following", records })
        sql.close()
    } catch (err) {
        console.error('Error:', err);
    };
}
var getitemsByBouk = async (req, res) => {
    try {
        var { bookID } = req.body
        conectDB()
        const MyReq = new sql.Request()
        MyReq.input('inputLetter', sql.VarChar, '%' + bookID + '%')
        const result = await MyReq.query('SELECT * FROM books WHERE bookID LIKE @inputLetter');
        const results = result.recordset
        res.status(201).json({ msg: 'all records found are next:', results })
    }
    catch (err) {
        console.log(err)
    };
}

var nweBook = async (req, res) => {
    try {
        var { bookID, auther, fields, pages } = req.body
        const addReq = new sql.Request()
        addReq.input('bookID', sql.VarChar, bookID)
        addReq.input('auther', sql.VarChar, auther)
        addReq.input('fields', sql.VarChar, fields)
        addReq.input('pages', sql.Int, pages)
        const myreq = 'INSERT INTO books (bookID, auther, fields, pages) VALUES (@bookID, @auther, @fields, @pages)';
        await addReq.query(myreq);
        const result = addReq.query('select * from books where bookID = @bookID')//find the new record
        res.status(201).json({ msg: 'data inserted successfully',result })
    } catch (err) {
        console.log(err)
    }
};




module.exports = { getAllItems, getitemsByBouk, nweBook }