import React, { useEffect } from 'react';
import {useData, transformText} from './controller';
import FormUpperLowerCase from './form';

export default function Card (props){
  
    const {originalData, setOriginalData, isShowModal, setIsShowModal, transFormType, setTransFormType} = useData();
  


    const showModal = () => {setIsShowModal(true);}  
    const hideModal = e => {clearTasksComponents();}

    // useEffect(() => {                            
    //     loadTasks(status, setStatus, setTasks);      
    // }, [status] );
  
    const clearTasksComponents = () =>{
        // setTransformedData('');
        setOriginalData('');        
        setIsShowModal(false);
    }



    return (       
        
        <div className="card card-fluid">
                      
          <div className="card-header"> 

            <div className="row" >

              <div className="col-8 col-lg-8 col-xl-8">
                <div className=" float-left">{props.cardTitle}</div>                          
              </div>
  
              <div className="col-4 col-lg-4 col-xl-4">

              </div> 

            </div>


            <div className="row" style={{marginTop: 5, marginBottom: -20}} >
              <div className="col-12 col-lg-12 col-xl-12">
                <div className=" float-left"> 
                </div>  
              </div>
            </div>

          </div>

                     
          <div className="list-group list-group-flush 
                          list-group-divider list-group-bordered 
                          perfect-scrollbar" 
                style={{maxHeight : 200}} >

                <FormUpperLowerCase originalData={originalData}     
                                    transFormType={transFormType}                                 
                                    closeTask={hideModal} 
                                    transformText={transformText} />
     

                         
          </div>
                   

          <div className="card-footer">
            <div className="card-footer-item">
{/* 
              <button onClick={() =>showModal()}
                      className="btn btn-link btn-xs">
                <i className="fa fa-plus-circle mr-1"></i> 
                <span>Add todo</span>
              </button> */}

            </div>
          </div>


          {/* { isShowModal && 

            <Modal show={isShowModal}
                  handleClose={hideModal} 
                  modalTitle={'Título do Modal'}>
               <FormTask   task={task} 
                            saveTask={saveTask} 
                            closeTask={hideModal} />
            </Modal>} */}
        </div>
         
        
    )
    
}  