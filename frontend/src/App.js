// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from "./pages/Login"
import Home from "./pages/Home"
// import NavBar from './components/NavigationBar' 

// import Appointment from "./pages/Appointment"
function App() {
  const checkLogin = () => {
    const getUser = sessionStorage.getItem('user')
    return !getUser ? false : true
  }
  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      <BrowserRouter>
        {/* <Routes> */}
          {/* <Route path="/login" element={  !checkLogin() ? <Login /> : <Home />} /> */}
          {/* <Route path="/" element={ checkLogin() ? <Home /> : <Login />} /> */}
          {/* <Route path="/appointment" element={ checkLodgin() ? <Appointment /> : <Login />} /> */}
          <PrivateRoute PrivateRoute value={checkLogin()}></PrivateRoute>
        {/* </Routes> */}
      </BrowserRouter>
    </div>
  );
}

const PrivateRoute = ({value}) => {
  console.log(value,'value')
  return (
    // value && <Navigate to={"/"} replace></Navigate>
    // <>
    <Routes>
      {/* value ? <Route path="/" element={ <Home />} /> : <Route path="/login" element={ <Login />} /> */}
      <Route path="/login" element={  !value ? <Login /> : <Navigate to={"/"} replace></Navigate>} />
      <Route path="/" element={  value ? <Home />  : <Navigate to={"/login"} replace></Navigate>} />
    </Routes>
    // </>

  )
}

export default App;
