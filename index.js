const ODBC = require('odbc');

function sqlbaseConnectionWrapper(initConnectionString){
    let connectionString = initConnectionString;

    return (sql) => {
        return (callback) => {
            let db = ODBC();
            db.open(connectionString, function (err, db) {
                db.query(sql, function(err, rows/*, more*/){
                    if(err) return err;
                    if(rows && typeof callback === "function"){
                        callback(rows);
                    }
                });
            });
        }
    }
}

module.exports = sqlbaseConnectionWrapper;
