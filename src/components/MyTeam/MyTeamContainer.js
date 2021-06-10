import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { apiBaseURL } from '../../utils/constant';

import MyTeamView from './MyTeamView'

const MyTeamContainer = () => {

    const [teams, setTeams] =useState([]);

    useEffect(() => {
        getTeamApi();  
    }, [])

  const  getTeamApi = () =>{
      axios.get(
          `${apiBaseURL}/api/team/my`
      ).then(res =>{
            setTeams(res.data.team)
      }).catch(err => console.log(err))
  } 

    return (
        <MyTeamView 
            teamList={teams}
        />
    )
}

export default MyTeamContainer
