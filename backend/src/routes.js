const express = require('express');
const UserController = require('./controllers/UserController');
const TaskController = require('./controllers/TaskController');

const routes = express.Router();


routes.get('/', (req, res) => {
    return res.json({ message : `Hello, ${req.query.name}`});
});

routes.post('/devs', UserController.store);
routes.get('/devs', UserController.findAll);
routes.get('/dev', UserController.findById);
routes.delete('/dev', UserController.delete);
routes.put('/dev', UserController.update);


routes.post('/task', TaskController.store);
routes.get('/tasks', TaskController.findAll);
routes.get('/task', TaskController.findById);
routes.get('/taskByStatus', TaskController.findByStatus);
routes.delete('/task', TaskController.delete);
routes.put('/task', TaskController.update);
routes.put('/finishTask', TaskController.finishTask);



routes.post('/teste', UserController.saveTeste);

routes.post('/user', UserController.userTest);
routes.get('/users', (req, res) => {
    return res.json({ message : `Hello, ${req.query.name}`});
});


module.exports = routes;
