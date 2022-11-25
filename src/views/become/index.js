import React, { useState, useEffect } from 'react';
import { Button, message, Steps } from 'antd';
import About from "./about"
import Photo from "./experience"
import Education from "./education"
import Description from "./description"
import Price from "./price"
import Availability from "./availability"
import Certification from "./certification"
import axios from "axios"
import jwt_decode from 'jwt-decode';

const steps = [
    {
        title: 'About',
        content: 'About',
    },
    {
        title: 'Experience',
        content: 'Experience',
    },
    {
        title: 'Education',
        content: 'Education',
    },
    {
        title: 'Description',
        content: 'Description',
    },
    {
        title: 'Price',
        content: 'Price',
    },
    {
        title: 'Availability',
        content: 'Availability',
    },
    {
        title: 'Certification',
        content: 'Certification',
    },
];
const App = () => {
    const [current, setCurrent] = useState(0);
    const [init, setInit] = useState({});
    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const done = () => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/become/done`, { email: jwt_decode(localStorage.getItem('token')).email })
            .then(res => {
                setInit(res.data.data)
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
        message.success('Processing complete!')
    }
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/become/getdata`, { email: jwt_decode(localStorage.getItem('token')).email })
            .then(res => {
                setInit(res.data.data)
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <div style={{ margin: "100px 0px 100px 0px" }}>
                    <Steps className='mb-10 mx-auto px-5' current={current} items={items} />
                    {current === 0 && <About data={init} />}
                    {current === 1 && <Photo data={init} />}
                    {current === 2 && <Education data={init} />}
                    {current === 3 && <Description data={init} />}
                    {current === 4 && <Price data={init} />}
                    {current === 5 && <Availability data={init} />}
                    {current === 6 && <Certification data={init} />}

                    <div className="steps-action mt-5 w-4/5 mx-auto">
                        {current < steps.length - 1 && (
                            <Button size="large" type="primary" onClick={() => next()}>
                                Next
                            </Button>
                        )}
                        {current === steps.length - 1 && (
                            <Button size="large" type="primary" onClick={() => done()}> Done </Button>
                        )}
                        {current > 0 && (
                            <Button size="large" className='ml-3' onClick={() => prev()} > Previous </Button>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};
export default App;