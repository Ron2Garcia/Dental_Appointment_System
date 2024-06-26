
import "../styles/Login.css"
import React, { useEffect, useState } from 'react';
import { useNavigate, } from 'react-router-dom';
import axios from 'axios'
import Dialog from "../components/Dialog";
import Register from "../components/Register";
const Login = () => {
   const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [session, setSession] = useState({})
    const [isOpen, setIsOpen] = useState(false);

    const openDialog = () => {
      setIsOpen(true);
    };

    const closeDialog = () => {
      setIsOpen(false);
    };
  
    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      const loginObj = {
        'email': email,
        'password': password
      }
      if(email && password){
        const url = `http://localhost:3050/api/users/${email}`
        const userDetail = await axios.get(url).then(res=>{
          return res.data
        })
        if(!userDetail || userDetail.length === 0){
          alert('Email not registered')
          return
        }
        if(userDetail[0].password !== password){
          alert('Wrong Password')
          return
        }
        if(userDetail[0].password === password){
          sessionStorage.setItem('user', JSON.stringify(loginObj))
          setSession(sessionStorage.getItem('user'))
        }
      }
      session && navigate('/',)
      window.location.reload()
    };


    return (
        <div className="mainContainer">
          <h1>Dental Clinic Online Appointment</h1>
          <div className="loginContainer">
              <form onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit">Sign in</button>
              <span>Don't have an account? <span className="signup" onClick={openDialog}>Sign up</span> </span>
            </form>
            <Dialog title="Registration Form" isOpen={isOpen} onClose={closeDialog} >
                  <Register onClickRegister={closeDialog}></Register>
            </Dialog>
          </div>
        </div>
    )
}

export default Login