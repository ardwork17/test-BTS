import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";


function Login() {

    const history = useHistory();
    const [username, setUsername] =  useState("");
    const [password, setPass] =  useState("");
   
    useEffect(() => {
    if(localStorage.getItem('token')) {
    }
    }, []);

    const onSubmit = async (e) => {
        e.preventDefault();
        var bodyFormData = {
            username: username,
            password: password
        }
        
        axios({
            method: "post",
            url: "http://94.74.86.174:8080/api/login",
            data: bodyFormData,
            headers: { "Content-Type": "application/json" },
        })
            .then((response) => {
                localStorage.setItem('token', response.data.token);
                
                history.push('/dashboard');
                console.log("berhasil login", response.data.data)
                
            })
            .catch((error) => {
                console.log("tidak berhasil login", error.response.data)
               
              
            })
        };

return (
    <div className="container" style={{ marginTop: "130px" }}>
        <div className="row justify-content-center row-login">
            <div className="col-md-6 col-lg-5 col-sm-12 col-xs-12 col-login">
                <div className="title-login">
                    <h2 className="title-content">Login To Your <span className="title-content-1">Account</span></h2>
                </div>
                    <div className="card card-login">
                        <div className="card-body">
                       
                            <form onSubmit={onSubmit}>
                                <div className="email mb-3">
                                    <label className="form-label">Email</label>
                                    <input  type="text" 
                                name="username"
                                placeholder="Input Username"
                                className="form-control form-control-sm input"
                                value={username}
                                onChange={(e) => {
                                  const re = /^[a-z\A-Z\0-9\@\.\ \b]+$/;
                                  if (e.target.value === "" || re.test(e.target.value)) {
                                  setUsername(e.target.value);}}}/>
                                        
                                </div>
                       
                                <div className="password mb-3">
                                    <label className="form-label">Password</label>
                                        <div className="input-group grup-password">
                                            <input  
                                            name="password" 
                                            className="form-password form-control" 
                                            type="password"
                                            placeholder="Input Password"
                                            onChange={e=>setPass(e.target.value)}/>
                                    
                                        </div>
                                        
                                </div>

                           
                       
                                <div className="row row-btn">
                                    <div className="col-md-6 col-lg-6 col-sm-6 col-xs-6 col-btn">
                                        <div className="button-login">
                                           <button type="submit" className="btn btn-login btn-primary" ><span className="title-login">Sign In</span></button> 
                                           
                                        </div>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>  
            </div>

          
        </div>
    </div>
  );
}

export default Login;

