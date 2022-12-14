import React from "react"
import { Row, Col, Table } from "antd"
import { Link } from "react-router-dom";

const Report = () => {
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tutor Name',
            dataIndex: 'tutorname',
            key: 'tutorname',
        },
        {
            title: 'Start Date',
            dataIndex: 'startdate',
            key: 'startdate',
        },
        {
            title: 'Members',
            key: 'members',
            dataIndex: 'members',
        },
        {
            title: '',
            key: 'action',
            render: (_, record) => (
                <Link to="/general/report/detail/2">detail</Link>
            ),
        },
    ];
    const data = [
        {
            key: '1',
            name: 'English',
            tutorname: 'Bryce Cox',
            startdate: 'New York No. 1 Lake Park',
            members: '10 / 30',
        },
    ];
    return (
        <>
            <div className="container mx-auto">
                <Row>
                    <Col lg={12} md={24} className="px-4 flex items-center">
                        <div>
                            <p className="text-4xl font-bold pr-10">Every kid have his own assessment monthly report</p>
                            <p className="discription leading-normal">For class rooms which are of 1 to 20 students, Each kid shall have his own assessment monthly report that appears in their account page filled by their tutors, such report must show a unified form of assessment that contains students’ marks he achieved within the month in classrooms’ exams and quizzes, submitted homework on time, delayed homework, marks for his homework, performance, contribution level during classrooms and eventually recommendation by his tutor.</p>
                        </div>
                    </Col>
                    <Col lg={12} md={24} className="px-4 text-right py-4 ">
                        <div className="flex p-5 mb-3 text-white w-80 float-right rounded-2xl px-5" style={{ background: "#1180f1", flex: "1 1 0%" }}>
                            <div className="text-left">
                                <p className="text-white font-bold">Lectures</p>
                                <div className="font-bold" style={{ color: "rgb(255 255 255 / 68%)" }}>The numbers of all lectures</div>
                            </div>
                            <div style={{ flex: "1 1 0%" }} className="text-right text-white py-4 font-bold">2</div>
                        </div>
                        <div className="flex p-5  mb-3 text-white w-80 float-right rounded-2xl px-5 border-2" style={{ flex: "1 1 0%" }}>
                            <div className="text-left">
                                <p className="font-bold">Reports</p>
                                <div className="font-bold" style={{ color: "grey" }}>The reports received from tutors</div>
                            </div>
                            <div style={{ flex: "1 1 0%" }} className="text-black text-right py-4 font-bold">2</div>
                        </div>
                        <div className="flex p-5  mb-3 w-80 float-right rounded-2xl px-5" style={{ background: "rgb(229 229 229)", flex: "1 1 0%" }}>
                            <div className="text-left">
                                <p className=" font-bold">New Reports</p>
                                <div className="font-bold" style={{ color: "grey" }}>New reports you never read</div>
                            </div>
                            <div style={{ flex: "1 1 0%" }} className="text-black text-right py-4 font-bold">2</div>
                        </div>
                    </Col>
                </Row>
                <Table className="px-4 mt-20" columns={columns} dataSource={data} />
            </div>
        </>
    )
}

export default Report