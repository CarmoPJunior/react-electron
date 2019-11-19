const { Task } = require('../models');
const Sequelize = require('sequelize');

module.exports = {
   
    async store(req, res){         
                
        await Task.create(req.body.task)
        .then(result => {           
            res.json(result);
        }).error(error => {
            res.status(405).json({messageError : error});
        }).catch(error => {
            console.log('Error: ' + error);           
            res.status(500).json({messageError : error.name});
        });
        
    },
    async delete(req, res){

        let {id} = req.query;

        if(!id){
            return res.status(400).json({messageError: 'Informe o Id!'});
        }

        await Task.destroy({
            where: { id: id }
        }).then(result => {
            res.json({message: 'Registro Removido!', regitros: result});
        }).error(err => {
            res.status(405).json({messageError : err});
        });

    },
    async update(req, res, next){    
        try {

            let { id, 
                name,
                description,
                observation,
                dateHour,
                duration,
                completionDate,
                taskStatusId,
                taskTypeId,
                taskPeriodicityId,
            } = req.body.task;

            await Task.update(
                {   name,
                    description,
                    observation,
                    dateHour,
                    duration,
                    completionDate,
                    taskStatusId,
                    taskTypeId,
                    taskPeriodicityId,
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
    async finishTask(req, res, next){    
        try {

            let { id,  
                completionDate,
            } = req.body.task;   
                                    
            await Task.update(
                {   completionDate,
                    taskStatusId    :5,
                }, 
                {
                where: {
                    id: id,
                    taskStatusId: {
                        [Sequelize.Op.notIn]: [5, 6]
                    },
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

        let {page, pageSize} = req.query;
        let offset = pageSize * (page -1);
        let limit = offset + pageSize;


        await Task.findAndCountAll({            
            offset: offset,
            limit: pageSize
        }).then(result => {
        //    console.log(result.count);
        //    console.log(result.rows);
           res.json({tasks: result.rows, totalRecords: result.count});
        }).error(err => {
            res.status(500).json({messageError : err});
        });
                   
    },
    async findById(req, res, next){    

        try {

            let {id} = req.query;

            if(!id){
                return res.status(400).json({messageError: 'Informe o Id!'});
            }

            let task = await Task.findOne({
                where: {
                id: id
                }
            });     

            return res.json(task);

        } catch (error) {    
            console.log('Error: ' + error);
            let erro = new Error(error);
            erro.httpStatusCode = 500;
            return next( erro);
        }
    },
    async findByStatus(req, res){    

        let {status} = req.query;

        let arrayStatus = status.split(",");

        await Task.findAndCountAll({            
            where: {
                taskStatusId: arrayStatus
            }
        }).then(result => {        
           res.json({tasks: result.rows, totalRecords: result.count});
        }).error(err => {
            res.status(500).json({messageError : err});
        });
                   
    },

};