import React, { useState, useEffect } from 'react';

export default function FormTask(props){
      
    const [ task, setTask ] = useState(props.task);
    
    useEffect(() => {
        setTask(props.task);
    }, [props.task]);        
    
    const handleInputChange = event => {        
        //console.log(event.target.name);
        //console.log(event.target.value);
		setTask({ ...task,  [event.target.name]: event.target.value});
    }        

    return (
        <form  >
            <fieldset>
                <legend>Tarefas</legend>

                <div className="row">
        
                    <div className="col-md-12">

                        <div className="form-group">
                            <label className="col-form-label col-form-label-sm">
                                Nome da Tarefa: 
                            </label>
                            <input  type="text" 
                                id="txtTaskName"
                                name="taskName" 
                                placeholder="Nome da Tarefa"
                                value={task.taskName}    
                                onChange={handleInputChange} 
                                className="form-control form-control-sm" />	
                        </div>

                    </div>
                
                </div>

                <div className="row">
                    
                    <div className="col-md-6">

                        <div className="form-group">
                            <label className="col-form-label col-form-label-sm">
                                Descrição da Tarefa: 
                            </label>    
                            
                            <textarea   id="txtTaskDescription"
                                        name="taskDescription" 
                                        placeholder="Descrição da Tarefa"
                                        value={task.taskDescription}    
                                        onChange={handleInputChange} 
                                        className="form-control"                                                        
                                        rows="3" />
                        </div>

                    </div>

                    <div className="col-md-6">

                        <div className="form-group">

                            <label className="col-form-label col-form-label-sm">
                                Observação da Tarefa: 
                            </label>    

                            <textarea   id="txtTaskObservation"
                                        name="taskObservation" 
                                        placeholder="Observação da Tarefa"
                                        value={task.taskObservation}    
                                        onChange={handleInputChange} 
                                        className="form-control"                                                        
                                        rows="3" />
                        </div>

                    </div>
                
                </div>

                <div className="row">

                    <div className="col-md-4">
                        
                        <div className="form-group">

                            <label className="col-form-label col-form-label-sm">
                                Tipo da Tarefa: 
                            </label>    

                            <select id="selcTaskType"
                                    name="taskType" 
                                    className="custom-select custom-select-sm"
                                    value={task.taskType}    
                                    onChange={handleInputChange} >
                                <option value=""> Escolha... </option>
                                <option value="1">Pessoal</option>
                                <option value="2">Trabalho</option>
                            </select>

                                                                
                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="form-group">

                            <label className="col-form-label col-form-label-sm">
                                Periodicidade: 
                            </label>    

                            <select id="selcTaskPeriodicity"
                                    name="taskPeriodicity" 
                                    className="custom-select custom-select-sm"
                                    value={task.taskPeriodicity}    
                                    onChange={handleInputChange} >
                                <option value=""> Escolha... </option>
                                <option value="1">Única</option>
                                <option value="2">Diária</option>
                                <option value="3">Período</option>
                            </select>
                                                            
                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="form-group">

                            <label className="col-form-label col-form-label-sm">
                                Status: 
                            </label>    

                            <select id="selcTaskStatus"
                                    name="taskStatus" 
                                    className="custom-select custom-select-sm"
                                    value={task.taskStatus}    
                                    onChange={handleInputChange} >
                                <option value=""> Escolha... </option>
                                <option value="1">Pendente</option>
                                <option value="2">Futuro</option>
                                <option value="3">Em Análise</option>
                                <option value="4">Em Teste</option>
                                <option value="5">Finalizada</option>
                                <option value="6">Cancelada</option>
                            </select>
                                                            
                        </div>

                    </div>


                </div>
                
                <div className="row">

                    <div className="col-md-4">

                        <div className="form-group">

                            <label className="col-form-label col-form-label-sm">
                                Data da Tarefa: 
                            </label>    
                            
                            <input  type="text" 
                                    id="txtTaskDateHour"
                                    name="taskDateHour" 
                                    placeholder="Descrição da Tarefa"
                                    value={task.taskDateHour}    
                                    onChange={handleInputChange} 
                                    className="form-control form-control-sm" />	
                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="form-group">

                            <label className="col-form-label col-form-label-sm">
                                Duração da Tarefa: 
                            </label>    

                            <input  type="text" 
                                    id="txtTaskDuration"
                                    name="taskDuration" 
                                    placeholder="Descrição da Tarefa"
                                    value={task.taskDuration}    
                                    onChange={handleInputChange} 
                                    className="form-control form-control-sm"  />	
                        </div>

                    </div>

                    <div className="col-md-4">

                        <div className="form-group">
                            <label className="col-form-label col-form-label-sm">
                                Data de Finalização: 
                            </label>    
                            
                            <input  type="text" 
                                    id="txtTaskCompletionDate"
                                    name="taskCompletionDate" 
                                    placeholder="Data de Finalização"
                                    value={task.taskCompletionDate}    
                                    onChange={handleInputChange} 
                                    className="form-control form-control-sm" />	
                        </div>

                    </div>

                </div>
                <hr className="my-1"></hr>
                <div className="form-actions">

                    <button onClick={async(e) => {   e.preventDefault();
                                                await props.saveTask(task);
                                                props.closeTask()}
                                            }
                            className="btn btn-primary btn-sm form-control-sm">
                        <span className="oi oi-plus mr-1"></span>
                        {!task.taskId ? 'Adicionar' : 'Atualizar'}                                        
                    </button>                                    

                    <button onClick={(e) =>{ e.preventDefault(); props.closeTask()}}
                            className="btn btn-danger btn-sm form-control-sm">
                        <span className="oi oi-action-undo mr-1"></span>
                        Voltar
                    </button>  

                </div>
                <br />

            </fieldset>
        </form>

    )


}