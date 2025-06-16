import React , {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

// This is a simple Login component that uses the UserContext to display the login status
function Login() {

    const [ userName, setUserName ] = useState('');
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext);

    // This function will be called when the user submits the login form
    const handleSubmit = (e) => {
        // Here you would typically handle the login logic, such as calling an API
        // and updating the user context with the logged-in user's information.
        // For this example, we'll just log a message to the console.
        e.preventDefault();
        setUser({ userName, password });
        console.log("Login submitted");
    }

  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username'  value={userName} onChange={(e) => setUserName(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login