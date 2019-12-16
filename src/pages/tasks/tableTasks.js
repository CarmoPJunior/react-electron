import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import {getFullDateHour} from '../../utils/dateUtil';
import FormTask from './form';
import Modal from '../../components/forms/modal';
import {editTask, useModalWithData, saveTask, deleteTask} from './controller';

export default function TableTasks (props){

    const {task, setTask, tasks, setTasks, isShowModal, setIsShowModal, initialTask} = useModalWithData();
    const [ pageSize, setPageSize ] = useState(2); 
    const [ currentPage, setCurrentPage ] = useState(1); 
    const [ totalTaskRecords, setTotalTaskRecords ] = useState('');   
    const [ lastPage, setLastPage ] = useState(1); 

    // const lastPage = Math.ceil(totalTaskRecords / pageSize);

    useEffect(() => {                            
        loadAllTasks();
    }, [currentPage] ); 

    useEffect(() => {                            
        loadAllTasks();
    }, [] ); 

    async function  loadAllTasks() {

        const response = await api.get(`/tasks?page=` + currentPage + `&pageSize=`+pageSize);
        const {tasks, totalRecords} = response.data;
        setTasks(tasks); 
        setTotalTaskRecords(totalRecords);
        setLastPage(Math.ceil(totalRecords / pageSize));

        console.log("currentPage" + currentPage);
        console.log("lastPage" + lastPage);  

        if(currentPage> lastPage)
            setCurrentPage(lastPage);
            
        console.log("sdsds" + Math.ceil(totalRecords / pageSize));  
    }    

    const prevPage = () =>{     
        
        if(currentPage !== 1)
            setCurrentPage(currentPage -1);

        // if(currentPage === 1) return

        // loadAllTasks(currentPage -1);
    }
    
    const nextPage = async e =>{ 

        setCurrentPage(currentPage +1);
        // loadAllTasks(currentPage + 1);        
    }  
      
    const clearTasksComponents = () =>{
        setTask(initialTask);
        loadAllTasks();
        setIsShowModal(false);
        console.log("wewewe");
    }
    
    const showModal = () => {setIsShowModal(true);}  
  
    const hideModal = e => {clearTasksComponents();}


    return (

        <div className="card card-fluid">
                        
            <div className="card-header border-0">
                <div className="d-flex align-items-center">

                    <span className="mr-auto">Tarefas</span>
                    
                    <button onClick={() =>showModal()}
                            className="btn btn-icon btn-light">
                        <i className="fa fa-plus-circle"></i>
                    </button>
                    
                    <div className="dropdown">
                        <button type="button" className="btn btn-icon btn-light" data-toggle="dropdown">
                            <i className="fa fa-ellipsis-v"></i>
                        </button>
                        <div className="dropdown-arrow"></div>
                        <div className="dropdown-menu dropdown-menu-right">
                            <button className="dropdown-item">Edit</button> 
                            <button className="dropdown-item">Remove</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-">
                            <tr>
                                <th>Tarefa</th>                            
                                <th>Data</th>
                                <th>Duração</th>
                                <th>Data Conclusão</th>
                                <th>Status</th>
                                <th>Tipo Tarefa</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                                
                        <tbody>
                            {tasks.map(task => (
                                <tr key={task.id}>
                                    <td>{task.name}</td>                                
                                    <td>{getFullDateHour((new Date(task.dateHour)))}</td>                                
                                    <td>{task.duration}</td>
                                    <td>{task.completionDate}</td>                                    
                                    <td>{task.taskStatusId}</td>
                                    <td>{task.taskTypeId}</td>
                                    <td>
                                        <button onClick={() =>editTask(task, showModal, setTask)}  
                                                    className="btn btn-sm btn-icon btn-secondary">
                                            <i className="fa fa-pencil-alt"></i> 
                                            <span className="sr-only">Edit</span>
                                        </button>
                                        <button     onClick={() => deleteTask(task.id, clearTasksComponents)}
                                                    className="btn btn-sm btn-icon btn-secondary">                                        
                                            <i className="far fa-trash-alt"></i> 
                                            <span className="sr-only">Delete</span>
                                        </button>                  
                                
                                    </td>
                                </tr>                    
                            ))}  
                        </tbody>
                            
                    </table>            
                
                </div>
                <ul className="pagination justify-content-center mt-4">

                    <li className="page-item">
                        <button className="page-link" 
                                tabIndex="-1"
                                onClick={() => {prevPage()} }>
                            <i className="fa fa-lg fa-angle-left"></i>
                        </button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" 
                                onClick={() => {setCurrentPage(1)} }>
                            1
                        </button>
                    </li>
                    <li className="page-item disabled">
                        <button className="page-link" tabIndex="-1">...</button>
                    </li>
                    
                    <li className="page-item active">
                        <button className="page-link">{currentPage}</button>
                    </li>

                    <li className="page-item disabled">
                        <button className="page-link" tabIndex="-1">...</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" 
                                onClick={() => {setCurrentPage(lastPage)} }>
                            {lastPage}
                        </button>
                    </li>
                    <li className="page-item">
                        <button className="page-link"
                                onClick={() => {
                                    if(currentPage ===lastPage) return;
                                    nextPage();
                                } }>
                            <i className="fa fa-lg fa-angle-right"></i>
                        </button>
                    </li>
                </ul>
            </div>

            <Modal  show={isShowModal} 
                    handleClose={hideModal} 
                    modalTitle={'Título do Modal'} >
                        
                <FormTask   task={task} 
                            saveTask={saveTask} 
                            closeTask={hideModal} />
            </Modal>

        </div>   
    
    )
    
}