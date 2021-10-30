import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../Home/Header/Header';
import './Login.css'

const Login = () => {
    const { SignInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "home";
    const handleGoogleLogin = () => {
        SignInWithGoogle()
            .then(result =>
                history.push(redirect_uri)
            )
    }
    return (
        <div>

            <div className="d-flex align-items-center justify-content-center" style={{ height: '70vh' }}>
                <div>
                    <div className="mt-4 text-center">
                        <img src="https://i.ibb.co/Q965Vtn/f344f51106f046aa99535479d90d08c1.png" alt="" />
                    </div>
                    <div className=" mt-0 text-center shadow-sm border border-2 p-3"  >
                        <div className="d-flex justify-content-around align-items-center mb-5 p-0 pe-2">

                            <div className="p-5">
                                <h4 className="mt-5 mb-3">Login With</h4>
                                <div className="d-flex justify-content-around align-items-center mb-5 p-0 pe-2 btn-login">
                                    <div className="m-0 me-2" >
                                        <img src="https://i.ibb.co/RywzMBF/7123025-logo-google-g-icon.png" className="img-fluid" alt="" />
                                    </div>
                                    <h6 className="p-0 m-0" onClick={handleGoogleLogin}>Continue With Google</h6>
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