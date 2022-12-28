import React, { useState, useEffect } from 'react';
import axios from "axios"
import jwt_decode from 'jwt-decode';
import Preview from "./preview"
import { useHistory } from 'react-router-dom';


const App = () => {
    const history = useHistory();
    const [init, setInit] = useState({});

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/become/getdata`, { email: jwt_decode(localStorage.getItem('token')).email })
            .then(res => {
                setInit(res.data.data)
                if (res.data.data == null || res.data.data.done !== "done") {
                    // window.location = "/general/become/register"
                    history.push('/general/become/register')
                }
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }, []);

    return (
        <>
            <div className="container mx-auto">
                <Preview data={init} />
            </div>

        </>
    );
};
export default App;