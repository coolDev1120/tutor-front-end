import React, { useState, useMemo, useEffect } from "react"
import { Input, DatePicker, Col, Row, Checkbox, Form, Button, Select } from "antd"
import countryList from 'react-select-country-list'
import axios from "axios"
import jwt_decode from 'jwt-decode';
import Moment from 'react-moment';
const { TextArea } = Input;

const Experience = (props) => {
    const [init, SetInit] = useState({});
    useEffect(() => {
        SetInit(props);
    }, [props]);

    const [currentWorkCheck, setCurrentWorkCheck] = useState(false);
    const [country, setCountry] = useState('')

    const [exstartDate1, setExstartDate1] = useState('')
    const [exstartDate2, setExstartDate2] = useState('')
    const [exendDate1, setExendDate1] = useState('')
    const [exendDate2, setExendDate2] = useState('')

    const options = useMemo(() => countryList().getData(), [])

    const handleCountry = value => {
        setCountry(country)
    }
    const onFinish = (values) => {
        console.log('Success:', values);
        values.email = jwt_decode(localStorage.getItem('token')).email
        values.exendDate1 = exendDate1;
        values.exendDate2 = exendDate2;
        values.exstartDate1 = exstartDate1;
        values.exstartDate2 = exstartDate2;

        axios.post(`${process.env.REACT_APP_SERVER_URL}/become/experience`, values)
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
        console.log(dateString);
    };

    const onCurrentWorkChange = (e) => {
        setCurrentWorkCheck(!currentWorkCheck);
        console.log(`checked = ${e.target.checked}`);
    };

    return (
        <div className="container">
            <div className="bg-white p-10 w-4/5 mx-auto" >
                <div className="px-2 font-bold border-b-black-500 text-2xl mb-5"> Add Work Experience </div>
                <Row >
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
                                label="Title"
                                className="px-2"
                            >
                                <div className="iuput_h">{init.data && init.data.extitle ? init.data.extitle : ' '}</div>
                            </Form.Item>

                            <Form.Item
                                label="Company"
                                className="px-2"
                            >
                                <div className="iuput_h">{init.data && init.data.excompany ? init.data.excompany : ' '}</div>
                            </Form.Item>

                            <Form.Item
                                label="Location"
                                className="px-2"
                            >
                                <div className="iuput_h">{init.data && init.data.exlocation ? init.data.exlocation : ' '}</div>
                            </Form.Item>

                            <Row>
                                <Col lg={12} >
                                    <Row>
                                        <Col className="px-2" lg={24} >
                                            <Form.Item
                                                label="Start Date"
                                                className="flex"
                                            >
                                                <div className="iuput_h">{init.data && init.data.exstartDate1 ? <Moment format="YYYY-MM-DD" date={init.data.exstartDate1} /> : ' '}</div>
                                                <div className="iuput_h">{init.data && init.data.exstartDate2 ? <Moment format="YYYY-MM-DD" date={init.data.exstartDate2} /> : ' '}</div>
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={12} >
                                    {!currentWorkCheck &&
                                        <Row>
                                            <Col className="px-2" lg={24} >
                                                <Form.Item
                                                    label="End Date"
                                                >
                                                    <div className="iuput_h">{init.data && init.data.exendDate1 ? <Moment format="YYYY-MM-DD" date={init.data.exendDate1} />: ' '}</div>
                                                    <div className="iuput_h">{init.data && init.data.exendDate2 ? <Moment format="YYYY-MM-DD" date={init.data.exendDate2} /> : ' '}</div>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    }
                                </Col>
                            </Row>

                            <Form.Item
                                label="Describe your current situation"
                                className="px-2"
                            >
                                <div className="iuput_h">{init.data && init.data.exsituation ? init.data.exsituation : ' '}</div>
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
                                label="Title"
                                name="extitle"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Title!',
                                    },
                                ]}
                            >
                                <Input size="large" className="mt-2" placeholder="Ex: Lanaguage Professor" />
                            </Form.Item>

                            <Form.Item
                                label="Company"
                                name="excompany"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Company!',
                                    },
                                ]}
                            >
                                <Input size="large" className="mt-2" placeholder="Ex: Cambridge University" />
                            </Form.Item>

                            <Form.Item
                                label="Location"
                                name="exlocation"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Location!',
                                    },
                                ]}
                            >
                                <Select size="large" options={options} value={country} onChange={handleCountry} />
                            </Form.Item>

                            <Row>
                                <Col lg={12} >
                                    <Row>
                                        <Col className="px-2" lg={12} >
                                            <Form.Item
                                                label="Start Date"
                                                name="exstartDate1"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please select Date!',
                                                    },
                                                ]}
                                            >
                                                <DatePicker className="mt-2" size="large w-full" onChange={(date, dateString) => setExstartDate1(dateString)} />
                                            </Form.Item>
                                        </Col>
                                        <Col className="px-2" lg={12} >
                                            <Form.Item
                                                label="     "
                                                name="exstartDate2"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: 'Please select Date!',
                                                    },
                                                ]}
                                            >
                                                <DatePicker className="mt-2" size="large w-full" onChange={(date, dateString) => setExstartDate2(dateString)} />
                                            </Form.Item>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={12} >
                                    {!currentWorkCheck &&
                                        <Row>
                                            <Col className="px-2" lg={12} >
                                                <Form.Item
                                                    label="End Date"
                                                    name="exendDate1"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please select Date!',
                                                        },
                                                    ]}
                                                >
                                                    <DatePicker className="mt-2" size="large w-full" onChange={(date, dateString) => setExendDate1(dateString)} />
                                                </Form.Item>
                                            </Col>
                                            <Col className="px-2" lg={12} >
                                                <Form.Item
                                                    label=" "
                                                    name="exendDate2"
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Please select Date!',
                                                        },
                                                    ]}
                                                >
                                                    <DatePicker className="mt-2" size="large w-full" onChange={(date, dateString) => setExendDate2(dateString)} />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    }
                                </Col>
                                {/* <Col className="px-2 mb-3" lg={24} >
                                    <Checkbox onChange={onCurrentWorkChange}>I am currently working in this role</Checkbox>
                                </Col> */}
                            </Row>

                            <Form.Item
                                label="Describe your current situation"
                                name="exsituation"
                                className="px-2"
                                rules={[
                                    {
                                        required: false,
                                        message: 'Please input current situation!',
                                    },
                                ]}
                            >
                                <TextArea className="mt-2" rows="5" />
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

export default Experience