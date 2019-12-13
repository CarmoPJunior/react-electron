import React from 'react';
import {getFullDateHour} from '../../utils/dateUtil';

export default function TableTasks (props){

    const lastPage = Math.ceil(props.totalRecords / props.pageSize);

    return (

        <div className="card card-fluid">
                        
            <div className="card-header border-0">
                <div className="d-flex align-items-center">

                    <span className="mr-auto">Tarefas</span>
                    
                    <button onClick={() => props.addTask()}
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
                            {props.tasks.map(task => (
                                <tr key={task.id}>
                                    <td>{task.name}</td>                                
                                    <td>{getFullDateHour((new Date(task.dateHour)))}</td>                                
                                    <td>{task.duration}</td>
                                    <td>{task.completionDate}</td>                                    
                                    <td>{task.taskStatusId}</td>
                                    <td>{task.taskTypeId}</td>
                                    <td>
                                        <button     onClick={() => { props.setTask(task)
                                                                    props.editTask(task, props.setSelected)}}
                                                    className="btn btn-sm btn-icon btn-secondary">
                                            <i className="fa fa-pencil-alt"></i> 
                                            <span className="sr-only">Edit</span>
                                        </button>
                                        <button     onClick={() => props.deleteTask(task.id)}
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
                                onClick={() => {props.prevPage()} }>
                            <i className="fa fa-lg fa-angle-left"></i>
                        </button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" 
                                onClick={() => {props.setCurrentPage(1)} }>
                            1
                        </button>
                    </li>
                    <li className="page-item disabled">
                        <button className="page-link" tabIndex="-1">...</button>
                    </li>
                    
                    <li className="page-item active">
                        <button className="page-link">{props.currentPage}</button>
                    </li>

                    <li className="page-item disabled">
                        <button className="page-link" tabIndex="-1">...</button>
                    </li>
                    <li className="page-item">
                        <button className="page-link" 
                                onClick={() => {props.setCurrentPage(lastPage)} }>
                            {lastPage}
                        </button>
                    </li>
                    <li className="page-item">
                        <button className="page-link"
                                onClick={() => {
                                    if(props.currentPage ===lastPage) return;
                                    props.nextPage();
                                } }>
                            <i className="fa fa-lg fa-angle-right"></i>
                        </button>
                    </li>
                </ul>
            </div>
        </div>   
    
    )
    
}