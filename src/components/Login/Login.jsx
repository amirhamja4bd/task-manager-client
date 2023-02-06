import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-100  p-4">
                            <div className="card-body">
                                <h4>SIGN IN</h4>
                                <br/>
                                <input placeholder="User Email" className="form-control form-control-sm animated fadeInUp" type="email"/>
                                <br/>
                                <input  placeholder="User Password" className="form-control form-control-sm animated fadeInUp" type="password"/>
                                <br/>
                                <button  className="btn w-100 animated fadeInUp float-end btn-primary btn-sm">Login</button>
                                <hr/>
                                <div className="float-end mt-3">

                                    <span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/Registration"><small>Sign Up </small></Link>
                                        <span className="ms-1"> |</span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/SendOTP"><small>Forget Password</small></Link>
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