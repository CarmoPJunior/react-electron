import React, {Component} from 'react';
import TaskCard from '../tasks/card';
import UpperLowerCaseCard from '../utilits/upperLowerCase/card';


// import { Link } from 'react-router-dom';


export default class Main extends Component{

        
    
    render(){
       

        return (
            <div className="page-inner">

                <header className="page-title-bar">

                    <div className="d-flex flex-column flex-md-row">   
                                
                        <span className="lead font-weight-bold">DASHBOARD</span>   
                        <div className="ml-auto"> 
                        <div className="dropdown">
                            <button className="btn btn-secondary" 
                                    data-toggle="dropdown" 
                                    aria-haspopup="true" 
                                    aria-expanded="false">
                                <span>This Week</span> 
                                <i className="fa fa-fw fa-caret-down"></i>
                            </button>
                        </div>

                        </div>
                    
                    </div>
                </header>
              
                <div className="page-section">

                    <div className="section-block">
                    
                        <div className="metric-row">
                            <div className="col-lg-9">
                                <div className="metric-row metric-flush">
                                    

                                    
                                </div>
                            </div>
                            <div className="col-lg-3">
                            
                                <a href="user-tasks.html" className="metric metric-bordered">
                                    <div className="metric-badge">
                                        <span className="badge badge-lg badge-success">
                                            <span className="oi oi-media-record pulse mr-1"></span> 
                                            ONGOING TASKS
                                        </span>
                                    </div>
                                    <p className="metric-value h3">
                                        <sub><i className="oi oi-timer"></i>
                                        </sub> 
                                        <span className="value">8</span>
                                    </p>
                                </a> 
                            </div>

                        </div>
                    </div>

                    <div className="row">

                        <div className="col-12 col-lg-12 col-xl-4">
                            <TaskCard  cardTitle={"Tarefas"} />
                        </div>

                        <div className="col-12 col-lg-12 col-xl-4">
                            <UpperLowerCaseCard cardTitle="Upper Lower Case" />
                        </div>

                        <div className="col-12 col-lg-12 col-xl-4"></div>


                    </div>

                </div>

            </div>
        )
        
        
    }
}