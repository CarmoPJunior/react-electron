
import api from '../../services/api';




// const foo = async () => {



//     // do something
// }


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

     console.log(taskTemp);
     console.log(editTask);
    setTask(editTask);
    showModal();
 }    


export default function TaskController (props){


     async function finishTask (taskTemp, loadTasks, status){
        console.log(taskTemp);
        await api.put(`/finishTask`, { task : taskTemp })
        .then(res => {
            console.log(res.data);
            loadTasks(status);
        }).catch(err => {
            console.log(err.response);
        });     
        
    }
    function editTask (taskTemp, showModal){

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
 
        //  setTask(editTask);
        //  showModal();
     }    












}



// const foo = async () => {



//     // do something
// }



// module.exports = {
//     finishTask

//     ,
//     editTask (taskTemp) {

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
//      }    ,

    
// }