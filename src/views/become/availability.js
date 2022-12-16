import React from "react"
import { Select, Col, Row, Form, Button } from "antd"
import axios from "axios"
import jwt_decode from 'jwt-decode';
import { useDispatch } from "react-redux";
import {
    register_next
} from "redux/actions";

const Availability = (props) => {
    // const [init, SetInit] = useState({});
    const dispatch = useDispatch();


    // useEffect(() => {
    //     SetInit(props);
    // }, [props]);

    const onFinish = (values) => {
        values.email = jwt_decode(localStorage.getItem('token')).email
        values.availability = JSON.stringify(values.availability)
        axios.post(`${process.env.REACT_APP_SERVER_URL}/become/availability`, values)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
        dispatch(
            register_next()
        );
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const options = [
        {
            value: 'Language essentials',
            label: 'Language essentials',
        },
        {
            value: 'Exam prep',
            label: 'Exam prep',
        },
        {
            value: 'Everyday conversation',
            label: 'Everyday conversation',
        },
        {
            value: 'English for work',
            label: 'English for work',
        },
    ];

    return (
        <div className="container">
            <div className="bg-white p-10 w-4/5 mx-auto" >
                <div className="font-bold border-b-black-500 text-2xl mb-5"> Availability </div>
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
                                label="Availability"
                                className="px-2"
                            >
                                {init.data && init.data.availability && JSON.parse(init.data.availability).map((value, key) => (
                                    <Tag color="blue" key={key} className="mb-3"> {value} </Tag>
                                ))}
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
                                label="Availability"
                                name="availability"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your Name!',
                                    },
                                ]}
                            >
                                <Select
                                    className="pr-4 mt-2"
                                    mode="multiple"
                                    style={{ width: '100%' }}
                                    placeholder="Topic"
                                    onChange={handleChange}
                                    size="large"
                                    options={options}
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

export default Availability