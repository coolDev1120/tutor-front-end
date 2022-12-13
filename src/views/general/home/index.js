import React from "react"
import { Row, Col, Button, Divider } from "antd"
import { CloudUploadOutlined } from '@ant-design/icons';

const Home = () => {
    return (
        <>
            <div className="container mx-auto">
                <Row>
                    <Col lg={12} md={24} className="px-4 flex items-center">
                        <div>
                            <p className="text-4xl font-bold pr-10">Online lecture System all over the world</p>
                            <p className="discription">Tutor.com provide you language, computer lecture  and you can enjoy it as you want.</p>
                            <Button type="primary" size="large" className="py-3 font-bold">GET START</Button>
                        </div>
                    </Col>
                    <Col lg={12} md={24} className="px-4 text-center py-4">
                        <img
                            className="w-full rounded-lg max-w-xl mx-auto"
                            src={require("assets/img/istockphoto-1288103838-170667a.jpg").default}
                            alt="..."
                        />
                    </Col>
                    <Col lg={24}>
                        <p className="font-bold text-base text-center mt-8">Top Tutors</p>
                        <Row>
                            <Col lg={4} md={4} xs={8} className="px-4 py-2">
                                <img
                                    className="w-full max-w-xl mx-auto rounded-lg"
                                    src={require("assets/img/brooke-cagle-WHWYBmtn3_0-unsplash.webp").default}
                                    alt="..."
                                />
                            </Col>
                            <Col lg={4} md={4} xs={8} className="px-4 py-2">
                                <img
                                    className="w-full max-w-xl mx-auto rounded-lg"
                                    src={require("assets/img/brooke-cagle-WHWYBmtn3_0-unsplash.webp").default}
                                    alt="..."
                                />
                            </Col>
                            <Col lg={4} md={4} xs={8} className="px-4 py-2">
                                <img
                                    className="w-full max-w-xl mx-auto rounded-lg"
                                    src={require("assets/img/brooke-cagle-WHWYBmtn3_0-unsplash.webp").default}
                                    alt="..."
                                />
                            </Col>
                            <Col lg={4} md={4} xs={8} className="px-4 py-2">
                                <img
                                    className="w-full max-w-xl mx-auto rounded-lg"
                                    src={require("assets/img/brooke-cagle-WHWYBmtn3_0-unsplash.webp").default}
                                    alt="..."
                                />
                            </Col>
                            <Col lg={4} md={4} xs={8} className="px-4 py-2">
                                <img
                                    className="w-full max-w-xl mx-auto rounded-lg"
                                    src={require("assets/img/brooke-cagle-WHWYBmtn3_0-unsplash.webp").default}
                                    alt="..."
                                />
                            </Col>
                            <Col lg={4} md={4} xs={8} className="px-4 py-2">
                                <img
                                    className="w-full max-w-xl mx-auto rounded-lg"
                                    src={require("assets/img/brooke-cagle-WHWYBmtn3_0-unsplash.webp").default}
                                    alt="..."
                                />
                            </Col>
                        </Row>
                        <p className="discription text-base text-center py-5">Join over 1 000 000 tutors worldwide</p>
                    </Col>
                </Row>
                <Divider />
                <Row className="py-20">
                    <Col lg={8} className="px-4 py-5 flex">
                        <div>
                            <CloudUploadOutlined className="p-3 text-3xl rounded-xl" style={{ background: "#ebebeb" }} />
                        </div>
                        <div className="pl-5">
                            <div className="font-bold text-lg py-5">Soft Feeling</div>
                            <div className="discription">Describe what this feature does, and how it benefits your customers.</div>
                        </div>
                    </Col>
                    <Col lg={8} className="px-4 py-5 flex">
                        <div>
                            <CloudUploadOutlined className="p-3 text-3xl rounded-xl" style={{ background: "#ebebeb" }} />
                        </div>
                        <div className="pl-5">
                            <div className="font-bold text-lg py-5">Soft Feeling</div>
                            <div className="discription">Describe what this feature does, and how it benefits your customers.</div>
                        </div>
                    </Col>
                    <Col lg={8} className="px-4 py-5 flex">
                        <div>
                            <CloudUploadOutlined className="p-3 text-3xl rounded-xl" style={{ background: "#ebebeb" }} />
                        </div>
                        <div className="pl-5">
                            <div className="font-bold text-lg py-5">Soft Feeling</div>
                            <div className="discription">Describe what this feature does, and how it benefits your customers.</div>
                        </div>
                    </Col>
                    <Col lg={8} className="px-4 py-5 flex">
                        <div>
                            <CloudUploadOutlined className="p-3 text-3xl rounded-xl" style={{ background: "#ebebeb" }} />
                        </div>
                        <div className="pl-5">
                            <div className="font-bold text-lg py-5">Soft Feeling</div>
                            <div className="discription">Describe what this feature does, and how it benefits your customers.</div>
                        </div>
                    </Col>
                    <Col lg={8} className="px-4 py-5 flex">
                        <div>
                            <CloudUploadOutlined className="p-3 text-3xl rounded-xl" style={{ background: "#ebebeb" }} />
                        </div>
                        <div className="pl-5">
                            <div className="font-bold text-lg py-5">Soft Feeling</div>
                            <div className="discription">Describe what this feature does, and how it benefits your customers.</div>
                        </div>
                    </Col>
                    <Col lg={8} className="px-4 py-5 flex">
                        <div>
                            <CloudUploadOutlined className="p-3 text-3xl rounded-xl" style={{ background: "#ebebeb" }} />
                        </div>
                        <div className="pl-5">
                            <div className="font-bold text-lg py-5">Soft Feeling</div>
                            <div className="discription">Describe what this feature does, and how it benefits your customers.</div>
                        </div>
                    </Col>


                </Row>
                <Divider />

                <div>
                    <Row className="py-7">
                        <Col lg={12} md={24} className="px-8 text-center py-4">
                            <img
                                className="w-full rounded-lg max-w-lg mx-auto"
                                src={require("assets/img/brooke-cagle-WHWYBmtn3_0-unsplash.webp").default}
                                alt="..."
                            />
                        </Col>
                        <Col lg={12} md={24} className="px-8 flex items-center">
                            <div>
                                <p className="text-4xl font-bold pr-10">Specialized Certified Teachers, Lecturers</p>
                                <p className="discription">Specialized tutors will be able to decide their fees freely with minimum amount that guarantees our own interest</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="py-7">
                        <Col lg={12} md={24} className="px-8 flex items-center">
                            <div>
                                <p className="text-4xl font-bold pr-10">Non-Specialized Tutors</p>
                                <p className="discription">Non-specialized tutors shall go into assessment process and travel through three different levels, their assessment will be based on students’ feedback, demand, and rating.</p>
                            </div>
                        </Col>
                        <Col lg={12} md={24} className="px-8 text-center py-4">
                            <img
                                className="w-full rounded-lg max-w-lg mx-auto "
                                src={require("assets/img/Screenshot_2.png").default}
                                alt="..."
                            />
                        </Col>
                    </Row>
                </div>
            </div>
            <div style={{ background: "#ebebeb" }} className="my-20">
                <div className="container mx-auto" >
                    <Row className="py-20">
                        <Col lg={8} md={8} className="px-10 py-5 text-center">
                            <div>
                                <CloudUploadOutlined className="p-3 text-3xl rounded-xl" style={{ background: "#fff" }} />
                            </div>
                            <div className="pl-5">
                                <div className="font-bold text-lg py-5">Access to Kids Accounts</div>
                                <div className="discription">Describe a key benefit that your product provides for your customers – and explain the impact it can have.</div>
                            </div>
                        </Col>
                        <Col lg={8} md={8} className="px-10 py-5 text-center">
                            <div>
                                <CloudUploadOutlined className="p-3 text-3xl rounded-xl" style={{ background: "#fff" }} />
                            </div>
                            <div className="pl-5">
                                <div className="font-bold text-lg py-5">Access to Kids Accounts</div>
                                <div className="discription">Describe a key benefit that your product provides for your customers – and explain the impact it can have.</div>
                            </div>
                        </Col>
                        <Col lg={8} md={8} className="px-10 py-5 text-center">
                            <div>
                                <CloudUploadOutlined className="p-3 text-3xl rounded-xl" style={{ background: "#fff" }} />
                            </div>
                            <div className="pl-5">
                                <div className="font-bold text-lg py-5">Access to Kids Accounts</div>
                                <div className="discription">Describe a key benefit that your product provides for your customers – and explain the impact it can have.</div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="text-center px-4">
                    <p className="text-4xl font-bold pr-10">What our users say</p>
                    <p className="discription">Reprehenderit nemo quod tempore doloribus ratione distinctio quis quidem<br />vitae sunt reiciendi</p>
                </div>
                <Row>
                    <Col lg={8} md={8} className="p-5">
                        <div className="p-5 border-2 rounded-lg">
                            <div className="flex">
                                <div>
                                    <img
                                        className="w-12 rounded-full max-w-lg mx-auto mr-3"
                                        src={require("assets/img/team-4-470x470.png").default}
                                        alt="..."
                                    />
                                </div>
                                <div className="flex items-center font-bold">
                                    <div>Gregory Jones</div>
                                </div>
                            </div>
                            <div className="py-3 text-base"> This software works outstandingly well. It grudgingly improves my skills by a lot. </div>
                            <div className="discription"> 8:21 PM / Dec 21, 2022 </div>
                        </div>
                    </Col>
                    <Col lg={8} md={8} className="p-5">
                        <div className="p-5 border-2 rounded-lg">
                            <div className="flex">
                                <div>
                                    <img
                                        className="w-12 rounded-full max-w-lg mx-auto mr-3"
                                        src={require("assets/img/team-4-470x470.png").default}
                                        alt="..."
                                    />
                                </div>
                                <div className="flex items-center font-bold">
                                    <div>Sylvia Taylor</div>
                                </div>
                            </div>
                            <div className="py-3 text-base"> It really saves me time and effort. @YourCompany is exactly what our business has been lacking. It's all good. Definitely worth the investment. I would also like to say thank you to all your staff! </div>
                            <div className="discription"> 8:21 PM / Dec 21, 2022 </div>
                        </div>
                    </Col>
                    <Col lg={8} md={8} className="p-5">
                        <div className="p-5 border-2 rounded-lg">
                            <div className="flex">
                                <div>
                                    <img
                                        className="w-12 rounded-full max-w-lg mx-auto mr-3"
                                        src={require("assets/img/team-4-470x470.png").default}
                                        alt="..."
                                    />
                                </div>
                                <div className="flex items-center font-bold">
                                    <div>Gregory Jones</div>
                                </div>
                            </div>
                            <div className="py-3 text-base"> This software works outstandingly well. It grudgingly improves my skills by a lot. </div>
                            <div className="discription"> 8:21 PM / Dec 21, 2022 </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Home