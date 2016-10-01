    var mysql = require('mysql');

     function createConnection() {
     	return mysql.createConnection({
             host         : '192.168.99.100',
             port         : '13306',
             user         : 'root',
             password     : 'my-psw',
             database     : 'poccms'
        });
    };
    
    module.exports = createConnection;