/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { Row, Col, Pagination, Button } from 'antd'

const Livelecture = () => {
    const [current, setCurrent] = useState(1);

    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };

    const onShowSizeChange = (current, pageSize) => {
        console.log(current, pageSize);
    };

    return (
        <>
            <Col lg={24} >
                <Row className="tutor_each p-10 mb-5 border rounded-lg">
                    <Col lg={4} md={6} xs={6}>
                        <img
                            className="w-160 tutorimg"
                            src={require("assets/img/team-3-800x800.jpg").default}
                        />
                    </Col>
                    <Col className="px-3" lg={15} md={18} xs={18}>
                        <div className="title">
                            <div className="flex">
                                <span className="font-bold font-5 text-xl pr-4">
                                    Bill Gates
                                </span>
                            </div>
                            <div className="flex pt-2">
                                <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#52667D" d="M7.636 1.344a.75.75 0 0 1 .728 0l5.987 3.326a.75.75 0 0 1 .399.663v4a.75.75 0 0 1-1.5 0V6.608L8.364 9.322a.75.75 0 0 1-.728 0l-6-3.333a.75.75 0 0 1 0-1.311l6-3.334Zm-4.092 3.99L8 7.808l4.456-2.476L8 2.858 3.544 5.333ZM5.417 10a.75.75 0 0 0-1.5 0v.667a4.083 4.083 0 1 0 8.166 0V10a.75.75 0 0 0-1.5 0v.667a2.583 2.583 0 1 1-5.166 0V10Z" ></path></svg>
                                <span className="pl-3">Title</span>
                            </div>
                        </div>
                        <div className="flex pt-4">
                            <svg className="w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16"><path fill="#52667D" d="M9.47 5.048c0 1.775-.944 2.31-1.47 2.31s-1.47-.535-1.47-2.31C6.53 4.156 7.224 3.5 8 3.5c.775 0 1.47.656 1.47 1.548Zm1.5 0c0 2.285-1.33 3.81-2.97 3.81-1.64 0-2.97-1.525-2.97-3.81C5.03 3.364 6.36 2 8 2c1.64 0 2.97 1.364 2.97 3.048Zm-6.887 8.267c0-.32.104-.776.567-1.167.48-.405 1.446-.826 3.35-.826 1.904 0 2.869.42 3.35.826.462.391.566.846.566 1.167V14a.75.75 0 0 0 1.5 0v-.687c0-.66-.229-1.577-1.1-2.312-.852-.72-2.22-1.18-4.316-1.18-2.096 0-3.464.46-4.318 1.18a2.995 2.995 0 0 0-1.099 2.313V14a.75.75 0 0 0 1.5 0v-.685Z"></path></svg>
                            <span className="pl-3">30 active students • 1,916 lessons</span>
                        </div>
                        <div className="content pt-3 height-95 overflow-hidden">
                            "Great tutor, polite, professional, motivating; encourages you to speak the Arabic language from the first class, offers lots of practice and easy to understand explanations. You will surely remember every word mentioned in the class ensuring quick progress. Sally is proficient in English and speaks beautifully which is very important for the proper understanding of the new vocabulary and grammar rules. I would definitely recommend tutor Sally to anyone who wants to learn quickly and use the language efficiently. "
                        </div>
                        <a className="text-right text-blue-700">Read More</a>
                    </Col>
                    <Col lg={5} md={24} xs={24}>
                        <Row>
                            <Col lg={24} xs={12}>
                                <div className="flex">
                                    <div className="text-center" style={{ width: "40%" }}>
                                        <div className="tutor_star inline-flex">
                                            <svg height="23" viewBox="0 0 24 23" width="24" className="styles_RatingStarIcon__i7Hk3"><path d="M23.97 8.721a.597.597 0 0 0-.507-.413l-7.744-.822-3.172-7.16c-.192-.435-.903-.435-1.095 0l-3.17 7.16-7.745.822a.601.601 0 0 0-.508.413.606.606 0 0 0 .17.635l5.785 5.248-1.616 7.667a.605.605 0 0 0 .586.729.595.595 0 0 0 .3-.081L12 19.003l6.747 3.916c.204.119.46.105.652-.035a.606.606 0 0 0 .234-.613l-1.616-7.668 5.786-5.248a.606.606 0 0 0 .168-.634z"></path></svg>
                                            <span className="pl-1 text-2xl">5</span>
                                        </div>
                                        <div className="">15 reviews</div>
                                    </div>
                                    <div className="text-center" style={{ width: "60%" }}>
                                        <div><span className="text-2xl pr-1">50</span>EUR</div>
                                        <div>50-min lesson</div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={24} xs={12}>
                                <Button type="primary" className="w-full mt-3">Enter Lecture</Button>
                                <Button className="w-full mt-3">Message</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="w-full text-center">
                    <Pagination current={current} onChange={onChange} onShowSizeChange={onShowSizeChange} total={60} />
                </div>
            </Col>
        </>
    )
}

export default Livelecture