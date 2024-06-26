import "../styles/NavigationBar.css"
import { useNavigate } from 'react-router-dom';    

const NavBar = () => {
    const navigate = useNavigate()

    const handleLogout = () => {
        const promiseSession = Promise.resolve(sessionStorage.removeItem('user'))
        promiseSession.then(()=> {
            navigate('/login')
            window.location.reload()
        })
    }

    return (
        <div className="navbar">
            <span>DENTAL CLINIC</span>
            <button onClick={() =>  handleLogout()}>LOGOUT</button>
        </div>
    )
}
export default NavBar