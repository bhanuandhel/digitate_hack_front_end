import React, { useState } from 'react'
import LoginView from './LoginView'


const init = {
    email:"",
    password:""
}

const LoginContainer = () => {
    const [user, setUser] = useState(init);

    const handleChange = (e) =>{
            setUser({...user, [e.target.name]:e.target.value})
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(user)
    }

    return (
        <LoginView 
        {...user} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />
    )
}

export default LoginContainer
