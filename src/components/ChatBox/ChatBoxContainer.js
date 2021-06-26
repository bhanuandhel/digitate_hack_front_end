import React, { useState, useEffect } from 'react'
import ChatBoxView from './ChatBoxView'
import { useLocation } from "react-router-dom";
import axios from 'axios';
import { apiBaseURL } from '../../utils/constant'

const init = {
    _id: '',
    name: '',
    description: '',
    user: {
        _id: '',
        username: ''
    }
}

const ChatBoxContainer = () => {
    const [message, setMessage] = useState('');
    const [team, setTeam] = useState(init);
    const [users, setUsers] = useState([]);
    const [oldCLID, setoldCLID] = useState('');
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('tid');

    useEffect(async () => {
        await getChatBoxData(id);
        await getTeamUserName(id);
    }, [])

    // get team data

    const getChatBoxData = (tid) => {
        axios.post(
            `${apiBaseURL}/api/team/getTeam/${tid}`
        ).then(res => {
            setTeam(res.data.team)
        }).catch(err => {

        })
    }

    // get team user name

    const getTeamUserName = async (tid) => {
        axios.post(
            `${apiBaseURL}/api/chat/getTeamUser`,
            {
                team: tid
            }
        ).then(res => {
            const users = res.data.users;
            users.map((item, index)=>{
                getUserDetails(item)
            })
        }).catch(err => {

        })
    }

    const getUserDetails = (userId) =>{
        axios.get(
            `${apiBaseURL}/api/user/getUser/${userId}`,
        ).then(res => {
            let temp = users.length>0?users:[]
            temp.push(res.data.user)
            setUsers(temp)
        }).catch(err => {

        })
    }

    const handleChange = (e) => {
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(message)
    }

    const handleUserClick = (e, id) => {
        e.preventDefault()
        if(oldCLID==''){
            document.getElementById(id).classList.add("active_chat");
            setoldCLID(id)
        }else{
            document.getElementById(oldCLID).classList.remove("active_chat");
            setoldCLID(id)
            document.getElementById(id).classList.add("active_chat");
        }
    }
        // console.log(users)

    return (
        <ChatBoxView
            // {...users}
            {...message}
            {...team}
            users={users}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            handleUserClick={handleUserClick}
        />
    )
}

export default ChatBoxContainer
