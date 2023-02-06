import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import {IsEmail, IsEmpty, IsMobile} from "../../helper/FormHelper";
import { useNavigate } from 'react-router-dom';
import { registrationRequest } from '../../APIRequest/APIRequest';

const Registration = () => {
    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef=useRef();

    let navigate=useNavigate();

    const handleRegistration = () => {

        let email=emailRef.value;
        let fastName=firstNameRef.value;
        let lastName=lastNameRef.value;
        let mobile=mobileRef.value;
        let password= passwordRef.value;
        let photo="https://i.pravatar.cc/300"

        if(IsEmail(email)){
            toast.error("Valid Email Address Required !")
        }
        else if(IsEmpty(fastName)){
            toast.error("First Name Required !")
        }
        else if(IsEmpty(lastName)){
            toast.error("Last Name Required !")
        }
        else if(!IsMobile(mobile)){
            toast.error("Valid Mobile  Required !")
        }
        else if(IsEmpty(password)){
            toast.error("Password Required !")
        }
        else{
            registrationRequest(email,fastName,lastName,mobile,password,photo).then((result)=>{
                if(result===true){
                    navigate("/login")
                }
                    console.log(result)
            })
        }
    }
    return (
        <div>
            <div className="container">
                <div className="row  justify-content-center ">
                    <div className="col-md-10 col-lg-10 center-screen">
                        <div className="card animated fadeIn w-75 p-3 mt-5">
                            <div className="card-body">
                                <h4>Sign Up</h4>
                                <hr/>
                                <div className="container-fluid m-0 p-0">
                                    <div className="row m-0 p-0">
                                        <div className="col-md-12 p-2">
                                            <label>Email Address</label>
                                            <input ref={(input)=>emailRef=input}  placeholder="User Email" className="form-control form-control-sm animated fadeInUp" type="email"/>
                                        </div>
                                        <div className="col-md-12 p-2">
                                            <label>First Name</label>
                                            <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control form-control-sm animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-md-12 p-2">
                                            <label>Last Name</label>
                                            <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control form-control-sm animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-md-12 p-2">
                                            <label>Mobile Number</label>
                                            <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control form-control-sm animated fadeInUp" type="mobile"/>
                                        </div>
                                        <div className="col-md-12 p-2">
                                            <label>Password</label>
                                            <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control form-control-sm animated fadeInUp" type="password"/>
                                        </div>

                                    </div>
                                    <div lassName="row mt-2 p-0">
                                        <div className="col-md-12 p-2">
                                            <button onClick={handleRegistration}  className="btn btn-sm mt-3 w-100 float-end btn-primary animated fadeInUp">Submit</button>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;