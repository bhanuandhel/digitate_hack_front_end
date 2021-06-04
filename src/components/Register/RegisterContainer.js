import React, { useState, useEffect } from 'react'
import RegisterView from './RegisterView'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { registeUser, clearErrors } from '../../redux/action/authActions';

const init = {
    username:"",
    email:"",
    password:"",
    password1:""
}

const RegisterContainer = () => {
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
        dispatch(registeUser(user, history));
    }

    return (
        <RegisterView 
        {...user} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        {...authStatus}
        />
    )
}

export default RegisterContainer
