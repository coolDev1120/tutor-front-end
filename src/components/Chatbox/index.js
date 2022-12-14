import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import { ChatList, MessageList } from 'react-chat-elements';
import { Input } from "antd"
import { useSelector } from "react-redux";
import "react-chat-elements/dist/main.css"
import axios from "axios"
import jwt_decode from 'jwt-decode';
const Test = () => {
    var show = useSelector((state) => state.auth);

    const [open, setOpen] = useState(false);
    const [showflag, setShowflag] = useState('chat')
    const [userlist, setUserlist] = useState({})
    const [chatlist, setChatlist] = useState([])
    const [unread, setUnread] = useState({})

    useEffect(() => {
        if (show.side_message_state) {
            setOpen(true);
        }
        if (!show.side_message_state) {
            setOpen(false);
        }
        if (localStorage.getItem('token') && jwt_decode(localStorage.getItem('token')).email) {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/getmessage`, { email: jwt_decode(localStorage.getItem('token')).email })
                .then(res => {
                    console.log(res.data.data)
                    setUserlist(res.data.data)
                    setUnread(res.data.unread)
                })
        }
        // if (show.showMessageByemail !== "") {
        //     handleChatClick(show.showMessageByemail)
        // }
    }, [show])


    // show message list
    const handleChatClick = (email) => {
        setShowflag('message')
        if (localStorage.getItem('token') && jwt_decode(localStorage.getItem('token')).email) {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/getchatlist`, { email: email, me: jwt_decode(localStorage.getItem('token')).email })
                .then(res => {
                    console.log(res.data.data)
                    var temp = [];
                    for (let i = 0; i < res.data.data.length; i++) {
                        temp.push({
                            position: res.data.data[i].email === jwt_decode(localStorage.getItem('token')).email ? "right" : "left",
                            type: "text",
                            title: res.data.data[i].user,
                            text: res.data.data[i].message,
                        })
                    }
                    setChatlist(temp)
                })
        }
    }

    const onClose = () => {
        setShowflag('chat')
        setOpen(false);
    };

    const chatbox = () => {
        if (showflag === 'chat') {
            return (
                <div>
                    {userlist.length > 0 && userlist.map((value, key) => (
                        <ChatList
                            key={key}
                            className='chat-list'
                            onClick={() => handleChatClick(value.email)}
                            dataSource={[
                                {
                                    avatar: `${process.env.REACT_APP_SERVER_URL}/` + value.image,
                                    alt: 'kursat_avatar',
                                    title: value.username,
                                    subtitle: value.message,
                                    date: value.createdAt,
                                    unread: unread[value.email] ? unread[value.email] : 0,
                                }
                            ]} />
                    ))}
                </div>
            )
        }
        if (showflag === 'message') {
            return (
                <div>
                    <MessageList
                        className='message-list'
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={chatlist}
                    />
                </div>
            )
        }

    }
    return (
        <div>
            <Drawer title="Chating Box" placement="right" onClose={onClose} open={open}>
                {chatbox()}
                <Input disabled={showflag === 'message' ? false : true} className='absolute bottom-0 left-0' placeholder="Type here..." multiline={true} />
            </Drawer>
        </div>

    )
}

export default Test

