import React, { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { loginRequest } from '../../APIRequest/APIRequest';
import { IsEmail, IsEmpty} from "../../helper/FormHelper";

const Login = () => {

    let passRef,emailRef=useRef();

    const SubmitLogin=()=>{
        let email=emailRef.value;
        let pass=passRef.value;
        if(IsEmail(email)){
            toast.error("Invalid Email Address")
        }
        else if(IsEmpty(pass)){
            toast.error("Password Required")
        }
        else{
            loginRequest(email,pass).then((result)=>{
                if(result===true){
                    window.location.href="/"
                }
            })
        }
    }

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-100  p-4">
                            <div className="card-body">
                                <h4 className='text-center'>SIGN IN</h4>
                                <br/>
                                <input  ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input ref={(input)=>passRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>

                                <Link className="text-center ms-3 h6 animated fadeInUp float-end" to="/SendOTP"><small>Forget Password</small></Link>
                                <br/><br />
                                <button onClick={SubmitLogin} className="btn w-100 animated fadeInUp float-end btn-primary ">Login</button>
                                <hr/>
                                <div className="float-end mt-3">

                                    <span>
                                    <small className="ms-1">Don’t have account?</small>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/registration"><small>Sign Up </small></Link>
                                        
                                    </span>

                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;