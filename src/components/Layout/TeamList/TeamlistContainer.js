import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { apiBaseURL } from '../../../utils/constant';   

import TeamlistView from './TeamlistView'

const TeamlistContainer = () =>{
    const [teams, setTeams] =useState([]);

    useEffect(() => {
        getTeamApi();  
    }, [])


    const  getTeamApi = () =>{
        axios.get(
            `${apiBaseURL}/api/team/all`
        ).then(res =>{
              setTeams(res.data.team)
        }).catch(err => console.log(err))
    } 

    return (
        <TeamlistView
         teamList={teams}
        />
    )
}

export default TeamlistContainer
