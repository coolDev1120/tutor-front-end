import React, { useState, useEffect } from "react"
import { Col, Row, Form, Alert, Button, Tag } from "antd"
import { Link } from "react-router-dom";
import Moment from 'react-moment';

const About = (props) => {
    const [init, SetInit] = useState({});

    useEffect(() => {
        SetInit(props);
    }, [props]);

    return (
        <div className="container">
            <div className="bg-white p-10 w-4/5 mx-auto" >
                <Alert
                    className="my-5"
                    message={`You have already submitted your registration. If you are going to register again, please click button.`}
                    description="If you change your tutor profile, you have to verify again."
                    type="info"
                    action={
                        <Link to="/general/become/register"><Button type="primary">Re-registration</Button></Link>
                    }
                    showIcon
                />

                {/* About */}
                <Col lg={12} className="preview">
                    <div className="px-2 font-bold border-b-black-500 text-2xl mb-5"> About </div>
                    <Form.Item
                        label="Subject taught"
                        className="px-2"
                    >
                        <div className="iuput_h">{init.data && init.data.subjecttaught ? init.data.subjecttaught : ' '}</div>
                    </Form.Item>

                    <Form.Item
                        label="Language level"
                        className="px-2"
                    >
                        <div className="iuput_h">{init.data && init.data.enlevel ? init.data.enlevel : ' '}</div>
                    </Form.Item>

                    <Form.Item
                        label="Teaching experience"
                        className="px-2"
                    >
                        <div className="iuput_h">{init.data && init.data.teachingexperience ? init.data.teachingexperience : ' '}</div>
                    </Form.Item>

                    <Form.Item
                        label="Current situation"
                        className="px-2"
                    >
                        <div className="iuput_h">{init.data && init.data.currentsituation ? init.data.currentsituation : ' '}</div>
                    </Form.Item>
                </Col>

                {/* Work Experience */}
                <Col lg={12} className="preview">
                    <div className="px-2 font-bold border-b-black-500 text-2xl mb-5"> Work Experience </div>
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
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={12} >
                            <Row>
                                <Col className="px-2" lg={24} >
                                    <Form.Item
                                        label="End Date"
                                    >
                                        <div className="iuput_h">{init.data && init.data.exendDate1 ? <Moment format="YYYY-MM-DD" date={init.data.exendDate1} /> : ' '}</div>
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                    <Form.Item
                        label="Current situation"
                        className="px-2"
                    >
                        <div className="iuput_h">{init.data && init.data.exsituation ? init.data.exsituation : ' '}</div>
                    </Form.Item>
                </Col>

                {/* Education */}
                <Col lg={12} className="preview">
                    <div className="px-2 font-bold border-b-black-500 text-2xl mb-5"> Education </div>
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
                                label="Start Date"
                            >

                                <div>{init.data && init.data.edstartDate1 ? <Moment format="YYYY-MM-DD" date={init.data.edstartDate1} /> : ' '}</div>
                            </Form.Item>
                        </Col>
                        <Col className="px-2" lg={12} >
                            <Form.Item
                                label="End Date"
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
                </Col>

                {/* description */}
                <Col lg={12}>
                    <div className="px-2 font-bold border-b-black-500 text-2xl mb-5"> Description </div>
                    <Form.Item
                        label="About me"
                        className="px-2"
                    >
                        <div className="iuput_h">{init.data && init.data.aboutme ? init.data.aboutme : ' '}</div>
                    </Form.Item>
                    <Form.Item
                        label="Subjects"
                        className="px-2"
                    >
                        {init.data && init.data.aboutsubject && JSON.parse(init.data.aboutsubject).map((value, key) => (
                            <div key={key} className="mb-3">
                                <div>{value.title}</div>
                                <div>{value.content}</div>
                            </div>
                        ))}
                    </Form.Item>
                </Col>

                {/* price */}
                <Col lg={12}>
                    <div className="font-bold border-b-black-500 text-2xl mb-5"> Price </div>
                    <Form.Item
                        label="Hourly Rate"
                        className="px-2"
                    >
                        <div>{init.data && init.data.hourlyRate ? init.data.hourlyRate : ' '} $</div>
                    </Form.Item>
                </Col>

                {/* aviliblity */}
                <Col lg={12}>
                    <div className="font-bold border-b-black-500 text-2xl mb-5"> Availability </div>
                    <Form.Item
                        label="Availability"
                        className="px-2"
                    >
                        {init.data && init.data.availability && JSON.parse(init.data.availability).map((value, key) => (
                            <Tag color="blue" key={key} className="mb-3"> {value} </Tag>
                        ))}
                    </Form.Item>
                </Col>

                {/* certification */}
                <Col lg={12}>
                    <div className="font-bold border-b-black-500 text-2xl mb-5"> Certification </div>

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
                </Col>
            </div>
        </div >
    )
}

export default About