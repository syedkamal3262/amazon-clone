import React,{useState} from 'react'
import './Login.css'
import {Link,useHistory} from 'react-router-dom'
import Logo from '../images/1000px-Amazon_logo.svg.png'
import {auth} from '../Firebase'
const Login = () => {
const history = useHistory();
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');

const login = (e) => {
    e.preventDefault();
    console.log(email,password)
    auth.signInWithEmailAndPassword(email,password)
    .then(() => 
    history.push('/')
    )
    .catch(e=>alert(e))
}   
const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then(() => 
    history.push('/')
    )
    .catch(e=>alert(e))
}

    return (
        <div className="login">
            <Link to ="/" className="login__link">
                <img
                className="login__logo"
                src={ Logo }
                alt="" 
                /> 
            </Link>
            <div className="login__container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email address </h5>
                    <input type="text" onChange={e=>setEmail(e.target.value)}/>
                    <h5>Password</h5>
                    <input type="password"  onChange={e=>setPassword(e.target.value)} />
                    <button 
                    type="submit"
                    onClick={login}
                    className="login__signInButton">Sign in</button>
                </form>
                <p>
                By continuing, you agree to Amazon's Terms of Use and Privacy Notice .
                </p>
                <button className="createAccountButton"
                onClick={register}
                >Create your Amazon account</button>
            </div>
        </div>
    )
}

export default Login
