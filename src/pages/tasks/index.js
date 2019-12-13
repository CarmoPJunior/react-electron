import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import TableTask from './tableTasks';
import FormTask from './form';
import Modal from '../../components/forms/modal'

export default function Task (){

    const initialTask  ={
        taskId: '',
        taskName: '',
        taskDescription: '',
        taskObservation: '',
        taskDateHour: '',
        taskDuration: '',
        taskCompletionDate: '',       
        taskStatus: 1,
        taskType: '',
        taskPeriodicity: '',
    };

    const [ task, setTask ] = useState(initialTask);
    const [ pageSize, setPageSize ] = useState(2); 
    const [ currentPage, setCurrentPage ] = useState(1); 
    const [ totalTaskRecords, setTotalTaskRecords ] = useState('');     
    const [ tasks, setTasks ] = useState([]);
    const [ isShowModal, setIsShowModal ] = useState(false); 

    useEffect(() => {                            
        loadProducts(currentPage);
    }, [task] ); 
    
    useEffect(() => {                            
        loadProducts(currentPage);
    }, [task] ); 

    // CRUD operations
	const saveTask = async e => {

        e.preventDefault();  

        let saveTaskTemp  ={
            id: task.taskId,
            name: task.taskName,
            description: task.taskDescription,
            observation: task.taskObservation,
            dateHour: new Date(),
            duration: task.taskDuration,
            completionDate: task.taskCompletionDate,            
            taskStatusId: task.taskStatus,
            taskTypeId: task.taskType,
            taskPeriodicityId: task.taskPeriodicity,
        };    

        if(!task.taskId){    

            await api.post(`/task`, { task : saveTaskTemp })
            .then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err.response);
            });     

        }else{

            await api.put(`/task`, { task : saveTaskTemp })
            .then(res => {
                console.log(res.data);
            }).catch(err => {
                console.log(err.response);
            });     
            
        }
        
        clearTasksComponents();
        
    }

	const deleteTask = async id => {   
        
        await api.delete(`/task?id=`+id)
        .then(res => {
            console.log(res.data);
        }).catch(err => {
            console.log(err.response);
        });    

        clearTasksComponents();		
    }
    
    const addTask = () => {

        const editTask  ={
            taskId: 'taskTemp.id',
            taskName: 'taskTemp.name',
        };    
        setTask(editTask);

        console.log(task);
        showModal();
    }

	const editTask = (taskTemp) => {

       const editTask23  ={
            taskId: 'taskTemp.id',
            taskName: taskTemp.name,
            taskDescription: taskTemp.description,
            taskObservation: taskTemp.observation,
            taskDateHour: taskTemp.dateHour,
            taskDuration: taskTemp.duration,
            taskCompletionDate: taskTemp.completionDate,            
            taskStatus: taskTemp.taskStatusId,
            taskType: taskTemp.taskTypeId,
            taskPeriodicity: taskTemp.taskPeriodicityId,
        };    
        console.log(editTask23);
        setTask(editTask23);

        //setSelected(editTask23);        
        console.log(task);
        showModal(editTask23);
    }    
    
    async function  loadProducts(page) {

        const response = await api.get(`/tasks?page=` + page + `&pageSize=`+pageSize);
        const {tasks, totalRecords} = response.data;
        setTotalTaskRecords(totalRecords);
        setCurrentPage(page);
        setTasks(tasks);       
    }    

    const prevPage = () =>{     
        
        if(currentPage === 1) return

        loadProducts(currentPage -1);
    }
    
    const nextPage = async e =>{ 
        loadProducts(currentPage + 1);        
    }

    const showModal = () => {
        console.log('teste modal');
        setTask(editTask);
        setIsShowModal(true);
       
    }
      
    const hideModal = (e) => {
        e.preventDefault();  
        setIsShowModal(false);
    }

    const clearTasksComponents = () =>{
        // setTask(initialTask);
        loadProducts(currentPage);
        setIsShowModal(false);
    }
        
    return (
        <div className="page-inner">            

            <header className="page-title-bar">                
                <div className="d-flex flex-column flex-md-row">
                  <p className="lead">
                    <span className="font-weight-bold">Tasks</span> 
                  </p>                 
                </div>
            </header>

            <div className="page-section">                
                
                <div className="row">  
                    <div className="col-xl-12">                 
                        <TableTask  tasks={tasks}  
                                    currentPage={currentPage}
                                    pageSize={pageSize}
                                    prevPage={prevPage}
                                    nextPage={nextPage}
                                    totalRecords={totalTaskRecords}
                                    setCurrentPage={loadProducts}
                                    setSelected ={setTask}
                                    editTask={editTask} 
                                    deleteTask={deleteTask} 
                                    addTask={addTask} />
                    </div>
                </div>
            </div>

            <Modal  show={isShowModal} 
                    handleClose={hideModal} 
                    modalTitle={'Título do Modal'} >
                        
                <FormTask   task={task} 
                            saveTask={saveTask} 
                            closeTask={hideModal}
                             />
            </Modal>
        </div>
    )
    
}