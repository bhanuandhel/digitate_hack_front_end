import React, { useState, useEffect } from 'react'
import LoginView from './LoginView'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { loginUser, clearErrors } from "../../redux/action/authActions";

const init = {
    email:"",
    password:""
}

const LoginContainer = () => {
    let history = useHistory();
    const dispatch = useDispatch();
    const authStatus = useSelector((auth) => auth);
    const [user, setUser] = useState(init);

    useEffect(() => {
        dispatch(clearErrors())
    }, [])

    const handleChange = (e) =>{
            setUser({...user, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
          dispatch(loginUser(user, history));
        //   history.push("/");
    }

    return (
        <LoginView 
        {...user} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        {...authStatus}
        />
    )
}

export default LoginContainer
