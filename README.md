# sqlbase

## when is this helpful?
I created this mainly because sqlbase is a pain. And ODBC makes it even worse. 
No helpful mostly senseless error-messages and the lack of useful documentation, drivers and so forth makes using sqlbase awful.

This wrapper for www.npmjs.com/package/odbc for use with Gupta SQLbase.

## what is needed to use this package?
You still need to configure your ODBC Connection and have a valid connection string.

## examples.

```javascript
const connectionString = "DRIVER=odbc_driver;SERVER=host;UID=user;PWD=password;DATABASE=dbname";
const query = require('sqlbase')(connectionString);
query("SELECT * FROM TABLE")((rows, next) => {
    console.log(rows);
    next();
});
```

## todos
- separate execute function
- error-handling
- tests
- nicer syntax

PRs and discussion warmly welcome.