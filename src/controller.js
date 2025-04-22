// BANCO DE DADOS EM MEMÓRIA TEMPORÁRIA
let banco_de_dados = [
    { id: 1, nome: "Google" },
    { id: 2, nome: "UOL" }
];

// CRIAÇÃO DO CONTROLADOR
class Controller {
    // LISTAR ELEMENTOS
    index(req, res){
        return res.json(banco_de_dados);
    }

    // MOSTRAR UM ELEMENTO
    show(req, res){
        const id = parseInt(req.params.id);
        const elemento = banco_de_dados.find(item => item.id === id);
        const status = elemento ? 200 : 400;
       
        return res.status(status).json(elemento);
    }

    // CRIAR ELEMENTO
    create(req , res){
        const { nome } = req.body;
        const id = banco_de_dados[banco_de_dados.length - 1].id + 1;
        const novo_elemento = { id, nome };
        banco_de_dados.push(novo_elemento);

        return res.status(201).json(novo_elemento);
    }

    // ATUALIZAR ELEMENTO
    update(req, res){
        const id = parseInt(req.params.id);
        const { nome } = req.body;
        
        let elemento = banco_de_dados.find(item => item.id === id);
        let index = banco_de_dados.findIndex(item => item.id === id);

        if(elemento != undefined){
            banco_de_dados[index].nome = nome;
        }

        return res.status(201).json(banco_de_dados[index]);
    }

    // DELETAR ELEMENTO
    destroy(req, res){
        const id = parseInt(req.params.id);

        let elemento = banco_de_dados.find(item => item.id === id);
        let index = banco_de_dados.findIndex(item => item.id === id);        

        if(elemento != undefined){
            banco_de_dados.splice(index, 1)
        }
        
        return res.status(201).json(elemento);
    }
}

// INSTACIAMENTO E EXPORTAÇÃO
module.exports = new Controller();