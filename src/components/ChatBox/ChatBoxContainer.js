import React, { useState, useEffect } from 'react'
import ChatBoxView from './ChatBoxView'
import { useLocation } from "react-router-dom";

const ChatBoxContainer = () => {
    const [message, setMessage] = useState('');
    const {search} = useLocation();
    const id = new URLSearchParams(search).get('tid');

    useEffect(() => {
           console.log(id)
    }, [])


    const handleChange = (e) =>{
        setMessage(e.target.value)
        }

    const handleSubmit = (e) =>{
            e.preventDefault()
            console.log(message)
        }
    return (
        <ChatBoxView
        {...message} 
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        />
    )
}

export default ChatBoxContainer
