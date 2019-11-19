const { User, Teste} = require('../models');

module.exports = {

    userTest(req, res, next){
        const { nome, email } = req.body;
        console.log(nome);
        console.log(email);
        return res.json({ok: true});
    },
    async saveTeste(req, res, next){                

        try {

            let user = await Teste.create(req.body);    
            return res.json(user);
            
        } catch (error) {    
            console.log('Error: ' + error);
            let erro = new Error(error);
            erro.httpStatusCode = 500;
            return next( erro);
        }
    },
    async store(req, res, next){          
        
        await User.create(req.body)
        .then(book => {           
            res.json(book);
        }).error(error => {
            res.status(405).json({messageError : error});
        }).catch(error => {
            console.log('Error: ' + error);           
            res.status(500).json({messageError : error.name});
        });
        
    },
    async delete(req, res, next){

        let {id} = req.query;

        if(!id){
            return res.status(400).json({messageError: 'Informe o Id!'});
        }

        await User.destroy({
            where: { id: id }
        }).then(result => {
            res.json({message: 'Registro Removido!', regitros: result});
        }).error(err => {
            res.status(405).json({messageError : err});
        });

    },
    async update(req, res, next){    
        try {

            let { id, nome, email, password } = req.body;

            await User.update(
                {   nome: nome,
                    email: email,
                    password: password,
                }, 
                {
                where: {
                    id: id
                }
            });

            return res.json({message: 'Registro Atualizado!'});

        } catch (error) {    
            console.log('Error: ' + error);
            let erro = new Error(error);
            erro.httpStatusCode = 500;
            return next( erro);
        }

    },
    async findAll(req, res){    

        let {offset, limit} = req.body;

        let users = await User.findAll(); 

        return res.json({users: users});
        
    },
    async findById(req, res, next){    

        try {

            let {id} = req.query;

            if(!id){
                return res.status(400).json({messageError: 'Informe o Id!'});
            }

            let user = await User.findOne({
                where: {
                id: id
                }
            });     

            return res.json(user);

        } catch (error) {    
            console.log('Error: ' + error);
            let erro = new Error(error);
            erro.httpStatusCode = 500;
            return next( erro);
        }
    }

};