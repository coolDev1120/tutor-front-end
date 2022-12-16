import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import { ChatList, MessageList } from 'react-chat-elements';
import { Input, message } from "antd"
import { useSelector } from "react-redux";
import "react-chat-elements/dist/main.css"
import axios from "axios"
import jwt_decode from 'jwt-decode';
import socketIOClient from "socket.io-client";
import $ from 'jquery';
import "./style.css"
const { TextArea } = Input;

const ENDPOINT = "http://localhost:3030";
const socket = socketIOClient(ENDPOINT);

const Test = () => {
    var show = useSelector((state) => state.auth);

    const [open, setOpen] = useState(false);
    const [showflag, setShowflag] = useState('chat')
    const [userlist, setUserlist] = useState({})
    const [chatlist, setChatlist] = useState([])
    const [unread, setUnread] = useState({})
    const [currentuser, setCurrentuser] = useState("");
    const [messages, setMessages] = useState('');
    const [rows, setRows] = useState(1);

    useEffect(() => {
        socket.on("brodcastMessage", data => {
            var user = localStorage.getItem('currentUser')
            console.log(data)
            console.log(user)
            console.log(jwt_decode(localStorage.getItem('token')).email)
            if (user === data.email && jwt_decode(localStorage.getItem('token')).email === data.emailTo) {
                console.log(213)
                chatlistRefresh(data.email, data.emailTo)
            }
            if (user === data.emailTo && jwt_decode(localStorage.getItem('token')).email === data.email) {
                console.log(2222)
                chatlistRefresh(data.emailTo, data.email)
            }
        });
    }, [])

    useEffect(() => {
        if (!localStorage.getItem('token') || !jwt_decode(localStorage.getItem('token')).role) {
			message.info("You have to login!")
			return
		}
        
        if (show.side_message_state) {
            setOpen(true);
        }
        if (!show.side_message_state) {
            setOpen(false);
        }
        if (localStorage.getItem('token') && jwt_decode(localStorage.getItem('token')).email) {
            axios.post(`${process.env.REACT_APP_SERVER_URL}/getmessage`, { email: jwt_decode(localStorage.getItem('token')).email })
                .then(res => {
                    setUserlist(res.data.data)
                    setUnread(res.data.unread)
                })
        }
        // if (show.showMessageByemail !== "") {
        //     handleChatClick(show.showMessageByemail)
        // }
    }, [show])


    // Show message list
    const handleChatClick = (email) => {
        console.log(email)
        // Email mean the other side.
        setCurrentuser(email)
        localStorage.setItem('currentUser', email)
        setShowflag('message')
        if (localStorage.getItem('token') && jwt_decode(localStorage.getItem('token')).email) {
            chatlistRefresh(email, jwt_decode(localStorage.getItem('token')).email)
            readAllmessages(email, jwt_decode(localStorage.getItem('token')).email)
        }
    }

    const chatlistRefresh = (email, me) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/getchatlist`, { email: email, me: me })
            .then(res => {
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
                scrollTobottom()
            })
    }

    // Read all messages that never read.
    const readAllmessages = (email, me) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/readallmessages`, { email: email, me: me })
    }

    const scrollTobottom = () => {
        var d = $('.ant-drawer-body');
        d.scrollTop(d.prop("scrollHeight"));
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

    const keydown = (e) => {
        if (e.key === "Enter") {
            if (messages === "") {
                message.info(`Type message`);
                return
            }
            if (e.key === 'Enter' && e.shiftKey) {
                const textRowCount = messages ? messages.split("\n").length : 0
                console.log(textRowCount)
                setRows(textRowCount + 1)
                return
            }
            var params = {
                email: jwt_decode(localStorage.getItem('token')).email,
                emailTo: currentuser,
                message: messages
            }
            setMessages("")
            setRows(1)
            axios.post(`${process.env.REACT_APP_SERVER_URL}/saveMessage`, params)
            socket.emit("sendMessage", { email: jwt_decode(localStorage.getItem('token')).email, emailTo: currentuser });
            console.log(messages)
        }
    }

    return (
        <div>
            <Drawer title="Chating Box" placement="right" onClose={onClose} open={open}>
                {chatbox()}
                <TextArea
                    rows={rows}
                    onKeyDown={keydown}
                    onChange={(e) => setMessages(e.target.value)}
                    disabled={showflag === 'message' ? false : true}
                    className='absolute bottom-0 left-0'
                    placeholder="Type here..."
                    multiline={true}
                    value={messages}
                />
            </Drawer>
        </div>
    )
}

export default Test

