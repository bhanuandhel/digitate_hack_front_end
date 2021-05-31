import React, { useState } from 'react'
import RegisterView from './RegisterView'

const init = {
    username:"",
    email:"",
    password:"",
    password1:""
}

const RegisterContainer = () => {
    const [user, setUser] = useState(init);

    const handleChange = (e) =>{

    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(user)
    }

    return (
        <RegisterView 
        {...user} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />
    )
}

export default RegisterContainer
