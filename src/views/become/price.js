import React, { useState, useEffect } from "react"
import { Input, Form, Button, Row, Col } from "antd"
import axios from "axios"
import jwt_decode from 'jwt-decode';

const Price = (props) => {
    const [init, SetInit] = useState({});

    useEffect(() => {
        SetInit(props);
    }, [props]);

    const onFinish = (values) => {
        console.log('Success:', values);
        values.email = jwt_decode(localStorage.getItem('token')).email
        axios.post(`${process.env.REACT_APP_SERVER_URL}/become/price`, values)
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
                <div className="font-bold border-b-black-500 text-2xl mb-5"> Price </div>
                <Row>
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
                                label="Hourly Rate"
                                className="px-2"
                            >
                                <div>{init.data && init.data.hourlyRate ? init.data.hourlyRate : ' '} $</div>
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
                                label="Hourly Rate"
                                name="hourlyRate"
                                className="px-2"
                                rules={[
                                    // {
                                    //     type: 'number',
                                    //     message: 'The input is not valid Number!',
                                    // },
                                    {
                                        required: true,
                                        message: 'Please input your Hourly Rate!',
                                    },
                                ]}
                            >
                                <Input prefix=" $ " size="large" placeholder="0.00" />
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


export default Price