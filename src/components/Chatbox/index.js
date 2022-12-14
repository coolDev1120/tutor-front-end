import React, { useState, useEffect } from 'react';
import { Drawer } from 'antd';
import { ChatList, MessageList } from 'react-chat-elements';
import { Input } from "antd"
import { useSelector, useDispatch } from "react-redux";
import "react-chat-elements/dist/main.css"
import {
    toggle_side_message_box
} from "redux/actions";
import axios from "axios"
import jwt_decode from 'jwt-decode';

const Test = () => {
    const dispatch = useDispatch();
    var show = useSelector((state) => state.auth);

    const [open, setOpen] = useState(false);
    const [showflag, setShowflag] = useState('chat')

    useEffect(() => {
        if (show.side_message_state) {
            setOpen(true);
        }
        if (!show.side_message_state) {
            setOpen(false);
        }
        axios.post(`${process.env.REACT_APP_SERVER_URL}/saveMessage`, {email:  jwt_decode(localStorage.getItem('token')).email})
            .then(res => {
                console.log(res.data)
            })
    }, [show])

    const handleChatClick = () => {
        setShowflag('message')
    }

    const showDrawer = () => {
        dispatch(
            toggle_side_message_box()
        );
    };

    const onClose = () => {
        setShowflag('chat')
        setOpen(false);
    };

    const chatbox = () => {
        if (showflag === 'chat') {
            return (
                <div>
                    <ChatList
                        className='chat-list'
                        onClick={handleChatClick}
                        dataSource={[
                            {
                                avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                                alt: 'kursat_avatar',
                                title: 'Kursat',
                                subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                                date: new Date(),
                                unread: 3,
                            }
                        ]} />
                    <ChatList
                        className='chat-list'
                        dataSource={[
                            {
                                avatar: 'https://avatars.githubusercontent.com/u/80540635?v=4',
                                alt: 'kursat_avatar',
                                title: 'Kursat',
                                subtitle: "Why don't we go to the No Way Home movie this weekend ?",
                                date: new Date(),
                                unread: 3,
                            }
                        ]} />
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
                        dataSource={[
                            {
                                position: "left",
                                type: "text",
                                title: "Kursat",
                                text: "Give me a message list example !",
                            },
                            {
                                position: "right",
                                type: "text",
                                title: "Emre",
                                text: "That's all.",
                            },
                        ]}
                    />
                </div>
            )
        }

    }
    return (
        <Drawer title="Basic Drawer" placement="right" onClose={onClose} open={open}>
            {chatbox()}
            <Input className='absolute bottom-0' placeholder="Type here..." multiline={true} />
        </Drawer>
    )
}

export default Test

