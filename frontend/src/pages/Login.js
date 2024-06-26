
import "../styles/Login.css"
import React, { useEffect, useState } from 'react';
import { useNavigate, } from 'react-router-dom';

const Login = () => {
   const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [session, setSession] = useState({})
  
    // Handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      const loginObj = {
        'email': email,
        'password': password
      }
      if(email && password){
        sessionStorage.setItem('user', JSON.stringify(loginObj))
        setSession(sessionStorage.getItem('user'))
      }
      session && navigate('/',)
      window.location.reload()
      // window.location.href = '/'
    };


    return (
        <div className="mainContainer">
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
              <span>Don't have an account? <a href="http://localhost:3000/">Sign up</a> </span>
            </form>
          </div>
        </div>
    )
}

export default Login