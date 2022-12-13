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
import { useSelector } from "react-redux";

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
    var current_page = useSelector((state) => state.auth.register_state);
    const [current, setCurrent] = useState(0);
    const [init, setInit] = useState({});
  
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));


    useEffect(() => {
        setCurrent(current_page)
    }, [current_page]);

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
                </div>
            </div>

        </>
    );
};
export default App;