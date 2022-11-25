import React, { useState, useEffect } from "react"
import { Select, Col, Row, Form, Button } from "antd"
import axios from "axios"
import jwt_decode from 'jwt-decode';

const About = (props) => {
    const [init, SetInit] = useState({});

    useEffect(() => {
        SetInit(props);
    }, [props]);

    const onFinish = (values) => {
        values.email = jwt_decode(localStorage.getItem('token')).email
        axios.post(`${process.env.REACT_APP_SERVER_URL}/become/about`, values)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="container">
            <div className="bg-white p-10 w-4/5 mx-auto" >
                <div className="font-bold border-b-black-500 text-2xl mb-5"> About </div>
                <Row>
                    <Col lg={12} className="preview">
                        <Form
                            name="basic"
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"

                        >
                            <Form.Item
                                label="Subject taught"
                                className="px-2"
                            >
                                <div className="iuput_h">{init.data && init.data.subjecttaught ? init.data.subjecttaught : ' '}</div>
                            </Form.Item>

                            <Form.Item
                                label="Choose your language level"
                                className="px-2"
                            >
                                <div className="iuput_h">{init.data && init.data.enlevel ? init.data.enlevel : ' '}</div>
                            </Form.Item>

                            <Form.Item
                                label="Describe your teaching experience"
                                className="px-2"
                            >
                                <div className="iuput_h">{init.data && init.data.teachingexperience ? init.data.teachingexperience : ' '}</div>
                            </Form.Item>

                            <Form.Item
                                label="Describe your current situation"
                                className="px-2"
                            >
                               <div className="iuput_h">{init.data && init.data.currentsituation ? init.data.currentsituation : ' '}</div>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col lg={12}>
                        <Form
                            name="basic"
                            initialValues={{ remember: true, }}
                            layout="vertical"
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"

                        >

                            <Form.Item
                                label="Subject taught"
                                name="subjecttaught"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Phone number!',
                                    },
                                ]}
                            >
                                <Select
                                    size="large"
                                    defaultValue="Choose subject"
                                    options={[
                                        {
                                            value: 'English',
                                            label: 'English',
                                        },
                                        {
                                            value: 'Japanese',
                                            label: 'Japanese',
                                        },
                                        {
                                            value: 'France',
                                            label: 'France',
                                        },
                                    ]}
                                />
                            </Form.Item>

                            <div className="px-2 mb-3">Choose your language level</div>
                            <Row>
                                <Col lg={12} >
                                    <Form.Item
                                        label=""
                                        name=""
                                        className="px-2"
                                        rules={[
                                            {
                                                required: false,
                                                message: 'Please input your Phone number!',
                                            },
                                        ]}
                                    >
                                        <Select
                                            size="large"
                                            disabled
                                            defaultValue="English"
                                        />
                                    </Form.Item>
                                </Col>

                                <Col lg={12} className="pl-3">
                                    <Form.Item
                                        label=""
                                        name="enlevel"
                                        className="px-2"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your level!',
                                            },
                                        ]}
                                    >
                                        <Select
                                            size="large"
                                            defaultValue="Choose Level"
                                            options={[
                                                {
                                                    value: 'A1',
                                                    label: 'A1',
                                                },
                                                {
                                                    value: 'A2',
                                                    label: 'A2',
                                                },
                                                {
                                                    value: 'B1',
                                                    label: 'B2',
                                                },
                                                {
                                                    value: 'C1',
                                                    label: 'C2',
                                                },
                                                {
                                                    value: 'Native',
                                                    label: 'Native',
                                                }
                                            ]}
                                        />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                label="Describe your teaching experience"
                                name="teachingexperience"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your teaching experience!',
                                    },
                                ]}
                            >
                                <Select
                                    size="large"
                                    defaultValue="Choose your teaching experience"
                                    className="mt-2 w-full"
                                    options={[
                                        {
                                            value: 'I have formal teaching experience',
                                            label: 'I have formal teaching experience',
                                        },
                                        {
                                            value: 'I have taught in an informal setting',
                                            label: 'I have taught in an informal setting',
                                        },
                                        {
                                            value: 'None of the above',
                                            label: 'None of the above',
                                        },
                                    ]}
                                />
                            </Form.Item>

                            <Form.Item
                                label="Describe your current situation"
                                name="currentsituation"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your current situation!',
                                    },
                                ]}
                            >
                                <Select
                                    size="large"
                                    defaultValue="Choose your current situation"
                                    className="mt-2 w-full"
                                    options={[
                                        {
                                            value: 'I have another teaching job',
                                            label: 'I have another teaching job',
                                        },
                                        {
                                            value: 'I have another non-teaching job',
                                            label: 'I have another non-teaching job',
                                        },
                                        {
                                            value: 'I am a student',
                                            label: 'I am a student',
                                        },
                                        {
                                            value: 'I have other commitments',
                                            label: 'I have other commitments',
                                        },
                                        {
                                            value: 'I have no other commitments',
                                            label: 'I have no other commitments',
                                        },
                                    ]}
                                />
                            </Form.Item>

                            <Button className="mx-2" type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default About