/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react"
import { Col, Progress, Alert, Row, Button } from 'antd'
import { StarFilled } from '@ant-design/icons';
import { useParams } from "react-router-dom";
import axios from "axios"

import "./style.css"

const Tutor111 = () => {
    const { id } = useParams();
    const [value, setValue] = useState({});

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/getTutorById`, { id: id })
            .then(res => {
                if (res.data.flag === 'no')
                    window.location = "/"
                setValue(res.data.data[0])
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }, [])
    return (
        <div className="container mx-auto">
            <div style={{ margin: "100px 0px 100px 0px" }}>
                <Row>
                    <Col lg={16} className="my-5">
                        <div className="flex">
                            <div>
                                <img
                                    className="w-160 tutorimg"
                                    src={`${process.env.REACT_APP_SERVER_URL}/` + value.image}
                                />
                            </div>
                            <div className="ml-5">
                                <div className="font-bold text-xl">{value.username}</div>
                                <p>Let’s enjoy learning {value.subjecttaught} together</p>
                                <div className="flex set_icon">
                                    <span><svg className="s-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="129 34 13 10">
                                        <path fill="#6F757B" d="M135.399 34 129 37.2l6.399 3.199 5.235-2.618v4.944h1.163V37.2L135.4 34zm0 7.7-4.654-2.327v1.3L135.4 43l4.653-2.327v-1.3l-4.653 2.326z"></path></svg>
                                    </span>
                                    <span className="pt-1">Teaches {value.subjecttaught} language</span>
                                </div>
                                <div className="flex set_icon">
                                    <span>
                                        <svg className="s-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="129 34 13 10">
                                            <path fill="#6F757B" d="M135.399 34 129 37.2l6.399 3.199 5.235-2.618v4.944h1.163V37.2L135.4 34zm0 7.7-4.654-2.327v1.3L135.4 43l4.653-2.327v-1.3l-4.653 2.326z"></path></svg>
                                    </span>
                                    <span className="pt-1">Speaks English B2 Japanese Native</span>
                                </div>
                                <div className="flex set_icon">
                                    <span>
                                        <svg className="s-icon" xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="129 34 13 10">
                                            <path fill="#6F757B" d="M135.399 34 129 37.2l6.399 3.199 5.235-2.618v4.944h1.163V37.2L135.4 34zm0 7.7-4.654-2.327v1.3L135.4 43l4.653-2.327v-1.3l-4.653 2.326z"></path></svg>
                                    </span>
                                    <span className="pt-1">1366 lessons</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded p-8 my-6">
                            <p className="text-xl font-bold">About the tutor</p>
                            <div className="text-base whitespace-pre-line">
                                {value.aboutme}
                            </div>
                        </div>
                        <div className="bg-white rounded p-8 my-6">
                            <p className="text-xl font-bold">Schedule</p>
                            <div className="text-base whitespace-pre-line">
                                <Alert message="Choose the time for your first lesson. The timings are displayed in your local timezone." type="info" showIcon />
                            </div>
                        </div>
                        <div className="bg-white rounded p-8 my-6">
                            <p className="text-xl font-bold">What students say</p>
                            <div className="text-base whitespace-pre-line">
                                <div className="flex p-6">
                                    <div className="border-r text-center p-3" style={{ width: "150px" }}>
                                        <div className="text-5xl font-bold">4.7</div>
                                        <div>15 reviews</div>
                                        <div>
                                            <StarFilled style={{ color: "#11c3c3" }} />
                                            <StarFilled style={{ color: "#11c3c3" }} />
                                            <StarFilled style={{ color: "#11c3c3" }} />
                                            <StarFilled style={{ color: "#11c3c3" }} />
                                            <StarFilled />
                                        </div>
                                    </div>
                                    <ul className="p-6 m-0" style={{ flex: "1 1" }}>
                                        <li className="flex text-center">
                                            <span style={{ width: "65px" }}>5 stars</span>
                                            <span className="px-5" style={{ flex: "1 1" }}><Progress percent={90} showInfo={false} /></span>
                                            <span style={{ width: "50px" }}>(14)</span>
                                        </li>
                                        <li className="flex text-center">
                                            <span style={{ width: "65px" }}>4 stars</span>
                                            <span className="px-5" style={{ flex: "1 1" }}><Progress percent={90} showInfo={false} /></span>
                                            <span style={{ width: "50px" }}>(14)</span>
                                        </li>
                                        <li className="flex text-center">
                                            <span style={{ width: "65px" }}>3 stars</span>
                                            <span className="px-5" style={{ flex: "1 1" }}><Progress percent={90} showInfo={false} /></span>
                                            <span style={{ width: "50px" }}>(14)</span>
                                        </li>
                                        <li className="flex text-center">
                                            <span style={{ width: "65px" }}>2 stars</span>
                                            <span className="px-5" style={{ flex: "1 1" }}><Progress percent={90} showInfo={false} /></span>
                                            <span style={{ width: "50px" }}>(14)</span>
                                        </li>
                                        <li className="flex text-center">
                                            <span style={{ width: "65px" }}>1 star</span>
                                            <span className="px-5" style={{ flex: "1 1" }}><Progress percent={90} showInfo={false} /></span>
                                            <span style={{ width: "50px" }}>(14)</span>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <div className="flex border-t border-b border-slate-400 py-3">
                                        <div>
                                            <img
                                                className="w-36 rounded-full"
                                                src={require("assets/img/person/avatar_jz3ma.webp").default}
                                            />
                                        </div>
                                        <div className="p-3 pl-5">
                                            <div className="font-bold">
                                                <span className="mr-3">Juntao</span>
                                                <span className="text-yello">5</span>
                                            </div>
                                            <div className="font-bold">November 20, 2022</div>
                                            <div>I have been taking classes with May for about three months. She is always well-prepared and takes requests for learning. She talks slowly for beginners and gives good practice for grammar.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SUBJECT */}
                        <div className="bg-white rounded p-8 my-6">
                            {/* title */}
                            <p className="text-xl">
                                <span className="font-bold pr-7">Subjects</span>
                                <span className="border-b-2 border-indigo-500">Japanese</span>
                            </p>
                            {/* content */}
                            <div className="text-base whitespace-pre-line">
                                {/* aboutsubject */}
                                {value.aboutsubject && JSON.parse(value.aboutsubject).map((value, key) => (
                                    <div key={key} className="border-t py-4">
                                        <div className="text-base font-bold">{value.title}</div>
                                        <div>{value.content}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col lg={8} className="my-5 px-5">
                        <div className="bg-white rounded p-5">
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
                            <div className="py-5">
                                <Button size="large" className="w-full mt-2" type="primary">Book Trial Lesson</Button>
                                <Button size="large" className="w-full mt-2" >Send message</Button>
                                <Button size="large" className="w-full mt-2" >Save to my Message</Button>
                            </div>
                        </div>
                    </Col>
                </Row>

            </div>
        </div>
    )
}

export default Tutor111