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
    const { search } = useLocation();
    const id = new URLSearchParams(search).get('tid');

    useEffect(async () => {
        await getChatBoxData(id);
    }, [])

    const getChatBoxData = (tid) => {
        axios.post(
            `${apiBaseURL}/api/team/getTeam/${tid}`
        ).then(res => {
            setTeam(res.data.team)
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
    return (
        <ChatBoxView
            {...message}
            {...team}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default ChatBoxContainer
