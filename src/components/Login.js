import React from 'react'
import Nav from '../routes/Nav'
import "../components/Login.css"
import { Link } from 'react-router-dom'
function Login() {
    const afterlogin = () => {
        localStorage.setItem("login", "loggedin"); 
    }
    
    return (
        <div>
            <Nav></Nav>
            <div className='bodyu'>
                <h1 className='fon'>Login</h1>
                <form >
                    <div class="row">
                        <label for="email">Email</label>
                        <input type="email" name="email" autocomplete="off" placeholder="email@example.com" />
                    </div>
                    <div class="row">
                        <label for="password">Password</label>
                        <input type="password" name="password" />
                    </div>
                  <Link to={"/buslist"}>  <button type="submit" className='buttonn' onClick={afterlogin}>Login</button></Link>
                </form>
            </div>
        </div>
    )
}

export default Login