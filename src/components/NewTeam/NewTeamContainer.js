import React, { useState,useEffect } from 'react'
import NewTeamView from './NewTeamView'
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { createNewTeam, clearErrors } from '../../redux/action/teamAction';
// import { loginUser, clearErrors } from "../../redux/action/authActions";


const init = {
    name:"",
    description:""
}

const NewTeamContainer = () => {

    const [team, setTeam] = useState(init);
    let history = useHistory();
    const dispatch = useDispatch();
    const teamStatus = useSelector((teams) => teams);
    const authStatus = useSelector((auth) => auth);

    useEffect(() => {
        dispatch(clearErrors())
    }, [])

    const handleChange = (e) =>{
            setTeam({...team, [e.target.name]:e.target.value})
    }
        
    const handleSubmit = (e) =>{
        e.preventDefault()
    //    console.log(authStatus.auth.user.id)

    //    let chatMessage = {
    //        message : "Send any message to joing this group"
    //    }

        // dispatch create new team action
        dispatch(createNewTeam(team, history));
    }
    
    return (
        <NewTeamView 
        {...team} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        {...teamStatus}
        />
    )
}

export default NewTeamContainer
