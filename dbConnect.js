const configDB = require('./dbConfig')
var odbc = require('odbc')


const connectToDatabase = async (err) => {
  try {
    const connection = await odbc.pool(configDB.connectionString);
    console.log("connected to database: " + configDB.connectionString);
    connection.query('select pages,bookID from books', (error,result) => {
      if (error) {
        console.error('Query error:', error);
        return;
      }
  
      // Process the results
      console.log('Query results:', result[0]);

  })
  }
  catch(error) {
    console.error(error)
  }

}

module.exports = connectToDatabase