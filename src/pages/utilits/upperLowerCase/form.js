import React, { useState, useEffect } from 'react';

export default function Form(props){
      
    const [ originalData, setOriginalData ] = useState(props.originalData);
    const [transformedData, setTransformedData] = useState(props.originalData);
    
    useEffect(() => {
        setTransformedData(props.transformText(originalData, props.transFormType));
    }, [originalData]);        
    
    const handleInputChange = event => {        

        // console.log(event.target.value);
        setOriginalData(event.target.value);
    }        

    return (
        <form  >
            <fieldset>

                <div className="row">
        
                    <div className="col-md-12">

                        <div className="form-group">
                            <label className="col-form-label col-form-label-sm">
                                Texto Original: 
                            </label>

                            <textarea   id="txtTextoOriginal"
                                        name="textoOriginal" 
                                        placeholder="Texto Original"
                                        value={originalData}    
                                        onChange={handleInputChange} 
                                        className="form-control form-control-sm"                                                        
                                        rows="3" />                            	
                        </div>

                    </div>
                
                </div>

                <div className="row">
        
                    <div className="col-md-12">

                        <div className="form-group">
                            <label className="col-form-label col-form-label-sm">
                                Texto Modificado: 
                            </label>

                            <textarea   id="txtTextoModificado"
                                        name="textoModificado" 
                                        placeholder="Texto Modificado"
                                        value={transformedData}    
                                        onChange={handleInputChange} 
                                        className="form-control form-control-sm"                                                        
                                        rows="3" />                            	
                        </div>

                    </div>
                
                </div>
                
                <div className="form-actions">
{/* 
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
                    </button>   */}

                </div>
                <br />

            </fieldset>
        </form>

    )


}