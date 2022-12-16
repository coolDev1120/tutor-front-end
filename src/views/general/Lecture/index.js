import React, { useState } from "react"
import { Row, Col, Divider, Radio } from "antd"
import Mylecture from "./MyLecture"
import Livelecture from "./LiveLecture"

const Lecture = () => {
    const [mode, setMode] = useState('mylecutre');
    const handleModeChange = (e) => {
        setMode(e.target.value);
    };
    return (
        <>
            <div className="container mx-auto">
                <Row>
                    <Col lg={12} md={24} className="px-4 text-center py-4">
                        <img
                            className="w-full rounded-lg max-w-xl mx-auto"
                            src={require("assets/img/adam-winger-7fF0iei80AQ-unsplash (1).jpg").default}
                            alt="..."
                        />
                    </Col>
                    <Col lg={12} md={24} className="px-4 flex items-center">
                        <div>
                            <p className="text-4xl font-bold pr-10">Start Lectures With Your Friends </p>
                            <p className="discription">To start your lecture, find tutors who is suitable for you</p>
                        </div>
                    </Col>
                    <Divider />
                    <div className="py-20 px-4 text-4xl font-bold text-center w-full">
                        An all-in-one online lecture platform <br /> that's smart, simple and fast.
                    </div>

                    <Col lg={24} className="px-4">
                        <Radio.Group
                            size="large"
                            className="text-center w-full pb-5"
                            onChange={handleModeChange}
                            value={mode}
                            style={{
                                marginBottom: 8,
                            }}
                        >
                            <Radio.Button type="primary" value="mylecutre">My Lectures</Radio.Button>
                            <Radio.Button type="primary" value="livelecture">Live Lectures</Radio.Button>
                        </Radio.Group>
                        {mode === "mylecutre" &&
                            <div>
                                <Mylecture />
                            </div>
                        }
                        {mode === "livelecture" &&
                            <div>
                                <Livelecture />
                            </div>
                        }
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Lecture