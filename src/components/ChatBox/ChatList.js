import React from 'react'

const ChatList = (props) => {
    const { username, date, description, isActive } = props

    const activeClass = (isActive === true ? "active_chat" : "")

    return (
        <div className={`chat_list ${activeClass}`}>
            <div className="chat_people">
                <div className="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="avatar" /> </div>
                <div className="chat_ib">
                    <h5>{username} <span className="chat_date">{date}</span></h5>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default ChatList
