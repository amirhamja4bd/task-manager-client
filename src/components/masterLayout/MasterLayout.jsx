import React, {Fragment, useRef} from "react";
import {Container,Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import './sidebar.css'
import './dropdownmenu.css'
import { BsBackspace, BsBoxArrowLeft, BsBoundingBox, BsBrightnessHigh, BsTextParagraph } from "react-icons/bs";
import {getUserDetails, removeSessions} from "../../helper/SessionHelper";


const MainLayout = (props) => {

    let contentRef,sideNavRef=useRef();

    const onLogout=()=>{
        removeSessions();
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
                        <i class="fa-brands fa-digital-ocean nav-logo ms-5 me-2 my-text-primary"></i>
                            <b>Task Manager</b>
                        {/* <img className="nav-logo mx-2"  src={logo} alt="logo"/> */}

                    </Navbar.Brand>

                    <div className="float-right h-auto d-flex">
                        <div className="user-dropdown">
                            <div className="d-flex my-bg-primary px-1 pt-1" style={{borderRadius:"40px"}}>
                                <img className="icon-nav-img icon-nav" src={getUserDetails()['photo']} alt="" style={{width:"40px", height:"40px"}}/>
                                <p className="align-middle pe-2 text-light" style={{marginTop:"9px"}}>{getUserDetails()['firstName'] + ' ' + getUserDetails()['lastName']}</p>
                            </div>
                            <div className="user-dropdown-content ">
                                <div className="mt-4 text-center">
                                    <img className="icon-nav-img icon-nav" src={getUserDetails()['photo']} alt=""/>
                                    {/* <i class="fa-solid fa-face-grin-tongue-squint"></i> */}
                                    <h6>{getUserDetails()['firstName'] + ' ' + getUserDetails()['lastName']}</h6>
                                    <hr className="user-dropdown-divider  p-0"/>
                                </div>
                                <NavLink to="/Profile" className="side-bar-item">
                                    <i class="fa-solid fa-user side-bar-item-icon"></i>
                                    <span className="side-bar-item-caption">Profile</span>
                                </NavLink>
                                <a onClick={onLogout}  className="side-bar-item">
                                    
                                    <BsBoxArrowLeft  className=" side-bar-item-icon" />
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
                    <BsBoundingBox className=" side-bar-item-icon"/>
                    <span className="side-bar-item-caption">Dashboard</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/Create" >
                    {/* <a className="side-bar-item-icon" /> */}
                    <i class="fa-regular fa-pen-to-square side-bar-item-icon"></i>
                    <span className="side-bar-item-caption">Create New</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/All" >
                    {/* <a className="side-bar-item-icon" /> */}
                    <BsTextParagraph className=" side-bar-item-icon" />
                    <span className="side-bar-item-caption">New Task</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" } to="/Progress" >
                    {/* <a className="side-bar-item-icon" /> */}
                    <BsBrightnessHigh className=" side-bar-item-icon"/>
                    <span className="side-bar-item-caption">In Progress</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/Completed" >
                    {/* <a className="side-bar-item-icon" /> */}
                    <i class="fa-solid fa-circle-check side-bar-item-icon"></i>
                    <span className="side-bar-item-caption">Completed</span>
                </NavLink>

                <NavLink className={(navData) => navData.isActive ? "side-bar-item-active side-bar-item mt-2" : "side-bar-item mt-2" }  to="/Canceled" >
                    {/* <a className="side-bar-item-icon" /> */}
                    <BsBackspace className=" side-bar-item-icon"/>
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