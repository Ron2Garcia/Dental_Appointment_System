import { useState } from "react"
import axios from 'axios'
import "../styles/Register.css"
const Register = ({onClickRegister}) => {
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [birthdate, setBirtdate] = useState('')
    const [gender, setGender] = useState('')
    const [address, setAddress] = useState('')

    const handleSubmit = async (e) => {
      e.preventDefault();
      const userDetail = {
            'firstname': firstname,
            'lastname': lastname,
            'email': email,
            'password': password,
            'birthdate': birthdate,
            'gender': gender,
            'address': address
        }
        const url = `http://localhost:3050/api/users/`
        await axios.post(url,userDetail).then(()=>{
            console.log('saved')
            alert('Saved')
            onClickRegister()
        })

    }
    return (
        <div className="registerContainer">
            <div >
                <form onSubmit={handleSubmit}>
                    <input
                    type="text"
                    placeholder="First Name"
                    value={firstname}
                    required
                    onChange={(e) => setFirstname(e.target.value)}
                    />
                    <input
                    type="text"
                    placeholder="Last name"
                    value={lastname}
                    required
                    onChange={(e) => setLastname(e.target.value)}
                    />
                    <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                    type="date"
                    placeholder="Date of birth"
                    required
                    value={birthdate}
                    onChange={(e) => setBirtdate(e.target.value)}
                    />
                    <input
                    type="text"
                    placeholder="Gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    />
                    <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    )
}

export default Register