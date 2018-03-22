const ODBC = require('odbc');

function sqlbaseConnectionWrapper(connectionString){
    return (sql) => {
        return (callback) => {
            ODBC.open(connectionString, function (err, db) {
                if(err) throw err;
                else db.query(sql, function(err, rows/*, more*/){
                    if(err) throw err;
                    else if(rows && typeof callback === "function"){
                        callback(rows, ()=>{
                            db.close();
                        });
                    }
                });
            });
        }
    }
}

module.exports = sqlbaseConnectionWrapper;