import React from 'react'
import TextFieldInput from '../common/TextFieldinput'
import ChatList from './ChatList'
import IncomingMessage from './IncomingMessage'
import OutgoingMessage from './OutgoingMessage'

const ChatBoxView = (props) => {
    // console.log(props.auth)
    const team_user_list = props.users ? props.users.map((user, index) => {
        return <ChatList
            key={index}
            i={index}
            username={user.username}
            date={user.createdAt.split(';')[0]}
            description={props.description}
            onClick={props.handleUserClick}
        />
    }) : '';

    const get_messages = props.messages.map((item, index) => {
        if (item.from._id == props.auth.id) {
            return <OutgoingMessage
                username={item.from.username}
                message={item.message}
                time={item.createdAt.split(';')[1]}
                date={item.createdAt.split(';')[0]}
                key={index}
            />
        } else {
            return <IncomingMessage
                username={item.from.username}
                message={item.message}
                time={item.createdAt.split(';')[1]}
                date={item.createdAt.split(';')[0]}
                key={index}
            />
        }
    })
    return (
        <div className="container-fluid py-5">
            <div className="container">
                <h3 className=" text-center text-capitalize">{props.name}</h3>
                <p className=" text-center">{props.description}</p>
                <p className=" text-center">Team created by @{props.user.username}</p>
                <div className="messaging">
                    <div className="inbox_msg">
                        <div className="inbox_people">
                            <div className="headind_srch">
                                <div className="recent_heading">
                                    <h4>Recent</h4>
                                </div>
                                <div className="srch_bar">
                                    <div className="stylish-input-group">
                                        <input type="text" className="search-bar" placeholder="Search" />
                                        <span className="input-group-addon">
                                            <button type="button"> <i className="fa fa-search" aria-hidden="true"></i> </button>
                                        </span> </div>
                                </div>
                            </div>
                            <div className="inbox_chat">
                                {team_user_list}
                            </div>
                        </div>
                        <div className="mesgs">
                            <div className="msg_history">
                                {/* <IncomingMessage
                                    message="incoming which is a new approach to have all solutions"
                                    time="11:01 AM"
                                    date="June 9"
                                /> */}
                                {get_messages}
                                {/* <OutgoingMessage
                                    message="outgoing which is a new approach to have all solutions"
                                    time="11:01 AM"
                                    date="June 9"
                                /> */}
                            </div>
                            <div className="type_msg">
                                <div className="input_msg_write">
                                    <TextFieldInput
                                        type="text"
                                        className="write_msg"
                                        placeholder="Type a message"
                                        name="message"
                                        id="message"
                                        value={props.message}
                                        onChange={props.handleChange}
                                    />
                                    <button className="msg_send_btn" onClick={props.handleSubmit} type="button"><i className="far fa-comment-dots text-warning"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ChatBoxView
