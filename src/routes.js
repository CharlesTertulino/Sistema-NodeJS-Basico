// IMPORTAÇÃO
const { Router } = require("express");
const controller = require("./controller");

const routes = new Router();

// CONSTRUÇÃO DAS ROTAS

routes.get("/elementos", controller.index);
routes.get("/elementos/:id", controller.show);
routes.post("/elementos", controller.create);
routes.put("/elementos/:id", controller.update);
routes.delete("/elementos/:id", controller.destroy);


// EXPORTAÇÃO PARA USO EM APP.JS
module.exports = routes;