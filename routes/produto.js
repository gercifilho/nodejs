    var connectionFactory = require('../infra/connectionFactory');
    var ProdutoDao = require('../infra/ProdutoDao');
  
    module.exports = function(app){

        app.get("/produtos", function(req, res) {
        
            var connection = connectionFactory();
            var produtoDao = new ProdutoDao(connection);  

            produtoDao.lista(function(error, results, fields) {
                res.format({
                    html: function(){
                       res.render("produtos/lista",{lista:results})  
                    },
                    json: function(){
                        res.json(results)
                    }
                })
            });
        connection.end();
        });

        app.get("/produtos/form", function(req, res) {
            res.render('./produtos/form')
        });  

        app.post("/produtos", function(req, res) {
            var livro = req.body;

            req.assert('titulo', 'Titulo deve ser preenchido').notEmpty();
            req.assert('preco', 'Preço deve ser preenchido').isFloat();
            
            var errors = req.validationErrors();

            if (errors) {
                console.log("há erros de validação!");
                res.format({
                    html: function(){
                        res.status(400).render("produtos/form",{validationErrors: errors});
                    },
                    json: function(){
                        res.status(400).send(erros);
                    }
                });
                return;

            }


            var connection = connectionFactory();
            var produtos = new ProdutoDao(connection);

            produtos.salva(livro, function(exception, result){
//                res.render("produtos/salvo")
                  res.redirect("/produtos");
            }) 
        connection.end();
        });      

    }