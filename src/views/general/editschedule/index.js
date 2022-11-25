import React, { useState, useEffect } from 'react';
import ScheduleSelector from 'react-schedule-selector'
import { Button, message, Steps, DatePicker, Space } from 'antd';
import axios from "axios"
import jwt_decode from 'jwt-decode';

const App = () => {
    const [schedule, setSchedule] = useState("")
    const [start, Setstart] = useState(new Date)

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/setting/getSchedule`, { email: jwt_decode(localStorage.getItem('token')).email })
            .then(res => {
                setSchedule(JSON.parse(res.data.data.schedule))
            })
    }, [])

    const handleSchedule = (e) => {
        setSchedule(e)

        var sendData = {
            email: jwt_decode(localStorage.getItem('token')).email,
            schedule: JSON.stringify(e)
        }
        console.log(sendData)

        axios.post(`${process.env.REACT_APP_SERVER_URL}/setting/saveSchedule`, sendData)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }
    return (
        <>
            <div className="container mx-auto">
                <div style={{ margin: "100px 0px 100px 0px" }}>
                    <div className='bg-white p-10' >
                        <div className='w-4/5 mx-auto'>
                            <Space className='w-full text-center'>
                                <DatePicker className='mb-3' onChange={e => Setstart(e)} />
                                <Button type='primary mb-3'>Save</Button>
                            </Space>
                            <ScheduleSelector
                                startDate={start}
                                selection={schedule}
                                numDays={7}
                                minTime={0}
                                maxTime={24}
                                hourlyChunks={1}
                                onChange={handleSchedule}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default App;