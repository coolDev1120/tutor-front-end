import React from "react"
import { Input, Form, Button, Row, Col, message } from "antd"
import TextArea from "antd/es/input/TextArea";
import axios from "axios"
import jwt_decode from 'jwt-decode';
// import { useDispatch } from "react-redux";
// import {
//     register_reset
// } from "redux/actions";

const Certification = (props) => {
    // const [init, SetInit] = useState({});
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     SetInit(props);
    // }, [props]);

    const onFinish = (values) => {
        values.email = jwt_decode(localStorage.getItem('token')).email
        axios.post(`${process.env.REACT_APP_SERVER_URL}/become/certification`, values)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
        message.info(`You have successfully registered. Please wait for administrator's acceptance.`);
        setTimeout(() => {
            window.location = "/general/become"
        }, 3000);
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="container">
            <div className="bg-white p-10 w-4/5 mx-auto" >
                <div className="font-bold border-b-black-500 text-2xl mb-5"> Certification </div>
                <Row>
                    {/* <Col lg={12}>
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
                                <div>{init.data && init.data.certitle ? init.data.certitle : ' '}</div>
                            </Form.Item>

                            <Form.Item
                                label="Content"
                                className="px-2"
                            >
                                <div>{init.data && init.data.cercontent ? init.data.cercontent : ' '}</div>
                            </Form.Item>
                        </Form>
                    </Col> */}
                    <Col lg={24}>
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
                                name="certitle"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Certification Title!',
                                    },
                                ]}
                            >
                                <Input size="large" placeholder="Certification Title" />
                            </Form.Item>

                            <Form.Item
                                label="Content"
                                name="cercontent"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Certification Content!',
                                    },
                                ]}
                            >
                                <TextArea size="large" placeholder="Certification Content" ></TextArea>
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

export default Certification