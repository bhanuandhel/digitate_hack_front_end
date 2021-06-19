import React, { useState, useEffect } from 'react'
import ChatBoxView from './ChatBoxView'
const ChatBoxContainer = () => {
    const [message, setMessage] = useState('');

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
