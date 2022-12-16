/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import { Input, Button, Upload, message, Select } from 'antd'
import ImgCrop from 'antd-img-crop';
import PhoneInput from 'react-phone-number-input'
import axios from "axios"
import jwt_decode from 'jwt-decode';

const { Dragger } = Upload;

const Account = () => {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");
    const [image, setImage] = useState("");

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/setting/getAccount`, { email: jwt_decode(localStorage.getItem('token')).email })
            .then(res => {
                setUsername(res.data.data.username)
                setPhone(res.data.data.phone)
                setGender(res.data.data.gender)
                setImage(res.data.data.image)
            })
    }, []);

    const props = {
        name: 'photo',
        multiple: false,
        action: `${process.env.REACT_APP_SERVER_URL}/uploadimage`,
        onChange(info) {
            const { status } = info.file;
            if (status !== 'uploading') {
            }
            if (status === 'done') {
                setImage(info.file.response.success)
                console.log(info.file.response.success)
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    };


    const handleSubmit = () => {
        if (!username || !phone || !gender || !image) {
            message.error(`You must type all items.`);
            return
        }

        var sendData = {
            email: jwt_decode(localStorage.getItem('token')).email,
            username: username,
            phone: phone,
            gender: gender,
            image: image
        }
        console.log(username, phone, gender, image)
        axios.post(`${process.env.REACT_APP_SERVER_URL}/setting/saveAccount`, sendData)
            .then(res => {
                console.log(res)
                message.success(`Your account successfully updated.`);
            })

    }

    return (
        <div className="container">
            <div className="bg-white p-10" >
                <div className="font-bold border-b-black-500 text-2xl mb-5"> Account Settings </div>
                <div className="form-group pb-5">
                    <label>Profile image</label>
                    <div className='flex  mt-2' >
                        <img className='mr-3 rounded-lg' style={{ width: "100px", height: "100px" }} src={`${process.env.REACT_APP_SERVER_URL}/` + image} />
                        <ImgCrop rotate>
                            <Dragger  {...props}>
                                <div>
                                    <p className="ant-upload-text p-3">Click or drag file to this area to upload</p>
                                </div>
                            </Dragger>
                        </ImgCrop>
                    </div>

                </div>
                <div className="form-group pb-5">
                    <label>Name</label>
                    <Input value={username} size='large' name='username' onChange={e => setUsername(e.target.value)} className="mt-2" placeholder="First name" />
                </div>
                <div className="form-group pb-5">
                    <label>Gender</label>
                    <Select
                        name="gender"
                        size="large"
                        onChange={e => setGender(e)}
                        className='w-full mt-2'
                        defaultValue="Choose gender"
                        value={gender}
                        options={[
                            {
                                value: 'Male',
                                label: 'Male',
                            },
                            {
                                value: 'Female',
                                label: 'Female',
                            },
                        ]}
                    />
                </div>
                <div className="form-group pb-5">
                    <label >Phone number</label>
                    <PhoneInput
                        placeholder="Enter phone number"
                        className="mt-2 border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow"
                        value={phone}
                        onChange={e => setPhone(e)} />
                </div>
                <Button onClick={handleSubmit} type="primary">Save</Button>
            </div>
        </div>

    )
}

export default Account;