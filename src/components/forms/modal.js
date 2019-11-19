import React from 'react';


export default function Modal (props){

    const showHideClassName = props.show ? 
                    'modal fade has-shown show display-block' 
                    : 'modal fade has-shown display-none';

    return (       
        
        <div    className={showHideClassName}
                tabIndex="-1" >
        
            <div className="modal-dialog modal-dialog-centered" >
          
                <div className="modal-content">
                    
                    <div className="modal-header">
                        <h5 className="modal-title">{props.modalTitle} </h5>
                    </div>
                    
                    <div className="modal-body">
                        {props.children}
                    </div>
                    
                    {/* <div className="modal-footer">
                        <button type="button" 
                                className="btn btn-primary btn-sm">
                            Click Me
                        </button> 
                        <button type="button" 
                                onClick={props.handleClose}
                                className="btn btn-danger btn-sm">
                            <span className="oi oi-x mr-1"></span>
                            Fechar
                        </button>
                    </div> */}
                </div>
            </div>
        
        </div>        
        
    )
    
}