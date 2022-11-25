import React, { useState, useEffect } from 'react';
import { Space, Table, Tag, Button, Popconfirm, message } from 'antd';
import { Link } from "react-router-dom";
import Moment from 'react-moment';
import axios from "axios"
import jwt_decode from 'jwt-decode';


const App = () => {
    const [flag, setFlag] = useState(false)
    const [contacts, setContacts] = useState([]);
    const columns = [
        {
            title: 'Tutor Name',
            dataIndex: 'username',
            key: 'username',
            render: (text) => <Link to="general/tutor">{text}</Link>,
        },
        {
            title: 'Schedule',
            key: 'schedule',
            dataIndex: 'schedule',
            render: (tags) => (
                <>
                    <Tag color='green' ><Moment format="YYYY-MM-DD" date={JSON.parse(tags)} /></Tag>
                </>
            ),
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, username) => (
                <Space size="middle">
                    <Button type="primary">Edit</Button>
                    <Popconfirm
                        title="Are you sure to delete this task?"
                        onConfirm={() => confirm(username)}
                        okText="Yes"
                        cancelText="No"
                    >
                        <Button>Delete</Button>
                    </Popconfirm>
                </Space>
            ),
        },
    ];

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/setting/getMySchedule`, { email: jwt_decode(localStorage.getItem('token')).email })
            .then(res => {
                setContacts(res.data.data)
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }, [flag])

    const confirm = (e) => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/setting/deleteMySchedule`, { id: e.tutor_contact_id })
            .then(res => {
                setFlag(!flag)
                console.log(flag)
                message.info('Successfully delected');
            })
    };

    return (
        <div style={{ margin: "200px 0px 200px 0px" }}>
            <div className="container mx-auto" >
                <Table columns={columns} dataSource={contacts} />
            </div>
        </div>
    )
}
export default App;