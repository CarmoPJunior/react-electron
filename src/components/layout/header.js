import React from 'react';
//import './styles.css'


const Header = () =>(
    
    <header className="app-header app-header-dark">
            <div className="top-bar">

              <div className="top-bar-brand">
                <a href="index.html">
                  <img src="template/images/brand-inverse.png" alt="" 
                        style={{height: '32px', width: 'auto'}} />
                </a>
              </div>

              <div className="top-bar-list">

                <div className="top-bar-item px-2 d-md-none d-lg-none d-xl-none">              
                  <button className="hamburger hamburger-squeeze" 
                          type="button" data-toggle="aside" aria-label="toggle menu">
                    <span className="hamburger-box"><span className="hamburger-inner"></span></span>
                  </button> 
                </div>

                <div className="top-bar-item top-bar-item-full">
                  
                  <form className="top-bar-search">
                    <div className="input-group input-group-search">
                      <div className="input-group-prepend">
                        
                      </div>
                      
                    </div>
                  </form>
                </div>

                <div className="top-bar-item top-bar-item-right px-0 d-none d-sm-flex">

                  <ul className="header-nav nav">

                    <li className="nav-item dropdown header-nav-dropdown has-notified">
                      <a className="nav-link" href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="oi oi-envelope-open"></span>
                      </a>
                      <div className="dropdown-arrow"></div>
                      <div className="dropdown-menu dropdown-menu-rich dropdown-menu-right">
                          <h6 className="dropdown-header stop-propagation">
                            <span>Messages</span> 
                            <a href="/">Mark all as read</a>
                          </h6>
                          <div className="dropdown-scroll perfect-scrollbar">
                          
                            <a href="/" className="dropdown-item unread">

                              <div className="tile tile-circle bg-teal"> GZ </div>
                              
                              <div className="dropdown-item-body">
                                <p className="subject"> Stilearning </p>
                                <p className="text text-truncate"> Invitation: Joe's Dinner @ Fri Aug 22 </p>
                                <span className="date">2 hours ago</span>
                              </div>
                            </a> 
                          </div>
                          <a href="page-messages.html" className="dropdown-footer">
                            All messages 
                            <i className="fas fa-fw fa-long-arrow-alt-right"></i>
                          </a>
                      </div>
                    </li>

                    <li className="nav-item dropdown header-nav-dropdown">
                      <a className="nav-link" href="/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="oi oi-grid-three-up"></span>
                      </a>
                      <div className="dropdown-arrow"></div>
                      <div className="dropdown-menu dropdown-menu-rich dropdown-menu-right">                    
                        <div className="dropdown-sheets">  
                          
                          <div className="dropdown-sheet-item">
                            <a href="/" className="tile-wrapper">
                              <span className="tile tile-lg bg-cyan">
                                <i className="fa fa-tasks"></i>
                              </span> 
                              <span className="tile-peek">Tasks</span>
                            </a>
                          </div>
                          
                        </div>
                      </div>
                    </li>

                  </ul>

                  <div className="dropdown">
                    <button className="btn-account d-none d-md-flex" type="button" 
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="user-avatar user-avatar-md">
                        <img src="template/images/team2.png" alt="" />
                      </span> 
                      <span className="account-summary pr-lg-4 d-none d-lg-block">
                        <span className="account-name">Carmo Júnior</span> 
                        <span className="account-description">Programador</span>
                      </span>
                    </button>
                    <div className="dropdown-arrow dropdown-arrow-left"></div>
                    <div className="dropdown-menu">
                      <h6 className="dropdown-header d-none d-md-block d-lg-none"> Carmo Júnior </h6>
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
                    </div>
                  </div>

                </div>
              </div>

            </div>
    </header>

);

export default Header;