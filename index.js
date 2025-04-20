const express = require("express");

const server = express();

server.use(express.json());

let costumers = [
    { id : 1, name: "Exemplo 01", site: "http://exemplo01.com.br" },
    { id : 2, name: "Exemplo 02", site: "http://exemplo02.com.br" },
    { id : 3, name: "Exemplo 03", site: "http://exemplo03.com.br" },
];

server.get("/costumers", (req, res) => {
    return res.json("Ola mundo!");
});

server.listen(3000);