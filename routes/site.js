var connectionFactory = require('../infra/connectionFactory');
var ProdutoDao = require('../infra/ProdutoDao');

module.exports = function(app) {
	
	app.get("/", function(req, res){
		var connection = connectionFactory();
		
		var produtos = new ProdutoDao(connection);


		produtos.lista(function(error, results, fields) {
                res.format({
                    html: function(){
                       res.render("home/index",{lista:results})  
                    },
                    json: function(){
                        res.json(results)
                    }
                })
            });
		connection.end();
	})
}