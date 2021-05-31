import React, { useState } from 'react'
import NewTeamView from './NewTeamView'


const init = {
    name:"",
    desc:""
}

const NewTeamContainer = () => {

    const [user, setUser] = useState(init);

    const handleChange = (e) =>{
            setUser({...user, [e.target.name]:e.target.value})
    }
        
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(user)
    }
    
    return (
        <NewTeamView 
        {...user} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />
    )
}

export default NewTeamContainer
