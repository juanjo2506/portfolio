
const fs = require('fs');
const path = require('path');

/* En la constante "products" ya tienen los productos que están 
guardados en la carpeta Data como Json (un array de objetos literales) */
const portfoliosFilePath = path.join(__dirname, '../data/portfolio.json');
const portfolios = JSON.parse(fs.readFileSync(portfoliosFilePath, 'utf-8'));

const indexController = {
 index : function (req, res) {
   const portfolios = JSON.parse(fs.readFileSync(portfoliosFilePath, 'utf-8'));

    res.render("index", {portfolios} )
 }
}

module.exports = indexController