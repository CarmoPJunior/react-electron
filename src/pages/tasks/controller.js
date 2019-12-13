
import api from '../../services/api';
import React, { useState, useEffect } from 'react';



export const useModalWithData = () => {

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
    const [ status, setStatus ] = useState([1]); 
    const [ tasks, setTasks ] = useState([]);
    const [ isShowModal, setIsShowModal ] = useState(false); 
    
    return { task, setTask, initialTask, status, setStatus, tasks, setTasks, isShowModal, setIsShowModal}
  }


export const finishTask  = async  (taskTemp, loadTasks, status)=>{
    console.log(taskTemp);
    await api.put(`/finishTask`, { task : taskTemp })
    .then(res => {
        console.log(res.data);
        loadTasks(status);
    }).catch(err => {
        console.log(err.response);
    });     
    
}

export const loadTasks = async (statusTemp, setStatus, setTasks) =>{

    if(!statusTemp)
      statusTemp = [1,2,3,4,7];
    
    setStatus(statusTemp);

    const response = await api.get(`/taskByStatus?status=` + statusTemp);
    const {tasks, totalRecords} = response.data;    
    setTasks(tasks);  

    return tasks;   
}    

export const editTask  = (taskTemp, showModal, setTask) =>{

    const editTask  ={
         taskId: taskTemp.id,
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
    
    console.log(editTask);
    setTask(editTask);
    showModal();
 }    

 export const saveTask = async (task) => {
    
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

    console.log(task);

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
    
    //clearTasksComponents();
    
  }


// export default function TaskController (props){

//      async function finishTask (taskTemp, loadTasks, status){
//         console.log(taskTemp);
//         await api.put(`/finishTask`, { task : taskTemp })
//         .then(res => {
//             console.log(res.data);
//             loadTasks(status);
//         }).catch(err => {
//             console.log(err.response);
//         });     
        
//     }
//     function editTask (taskTemp, showModal){

//         const editTask  ={
//              taskId: taskTemp.id,
//              taskName: taskTemp.name,
//              taskDescription: taskTemp.description,
//              taskObservation: taskTemp.observation,
//              taskDateHour: taskTemp.dateHour,
//              taskDuration: taskTemp.duration,
//              taskCompletionDate: taskTemp.completionDate,            
//              taskStatus: taskTemp.taskStatusId,
//              taskType: taskTemp.taskTypeId,
//              taskPeriodicity: taskTemp.taskPeriodicityId,
//          };    
 
//         //  setTask(editTask);
//         //  showModal();
//      }    

// }

