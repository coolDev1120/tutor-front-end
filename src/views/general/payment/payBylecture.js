/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react"
import { Row, Col, Divider } from "antd"
import { useParams } from "react-router-dom";
import axios from "axios"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { StarFilled } from '@ant-design/icons';
import "./style.css"

const Pay = () => {
    const { id } = useParams();
    const [tutor, setTutor] = useState({})

    useEffect(() => {
        axios.post(`${process.env.REACT_APP_SERVER_URL}/getTutorById`, { id: id })
            .then(res => {
                if (res.data.flag === 'no')
                    window.location = "/"
                setTutor(res.data.data[0])
                console.log(res.data)
            })
            .catch((err) => {
                console.log(err.response.data.error);
            });
    }, [])

    const initialOptions = {
        "client-id": "test",
        currency: "USD",
        intent: "capture",
        "data-client-token": "abc123xyz==",
    };
    return (
        <div className="container mx-auto">
            <div style={{ margin: "200px 0px 200px 0px" }}>
                <Row>
                    <Col className='p-3' lg={10}>
                        <div className="bg-white p-10 rounded">
                            <div className="flex">
                                <img
                                    className="rounded-xl"
                                    style={{ width: "80px", height: "80px" }}
                                    src={`${process.env.REACT_APP_SERVER_URL}/` + tutor.image}
                                />
                                <div className="px-4">
                                    <div>{tutor.subjecttaught}</div>
                                    <div className="text-lg font-bold py-3">{tutor.username}</div>
                                    <div className="text-base flex">
                                        <div style={{ marginTop: "-2px" }}><StarFilled style={{ color: "#fdc75f" }} /></div>
                                        <div className="pl-3">5.0 (2 reviews)</div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="py-4 text-lg font-bold">Your order</div>
                                <div className="py-2">
                                    <span>50 minutes lesson</span><span className="float-right">${tutor.hourlyRate}</span>
                                </div>
                                <div className="py-2">
                                    <span>Processing fee</span><span className="float-right">${0.29}</span>
                                </div>
                            </div>
                            <div>
                                <div className="py-4 text-lg font-bold">
                                    <span>Total</span><span className="float-right">${0.29}</span>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={14}>
                        <Row>
                            <Col className='p-3' lg={24}>
                                <div id="payment_paypal" className="bg-white p-10 rounded">
                                    <PayPalScriptProvider options={{ "client-id": "test" }}>
                                        <PayPalButtons
                                            createOrder={(data, actions) => {
                                                return actions.order.create({
                                                    purchase_units: [
                                                        {
                                                            amount: {
                                                                value: "1.99",
                                                            },
                                                        },
                                                    ],
                                                });
                                            }}
                                            onApprove={(data, actions) => {
                                                return actions.order.capture().then((details) => {
                                                    const name = details.payer.name.given_name;
                                                    alert(`Transaction completed by ${name}`);
                                                });
                                            }}
                                        />
                                    </PayPalScriptProvider>
                                </div>
                            </Col>
                            <Col className='p-3' lg={24}>
                                <div className="bg-white p-10 rounded">
                                    <div className="flex text-base">
                                        <div className="flex mr-3">
                                            <div className="mr-1" style={{ marginTop: "-2px" }}>
                                                <StarFilled style={{ color: "#fdc75f" }} />
                                            </div>
                                            <div>5.0</div>
                                        </div>
                                        <div>2 reviews</div>
                                    </div>
                                    <Divider />
                                    <div>
                                        <div className="flex text-base">
                                            <img
                                                className="rounded-full"
                                                style={{ width: "30px", height: "30px" }}
                                                src={`${process.env.REACT_APP_SERVER_URL}/` + tutor.image}
                                            />
                                            <div className="font-bold pl-3 pt">Amalia</div>
                                        </div>
                                        <div className="py-3">
                                            Looking forward to taking more lessons. I was surprised on how well she is able to patiently follow through the lessons with me. I struggle with feeling like I'm not doing things correctly , but she was so encouraging especially when I got things right yet didn't feel like I was
                                        </div>
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Pay