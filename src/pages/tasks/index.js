import React from 'react';
import TableTask from './tableTasks';

export default function Task (){
	           
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
                        <TableTask   />
                    </div>
                </div>
            </div>

            
        </div>
    )
    
}