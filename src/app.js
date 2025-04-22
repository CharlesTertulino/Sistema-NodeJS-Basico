// IMPORTAÇÕES
const express = require("express");
const routes = require("./routes");
const bodyParser = require('body-parser');

// CRIAÇÃO DA CLASSE, PARTE LÓGICA ESTRUTURAL DO SERVIDOR
class App {
    constructor(){
        this.server = express();
        this.routes();
    }

    routes(){
        this.server.use(bodyParser.json());
        this.server.use(routes);
    }
}

// EXPORTAÇÃO
const app = new App()
module.exports = app.server;
