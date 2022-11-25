import React, { useState, useEffect } from "react"
import { Input, DatePicker, Col, Row, Form, Button } from "antd"
import axios from "axios"
import jwt_decode from 'jwt-decode';
import Moment from 'react-moment';
const { TextArea } = Input;

const Education = (props) => {
    const [init, SetInit] = useState({});

    useEffect(() => {
        SetInit(props);
    }, [props]);

    const onFinish = (values) => {
        console.log('Success:', values);
        values.email = jwt_decode(localStorage.getItem('token')).email
        axios.post(`${process.env.REACT_APP_SERVER_URL}/become/education`, values)
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

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    return (
        <div className="container">
            <div className="bg-white p-10 w-4/5 mx-auto" >
                <div className="px-2 font-bold border-b-black-500 text-2xl mb-5"> Add Yuor Education </div>
                <Row>
                    <Col lg={12} className="preview">
                        <Form
                            name="basic"
                            layout="vertical"
                            initialValues={{ remember: true, }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="School"
                                className="px-2"
                            >
                                <div>{init.data && init.data.edschool ? init.data.edschool : ' '}</div>
                            </Form.Item>

                            <Form.Item
                                label="Degree"
                                className="px-2"
                            >
                                <div>{init.data && init.data.eddegree ? init.data.eddegree : ' '}</div>
                            </Form.Item>

                            <Form.Item
                                label="Field of Study"
                                className="px-2"
                            >
                                <div>{init.data && init.data.edfieldofstudy ? init.data.edfieldofstudy : ' '}</div>
                            </Form.Item>

                            <Row>
                                <Col className="px-2" lg={12} >
                                    <Form.Item
                                        label="Dates Attended"
                                    >

                                        <div>{init.data && init.data.edstartDate1 ? <Moment format="YYYY-MM-DD" date={init.data.edstartDate1} /> : ' '}</div>
                                    </Form.Item>
                                </Col>
                                <Col className="px-2" lg={12} >
                                    <Form.Item
                                        label="     "
                                    >
                                        <div>{init.data && init.data.edstartDate2 ? <Moment format="YYYY-MM-DD" date={init.data.edstartDate2} /> : ' '}</div>
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                label="Description"
                                className="px-2"
                            >
                                <div>{init.data && init.data.eddescription ? init.data.eddescription : ' '}</div>
                            </Form.Item>
                        </Form>
                    </Col>
                    <Col lg={12}>
                        <Form
                            name="basic"
                            layout="vertical"
                            initialValues={{ remember: true, }}
                            onFinish={onFinish}
                            onFinishFailed={onFinishFailed}
                            autoComplete="off"
                        >
                            <Form.Item
                                label="School"
                                name="edschool"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your School!',
                                    },
                                ]}
                            >
                                <Input size="large" className="mt-2" placeholder="Ex: Boston University" />
                            </Form.Item>

                            <Form.Item
                                label="Degree"
                                name="eddegree"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Degree!',
                                    },
                                ]}
                            >
                                <Input size="large" className="mt-2" placeholder="Ex: Bachelors" />
                            </Form.Item>

                            <Form.Item
                                label="Field of Study"
                                name="edfieldofstudy"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Field of Study!',
                                    },
                                ]}
                            >
                                <Input size="large" className="mt-2" placeholder="Ex: Business" />
                            </Form.Item>

                            <Row>
                                <Col className="px-2" lg={12} >
                                    <Form.Item
                                        label="Dates Attended"
                                        name="edstartDate1"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select Date!',
                                            },
                                        ]}
                                    >
                                        <DatePicker className="mt-2" size="large w-full" onChange={onChange} />
                                    </Form.Item>
                                </Col>
                                <Col className="px-2" lg={12} >
                                    <Form.Item
                                        label="     "
                                        name="edstartDate2"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please select Date!',
                                            },
                                        ]}
                                    >
                                        <DatePicker className="mt-2" size="large w-full" onChange={onChange} />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                label="Description"
                                name="eddescription"
                                className="px-2"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Please input current situation!',
                                    },
                                ]}
                            >
                                <TextArea placeholder="Describe your studies, awards, etc." className="mt-2" rows="5" />
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

export default Education;