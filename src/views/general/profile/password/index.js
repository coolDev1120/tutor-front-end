import React, { useState } from 'react'
import { Input, Button, message } from 'antd'
import axios from "axios"
import jwt_decode from 'jwt-decode';

const Account = () => {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    const handleSubmit = () => {
        if (!password || !password2) {
            message.error(`You must type all items.`);
            return
        }

        if (password !== password2) {
            message.error(`Password doesn't not match.`);
            return
        }

        var sendData = {
            email: jwt_decode(localStorage.getItem('token')).email,
            password: password

        }
        axios.post(`${process.env.REACT_APP_SERVER_URL}/setting/changePassword`, sendData)
            .then(res => {
                message.success(`Your password successfully updated.`);
            })
    }

    return (
        <div className="container">
            <div className="bg-white p-10" >
                <div className="font-bold border-b-black-500 text-2xl mb-5"> Change Password </div>

                <div className="form-group pb-5">
                    <label>Password</label>
                    <Input.Password value={password} size='large' name='username' onChange={e => setPassword(e.target.value)} className="mt-2" placeholder="Password" />
                </div>

                <div className="form-group pb-5">
                    <label>Password Check</label>
                    <Input.Password value={password2} size='large' name='username' onChange={e => setPassword2(e.target.value)} className="mt-2" placeholder="Password Check" />
                </div>
                <Button onClick={handleSubmit} type="primary">Save</Button>
            </div>
        </div>

    )
}

export default Account;