
import React from 'react';
import ClockButton from '../forms/clockButton';

const Aside = () =>(
    <aside className="app-aside app-aside-expand-md app-aside-light">
            
        <div className="aside-content">
        
        <header className="aside-header d-block d-md-none">
            
            <button className="btn-account" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#dropdown-aside">

            <span className="user-avatar user-avatar-lg">
                <img src="template/images/team2.png" alt="" />
            </span> 

            <span className="account-icon">
                <span className="fa fa-caret-down fa-lg"></span>
            </span> 

            <span className="account-summary">
                <span className="account-name">Carmo Júnior</span> 
                <span className="account-description">Programador</span>
            </span>
            </button> 
            
            <div id="dropdown-aside" className="dropdown-aside collapse">
            
            <div className="pb-3">
                <a className="dropdown-item" href="user-profile.html">
                <span className="dropdown-icon oi oi-person"></span> 
                Profile
                </a> 
                <a className="dropdown-item" href="auth-signin-v1.html">
                <span className="dropdown-icon oi oi-account-logout"></span> 
                Logout
                </a>
                <div className="dropdown-divider"></div>
                <a className="dropdown-item" href="/">Help Center</a> 
                <a className="dropdown-item" href="/">Ask Forum</a> 
                
            </div>
            </div>
        </header>
        

        <div className="aside-menu overflow-hidden">
            
            <nav id="stacked-menu" className="stacked-menu">
            
                <ul className="menu">
                    
                    <li className="menu-item has-active">
                        <a href="/" className="menu-link">
                            <span className="menu-icon fas fa-home"></span> 
                            <span className="menu-text">Dashboard</span>
                        </a>                        
                    </li>             

                    <li className="menu-item">
                        <a href="/tasks/" className="menu-link">
                            <span className="menu-icon fas  fa-file"></span> 
                            <span className="menu-text">Tarefas</span>
                        </a>                        
                    </li>             

                    <li className="menu-item">
                        <a href="/products/" className="menu-link">
                            <span className="menu-icon fas fa-table"></span> 
                            <span className="menu-text">Produtos</span>
                        </a>                        
                    </li>                          
                   
                    <li className="menu-header">Interfaces </li>
                    
                    <li className="menu-item has-child">

                        <a href="/" className="menu-link">
                            <span className="menu-icon oi oi-puzzle-piece"></span> 
                            <span className="menu-text">Tarefas</span>
                        </a> 
                        <ul className="menu">
                            <li className="menu-item">
                            <a href="/tasks/" className="menu-link">Tarefas</a>
                            </li>
                        </ul>
                    </li>            
                    
                </ul>
            </nav>
        </div>
        

        <footer className="aside-footer border-top p-3">

            <ClockButton />

        </footer>

        </div>
    
    </aside>
);

export default Aside;