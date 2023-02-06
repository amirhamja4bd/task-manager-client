import React, {Fragment, useRef} from "react";
import {Container,Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './sidebar.css'
import './dropdownmenu.css'

const MainLayout = (props) => {

    let contentRef,sideNavRef=useRef();

    const onLogout=()=>{
        
    }

    const MenuBarClickHandler = () => {
        let sideNav = sideNavRef;
        let content = contentRef;
        if (sideNav.classList.contains("side-nav-open")) {
            sideNav.classList.add("side-nav-close");
            sideNav.classList.remove("side-nav-open");
            content.classList.add("content-expand");
            content.classList.remove("content");
        } else {
            sideNav.classList.remove("side-nav-close");
            sideNav.classList.add("side-nav-open");
            content.classList.remove("content-expand");
            content.classList.add("content");
        }
    };



    return (
        <Fragment>
            <Navbar  className="fixed-top px-5 shadow-sm my-nav">
                <Container fluid={true}>
                    <Navbar.Brand >
                        <a className="icon-nav m-0 h5" onClick={MenuBarClickHandler}> 
                        <i class="fa-solid fa-sliders"></i>
                        </a>
                        <i class="fa-brands fa-digital-ocean nav-logo mx-5">Task Manager</i>
                        {/* <img className="nav-logo mx-2"  src={logo} alt="logo"/> */}

                    </Navbar.Brand>

                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">
                            {/* <img className="icon-nav-img icon-nav" src={logo} alt=""/> */}
                            <i class="fa-solid fa-user"></i>
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    {/* <img className="icon-nav-img" src={logo} alt=""/> */}
                                    <i class="fa-solid fa-face-grin-tongue-squint"></i>
                                    <h6>firstName</h6>
                                    <hr className="user-dropdown-divider  p-0"/>
                                </div>
                                <NavLink to="/Profile" className="side-bar-item">
                                    <i class="fa-solid fa-user side-bar-item-icon"></i>
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a onClick={onLogout}  className="side-bar-item">
                                    <i class="fa-solid fa-right-from-bracket side-bar-item-icon"></i>
                                    <span className="side-bar-item-caption">Logout</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </Container>
            </Navbar>

            <div ref={(div) =>{sideNavRef=div}} className="side-nav-open ">

                <NavLink   className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/"  end>
                    {/* <a className="side-bar-item-icon" /> */}
                    <i class="fa-solid fa-circle-check side-bar-item-icon"></i>
                    <span className="side-bar-item-caption">Dashboard</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/Create" >
                    {/* <a className="side-bar-item-icon" /> */}
                    <i class="fa-solid fa-circle-check side-bar-item-icon"></i>
                    <span className="side-bar-item-caption">Create New</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/All" >
                    {/* <a className="side-bar-item-icon" /> */}
                    <i class="fa-solid fa-circle-check side-bar-item-icon"></i>
                    <span className="side-bar-item-caption">New Task</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/Progress" >
                    {/* <a className="side-bar-item-icon" /> */}
                    <i class="fa-solid fa-circle-check side-bar-item-icon"></i>
                    <span className="side-bar-item-caption">In Progress</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/Completed" >
                    {/* <a className="side-bar-item-icon" /> */}
                    <i class="fa-solid fa-circle-check side-bar-item-icon"></i>
                    <span className="side-bar-item-caption">Completed</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/Canceled" >
                    {/* <a className="side-bar-item-icon" /> */}
                    <i class="fa-solid fa-circle-check side-bar-item-icon"></i>
                    <span className="side-bar-item-caption">Canceled</span>
                </NavLink>

            </div>

            <div ref={(div) => contentRef = div} className="content">
                {props.children}
            </div>

        </Fragment>
    );
};

export default MainLayout;