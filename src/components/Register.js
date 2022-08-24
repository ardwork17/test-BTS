import "../css/register.scss";
import React, { useState,useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router";


function Register() {
  const [username, setUsername] =  useState("");
  const [email, setEmail] =  useState("");
  const [password, setPass] =  useState("");
  
  const history = useHistory();


  const onSubmit = async (e) => {
    e.preventDefault();
    

  
  var bodyFormData = {
    email: email,
    password: password,
    username: username,
}

axios({
    method: "post",
    url: "http://94.74.86.174:8080/api/register",
    data: bodyFormData,
    headers: { "Content-Type": "application/json; string" },
})
  
      .then((response) => {
     console.log("berhasil login", response.data.data)
     history.push('/login');
       
      })
      .catch((error) => {
        console.log("tidak berhasil login", error.response.data)
      });
  };
 
  




  return (
    <>
    {/* <CekEmail sendemail={sendemail}/> */}
    <div className="register">
      <div className="container register-label">
        <div className="label">
          <h4 className="register-title">
                Register User
          </h4>
        </div>
   
        <div className="content">
          <div className="row form-row">
            <form encType="multipart" onSubmit={onSubmit}>
              <div className="col-12 form-col">
                <h5 className="card-title">Personal Data</h5>
                <div className="card">
                  <div className="card-body">
                    <div className="mb-2 row">
                      <label className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-2 col-form-label">
                        Username<span className="wajib">*</span>
                      </label>
                      <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7 col-xs-10 col-form-input">
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
                      </div>
                    </div>
                    
                    <div class="mb-2 row row-input">
                      <label className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-2 col-form-label">
                        Email<span className="wajib">*</span>
                      </label>
                      <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7 col-xs-10 col-form-input">
                        <input  type="email"
                                name="email"
                                value={email}
                                className="form-control form-control-sm input"
                                placeholder="Input Email"
                                onChange={(e) => {
                                  const re = /^[a-z\0-9\@\.\b]+$/;
                                  if (e.target.value === "" || re.test(e.target.value)) {
                                  setEmail(e.target.value);}}}/>
                            
                      </div>
                    </div>

                    <div class="mb-2 row row-password">
                      <label className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-2 col-form-label">
                        Password<span className="wajib">*</span>
                      </label>
                      <div className="col-xl-10 col-lg-9 col-md-8 col-sm-7 col-xs-10 col-form-input">
                        <div className="input-group grup-password">
                          <input  onChange={e=>setPass(e.target.value)}
                                  name="password"
                                  id="password"
                                  type="password"
                                  placeholder="Input Password"
                                  className="form-control form-control-sm input"
                                  aria-describedby="inputGroupPrepend">
                          </input>
                          
                          
                      </div>
                    </div>

                    

                  
                  </div>
                </div>
              </div>

            

              <div className="col-12 form-button">
            
                  <center>
                    <button type="submit" className="button-register">
                      <a className="regis"> Register</a>
                    </button>
                  </center>
           
              
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default Register;

