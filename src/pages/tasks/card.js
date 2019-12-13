import React, { useEffect } from 'react';
import {getFullDateHour} from '../../utils/dateUtil';
import Modal from '../../components/forms/modal'
import FormTask from './form';
import {editTask, finishTask, useModalWithData, loadTasks, saveTask } from './controller';

export default function Card (props){
  
  const {task, setTask, tasks, setTasks, status, setStatus, isShowModal, setIsShowModal} = useModalWithData();

  useEffect(() => {                            
      loadTasks(status, setStatus, setTasks);
      console.log(status);
      console.log(task);
  }, [] );

  const clearTasksComponents = () =>{
      setTask(useModalWithData.initialTask);
      loadTasks(status, setStatus, setTasks);
      setIsShowModal(false);
  }
  
  const showModal = () => {setIsShowModal(true);}  

  const hideModal = e => {clearTasksComponents();}

 
    return (       
        
        <div className="card card-fluid">
                      
          <div className="card-header"> 

            <div className="row" >

              <div className="col-8 col-lg-8 col-xl-8">
                <div className=" float-left">{props.cardTitle}</div>                          
              </div>
  
              <div className="col-4 col-lg-4 col-xl-4">

                <div className="card-title-control btn-toolbar float-right"  >
                  <div className="dropdown">
                    <button type="button" className="btn btn-icon btn-light" 
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fa fa-ellipsis-v"></i>
                    </button>
                    <div className="dropdown-arrow"></div>
                    <div className="dropdown-menu dropdown-menu-right">
                      
                      <h6 className="dropdown-header"> Sort by </h6>
                      <div className="dropdown-divider"></div>

                      <label className="custom-control custom-radio stop-propagation">                       
                        <span className="custom-control-label">My order</span>
                      </label> 

                      <label className="custom-control custom-radio stop-propagation">
                        <span className="custom-control-label">Due date</span>
                      </label>                             

                    </div>
                  </div>
                </div>

              </div> 

            </div>


            <div className="row" style={{marginTop: 5, marginBottom: -20}} >
              <div className="col-12 col-lg-12 col-xl-12">
                <div className=" float-left"> 
                  <ul className="list-inline small float-left">
                    <li className="list-inline-item">                      
                      <button onClick={() => {loadTasks()}}
                              className="btn btn-link btn-xs" 
                              style={{color:"white"}}>
                        <i className="fa fa-fw fa-circle text-cyan"></i> 
                        Todas
                      </button> 
                    </li>                  
                    <li className="list-inline-item">
                      <button onClick={() => {loadTasks([1])}}
                              className="btn btn-link btn-xs" 
                              style={{color:"white"}}>
                        <i className="fa fa-fw fa-circle text-yellow"></i> 
                        Pendentes 
                      </button> 
                    </li>
                    <li className="list-inline-item">
                      <button onClick={() => {loadTasks([5])}}
                              className="btn btn-link btn-xs" 
                              style={{color:"white"}}>
                        <i className="fa fa-fw fa-circle text-teal"></i> 
                        Finalizadas 
                      </button> 
                    </li>
                    <li className="list-inline-item">
                      <button onClick={() => {loadTasks([7])}}
                              className="list-inline-item btn btn-link btn-xs" 
                              style={{color:"white"}}> 
                        <i className="fa fa-fw fa-circle text-red"></i> 
                        Atrasadas 
                      </button>                    
                    </li>                  
                  </ul>
                </div>  
              </div>
            </div>

          </div>

                     
          <div className="list-group list-group-flush 
                          list-group-divider list-group-bordered 
                          perfect-scrollbar" 
                style={{maxHeight : 200}} >


            {tasks.map(task => (
                          
              <div  className="list-group-item list-group-item-action"
                    key={task.id}>

                <div className="list-group-item-figure">
                  <a  href="/" 
                      className= {(task.taskStatusId === 1)
                        ?"tile tile-circle bg-warning"
                        :(task.taskStatusId === 5)
                        ?"tile tile-circle bg-success"
                        :(task.taskStatusId === 7)
                        ?"tile tile-circle bg-red": "tile tile-circle bg-info"
                      }>
                      <span className="fa fa-tasks"></span>
                  </a>                 
                </div>

                <div className="list-group-item-body no-border-top">
                  <h4 className="list-group-item-title">
                    <a href="/">{task.name}</a>
                  </h4>
                  <p className="list-group-item-text">{getFullDateHour((new Date(task.dateHour)))}</p>
                </div>
                <div className="list-group-item-figure no-border-top">
                 
                  <button onClick={() =>finishTask(task, loadTasks, status )}  
                          className="btn btn-sm btn-icon btn-light" data-todoid="1">
                    <i className="fa fa-check"></i>
                  </button> 
                                    
                  <button type="button" onClick={() =>editTask(task, showModal, setTask)}  
                          className="btn btn-sm btn-icon btn-light" data-todoid="1">
                    <i className="fa fa-pencil-alt"></i>
                  </button>
                  
                </div>
              </div>
            ))}  
                         
          </div>
                   

          <div className="card-footer">
            <div className="card-footer-item">

              <button onClick={() =>showModal()}
                      className="btn btn-link btn-xs">
                <i className="fa fa-plus-circle mr-1"></i> 
                <span>Add todo</span>
              </button>

            </div>
          </div>


          <Modal  show={isShowModal} 
                    handleClose={hideModal} 
                    modalTitle={'Título do Modal'}
                    >
               <FormTask   task={task} 
                            saveTask={saveTask} 
                            closeTask={hideModal}
                             />
          </Modal>
        </div>
         
        
    )
    
}