/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import { Select, Col, Row, Button, Pagination, Modal, DatePicker, message } from "antd";
import axios from "axios"
import ReactCountryFlag from "react-country-flag"
import ScheduleSelector from 'react-schedule-selector'
import jwt_decode from 'jwt-decode';
import moment from "moment"

const Tutor = () => {
    const [schedule, setSchedule] = useState([])
    const [userschedule, setUserSchedule] = useState([])
    const [start, Setstart] = useState(new Date())
    const [current, setCurrent] = useState(3);
    const [tutors, setTutors] = useState({});
    const [tutorEmail, setTutorEmail] = useState("");

    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/become/gettutors`)
            .then(res => {
                console.log(res.data);
                setTutors(res.data.data)
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }, []);

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
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

    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);


    // modal
    const showModal = (email) => {
        setTutorEmail(email)
        axios.post(`${process.env.REACT_APP_SERVER_URL}/setting/getSchedule`, { email: email })
            .then(res => {
                setSchedule(JSON.parse(res.data.data.schedule))
            })
        setIsModalOpen(true);
    };

    const handleOk = () => {
        if (userschedule.length == 0) {
            message.error(`You must select schedule.`);
            return
        }
        axios.post(`${process.env.REACT_APP_SERVER_URL}/setting/saveUserSchedule`,
            {
                email: jwt_decode(localStorage.getItem('token')).email,
                tutor: tutorEmail,
                schedule: JSON.stringify(userschedule)
            })
            .then(res => {
                message.success(`successfully.`);
                setIsModalOpen(false);
            })
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const handelUserSchedule = (e) => {
        var check = false;
        for (const i in schedule) {
            if (moment(schedule[i]).format() === moment(e[0]).format()) {
                check = true;
            }
        }
        if (check === false && e.length !== 0) {
            message.warning(`You selected schedule is not tutor's schedule.`);
        }
        if (check === true || e.length === 0) {
            if (e.length <= 1) {
                setUserSchedule(e)
            }
            else {
                message.warning(`You can select only one schedule.`);
            }
        }

    }

    return (
        <div>
            <div className="container mx-auto items-center flex flex-wrap">
                <div className="w-full" style={{ display: "flex" }}>
                    <div className="form-group w-full">
                        <label>Topic</label>
                        <Select
                            className="pr-4 mt-2"
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Topic"
                            onChange={handleChange}
                            size="large"
                            options={options}
                        />
                    </div>
                    <div className="form-group" style={{ width: '100%' }}>
                        <label>Day</label>
                        <Select
                            className="pr-4 mt-2"
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Topic"
                            onChange={handleChange}
                            size="large"
                            options={options}
                        />
                    </div>
                    <div className="form-group" style={{ width: '100%' }}>
                        <label>Time</label>
                        <Select
                            className="pr-4 mt-2"
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Topic"
                            onChange={handleChange}
                            size="large"
                            options={options}
                        />
                    </div>
                    <div className="form-group" style={{ width: '100%' }}>
                        <label>Time</label>
                        <Select
                            className="pr-4 mt-2"
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Topic"
                            onChange={handleChange}
                            size="large"
                            options={options}
                        />
                    </div>
                </div>
            </div>

            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width={1000}>
                <div className="container">
                    <Row >
                        <Col lg={24}>
                            <DatePicker className='mb-3' onChange={e => Setstart(e)} />
                        </Col>
                        <Col xm={24} sm={24} lg={12}>
                            <ScheduleSelector
                                startDate={start}
                                selection={schedule}
                                numDays={5}
                                minTime={0}
                                maxTime={24}
                                hourlyChunks={1}
                            />
                        </Col>
                        <Col xm={24} sm={24} lg={12}>
                            <ScheduleSelector
                                startDate={start}
                                selection={userschedule}
                                numDays={5}
                                minTime={0}
                                maxTime={24}
                                hourlyChunks={1}
                                onChange={e => handelUserSchedule(e)}
                            />
                        </Col>
                    </Row>
                </div>
            </Modal>

            <section style={{ marginTop: "30px" }}>
                <div className="container mx-auto items-center">

                    <Row>
                        <Col lg={24}>
                            <Row>
                                <Col lg={16}>
                                    {tutors.length > 0 && tutors.map((value, key) => (
                                        <Row key={key} className="tutor_each p-5 mb-5">
                                            <Col lg={6} md={6} xs={6}>
                                                <img
                                                    className="w-160 tutorimg"
                                                    src={`${process.env.REACT_APP_SERVER_URL}/` + value.image}
                                                />
                                            </Col>
                                            <Col className="px-3" lg={12} md={18} xs={18}>
                                                <div className="title">
                                                    <div className="flex">
                                                        <span className="font-bold font-5 text-xl pr-4">
                                                            <Link to={`/general/tutor/${value.tutor_id}`}>{value.username}</Link>
                                                        </span>
                                                        <ReactCountryFlag
                                                            countryCode="FR"
                                                            svg
                                                            style={{
                                                                paddingTop: '7px',
                                                                width: '1.5em',
                                                                height: '1.5em',
                                                            }}
                                                        />
                                                        {/* <ReactCountryFlag
                                                            className="emojiFlag"
                                                            countryCode="FR"
                                                            style={{
                                                                fontSize: '2em',
                                                                lineHeight: '2em',
                                                            }}
                                                            aria-label="United States"
                                                        /> */}
                                                    </div>
                                                    <div className="flex pt-2">
                                                        <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#52667D" d="M7.636 1.344a.75.75 0 0 1 .728 0l5.987 3.326a.75.75 0 0 1 .399.663v4a.75.75 0 0 1-1.5 0V6.608L8.364 9.322a.75.75 0 0 1-.728 0l-6-3.333a.75.75 0 0 1 0-1.311l6-3.334Zm-4.092 3.99L8 7.808l4.456-2.476L8 2.858 3.544 5.333ZM5.417 10a.75.75 0 0 0-1.5 0v.667a4.083 4.083 0 1 0 8.166 0V10a.75.75 0 0 0-1.5 0v.667a2.583 2.583 0 1 1-5.166 0V10Z" ></path></svg>
                                                        <span className="pl-3">{value.subjecttaught}</span>
                                                    </div>
                                                </div>
                                                <div className="flex pt-4">
                                                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#52667D" d="M9.47 5.048c0 1.775-.944 2.31-1.47 2.31s-1.47-.535-1.47-2.31C6.53 4.156 7.224 3.5 8 3.5c.775 0 1.47.656 1.47 1.548Zm1.5 0c0 2.285-1.33 3.81-2.97 3.81-1.64 0-2.97-1.525-2.97-3.81C5.03 3.364 6.36 2 8 2c1.64 0 2.97 1.364 2.97 3.048Zm-6.887 8.267c0-.32.104-.776.567-1.167.48-.405 1.446-.826 3.35-.826 1.904 0 2.869.42 3.35.826.462.391.566.846.566 1.167V14a.75.75 0 0 0 1.5 0v-.687c0-.66-.229-1.577-1.1-2.312-.852-.72-2.22-1.18-4.316-1.18-2.096 0-3.464.46-4.318 1.18a2.995 2.995 0 0 0-1.099 2.313V14a.75.75 0 0 0 1.5 0v-.685Z"></path></svg>
                                                    <span className="pl-3">30 active students • 1,916 lessons</span>
                                                </div>
                                                <div className="content pt-3 height-95 overflow-hidden">
                                                    {value.aboutme}
                                                </div>
                                                <a className="text-right text-blue-700">Read More</a>
                                            </Col>
                                            <Col lg={6} md={24} xs={12}>
                                                <Row>
                                                    <Col lg={24} md={12}>
                                                        <div className="flex">
                                                            <div className="text-center" style={{ width: "40%" }}>
                                                                <div className="tutor_star inline-flex">
                                                                    <svg height="23" viewBox="0 0 24 23" width="24" className="styles_RatingStarIcon__i7Hk3"><path d="M23.97 8.721a.597.597 0 0 0-.507-.413l-7.744-.822-3.172-7.16c-.192-.435-.903-.435-1.095 0l-3.17 7.16-7.745.822a.601.601 0 0 0-.508.413.606.606 0 0 0 .17.635l5.785 5.248-1.616 7.667a.605.605 0 0 0 .586.729.595.595 0 0 0 .3-.081L12 19.003l6.747 3.916c.204.119.46.105.652-.035a.606.606 0 0 0 .234-.613l-1.616-7.668 5.786-5.248a.606.606 0 0 0 .168-.634z"></path></svg>
                                                                    <span className="pl-1 text-2xl">5</span>
                                                                </div>
                                                                <div className="">15 reviews</div>
                                                            </div>
                                                            <div className="text-center" style={{ width: "60%" }}>
                                                                <div><span className="text-2xl pr-1">{value.hourlyRate}</span>EUR</div>
                                                                <div>50-min lesson</div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                    <Col lg={24} md={12}>
                                                        <Button value={value.email} type="primary" onClick={() => showModal(value.email)} className="w-full mt-3">Book trial Lessson</Button>
                                                        <Button className="w-full mt-3">Message</Button>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    ))}
                                    <Row className="tutor_each p-5 mb-5">
                                        <Col lg={6} md={6} xs={6}>
                                            <img
                                                className="w-160 tutorimg"
                                                src={require("assets/img/avatar_5jw7o362q2s.jpg").default}
                                            />
                                        </Col>
                                        <Col className="px-3" lg={12} md={18} xs={18}>
                                            <div className="title">
                                                <div className="flex">
                                                    <span className="font-bold font-5 text-xl pr-4"><Link to="/general/tutor">Florence S.</Link></span>
                                                    <img className="w-4" src={require("assets/img/de.svg").default} />
                                                </div>
                                                <div className="flex pt-2">
                                                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#52667D" d="M7.636 1.344a.75.75 0 0 1 .728 0l5.987 3.326a.75.75 0 0 1 .399.663v4a.75.75 0 0 1-1.5 0V6.608L8.364 9.322a.75.75 0 0 1-.728 0l-6-3.333a.75.75 0 0 1 0-1.311l6-3.334Zm-4.092 3.99L8 7.808l4.456-2.476L8 2.858 3.544 5.333ZM5.417 10a.75.75 0 0 0-1.5 0v.667a4.083 4.083 0 1 0 8.166 0V10a.75.75 0 0 0-1.5 0v.667a2.583 2.583 0 1 1-5.166 0V10Z" ></path></svg>
                                                    <span className="pl-3">German</span>
                                                </div>
                                            </div>
                                            <div className="flex pt-4">
                                                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#52667D" d="M9.47 5.048c0 1.775-.944 2.31-1.47 2.31s-1.47-.535-1.47-2.31C6.53 4.156 7.224 3.5 8 3.5c.775 0 1.47.656 1.47 1.548Zm1.5 0c0 2.285-1.33 3.81-2.97 3.81-1.64 0-2.97-1.525-2.97-3.81C5.03 3.364 6.36 2 8 2c1.64 0 2.97 1.364 2.97 3.048Zm-6.887 8.267c0-.32.104-.776.567-1.167.48-.405 1.446-.826 3.35-.826 1.904 0 2.869.42 3.35.826.462.391.566.846.566 1.167V14a.75.75 0 0 0 1.5 0v-.687c0-.66-.229-1.577-1.1-2.312-.852-.72-2.22-1.18-4.316-1.18-2.096 0-3.464.46-4.318 1.18a2.995 2.995 0 0 0-1.099 2.313V14a.75.75 0 0 0 1.5 0v-.685Z"></path></svg>
                                                <span className="pl-3">30 active students • 1,916 lessons</span>
                                            </div>
                                            <div className="content pt-3 height-95 overflow-hidden">
                                                German Native Teacher I have a solid experience in teaching German, French and English. As a German law student, I studied both at the University of Cologne and at Paris Sorbonne University. I spent one year as an English teacher in a Chinese secondary school. I also gave private lessons to students and adults throughout my studies.

                                                Why choose Florence S.
                                                "Florence is a great tutor - she helped get my B1 level (94% in speaking and listening). Could not have done it without her. I will continue my lessons!"
                                            </div>
                                            <a className="text-right text-blue-700">Read More</a>
                                        </Col>
                                        <Col lg={6} md={24} xs={12}>
                                            <Row>
                                                <Col lg={24} md={12}>
                                                    <div className="flex">
                                                        <div className="text-center" style={{ width: "40%" }}>
                                                            <div className="tutor_star inline-flex">
                                                                <svg height="23" viewBox="0 0 24 23" width="24" className="styles_RatingStarIcon__i7Hk3"><path d="M23.97 8.721a.597.597 0 0 0-.507-.413l-7.744-.822-3.172-7.16c-.192-.435-.903-.435-1.095 0l-3.17 7.16-7.745.822a.601.601 0 0 0-.508.413.606.606 0 0 0 .17.635l5.785 5.248-1.616 7.667a.605.605 0 0 0 .586.729.595.595 0 0 0 .3-.081L12 19.003l6.747 3.916c.204.119.46.105.652-.035a.606.606 0 0 0 .234-.613l-1.616-7.668 5.786-5.248a.606.606 0 0 0 .168-.634z"></path></svg>
                                                                <span className="pl-1 text-2xl">5</span>
                                                            </div>
                                                            <div className="">15 reviews</div>
                                                        </div>
                                                        <div className="text-center" style={{ width: "60%" }}>
                                                            <div><span className="text-2xl pr-1">33</span>EUR</div>
                                                            <div>50-min lesson</div>
                                                        </div>
                                                    </div>
                                                </Col>
                                                <Col lg={24} md={12}>
                                                    <Button type="primary" className="w-full mt-3">Book trial Lessson</Button>
                                                    <Button className="w-full mt-3">Message</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                    <div className="w-full text-center">
                                        <Pagination current={current} onChange={onChange} onShowSizeChange={onShowSizeChange} total={60} />
                                    </div>
                                </Col>
                                <Col lg={8}>
                                    <div className="pl-5">
                                        <div className="w-full rounded-lg p-5 bg-white">
                                            2343454354
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </section >
        </div >

    );
}

export default Tutor;