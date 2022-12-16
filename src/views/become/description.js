import React from "react"
import { Input, Form, Button, Space, Row, Col } from "antd"
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import axios from "axios"
import jwt_decode from 'jwt-decode';
import { useDispatch } from "react-redux";
import {
    register_next
} from "redux/actions";
const { TextArea } = Input;

const Description = (props) => {
    // const [init, SetInit] = useState({});
    const dispatch = useDispatch();

    // useEffect(() => {
    //     SetInit(props);
    // }, [props]);

    const onFinish = (values) => {
        values.email = jwt_decode(localStorage.getItem('token')).email
        values.aboutsubject = JSON.stringify(values.aboutsubject)
        axios.post(`${process.env.REACT_APP_SERVER_URL}/become/description`, values)
            .then(res => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
        dispatch(register_next());
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="container">
            <div className="bg-white p-10 w-4/5 mx-auto" >
                <div className="px-2 font-bold border-b-black-500 text-2xl mb-5"> Add Yuor Description </div>
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
                                label="About me"
                                className="px-2"
                            >
                                <div className="iuput_h">{init.data && init.data.aboutme ? init.data.aboutme : ' '}</div>
                            </Form.Item>
                            <Form.Item
                                label="Add Subjects"
                                className="px-2"
                            >
                                {init.data && init.data.aboutsubject && JSON.parse(init.data.aboutsubject).map((value, key) => (
                                    <div key={key} className="mb-3">
                                        <div>{value.title}</div>
                                        <div>{value.content}</div>
                                    </div>
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
                                label="About me"
                                name="aboutme"
                                className="px-2"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your description!',
                                    },
                                ]}
                            >
                                <TextArea rows={5} size="large" className="mt-2" placeholder="Describe your top skills, experiences, and interests. This is one of the first things clients will see on your profile." ></TextArea>
                            </Form.Item>


                            <div className="px-2 pb-3"><span style={{ color: "red" }}>*</span> Add Subjects</div>
                            <Form.List className="w-full flex-one" name="aboutsubject">
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name, ...restField }) => (
                                            <Space
                                                className="w-full"
                                                key={key}
                                                style={{
                                                    marginBottom: 8,
                                                }}
                                                align="baseline"
                                            >
                                                <Form.Item
                                                    className="px-2"
                                                    {...restField}
                                                    name={[name, 'title']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Missing Subject Title',
                                                        },
                                                    ]}
                                                >
                                                    <Input className="w-full" placeholder="Subject Title" />
                                                </Form.Item>
                                                <Form.Item
                                                    className="px-2 flex-one"
                                                    {...restField}
                                                    name={[name, 'content']}
                                                    rules={[
                                                        {
                                                            required: true,
                                                            message: 'Missing Subject Content',
                                                        },
                                                    ]}
                                                >
                                                    <TextArea className="w-full" rows={3} placeholder="Subject Content" ></TextArea>
                                                </Form.Item>
                                                <MinusCircleOutlined onClick={() => remove(name)} />
                                            </Space>
                                        ))}
                                        <Form.Item className="px-2">
                                            <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                                                Add field
                                            </Button>
                                        </Form.Item>
                                    </>
                                )}
                            </Form.List>

                            <Button className="mx-2 my-2" type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Description