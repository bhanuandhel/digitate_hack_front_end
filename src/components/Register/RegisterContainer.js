import React, { useState } from 'react'
import RegisterView from './RegisterView'

const init = {
    username:"",
    email:"",
    password:"",
    password1:""
}

const RegisterContainer = () => {
    const [user, setUser] = useState(init)
    return (
        <RegisterView />
    )
}

export default RegisterContainer
