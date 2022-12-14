/*eslint-disable*/
import React, { useState } from "react";
import { Row, Col } from "antd";
import Tutors from "./tutors.js"
import './style.css'

export default function Index() {

	return (
		<>
			<div className="container mx-auto">
				<Row>
					<Col lg={12} md={24} className="px-4 text-center py-4">
						<img
							className="w-full rounded-lg max-w-xl"
							src={require("assets/img/malte-helmhold-mQmuv-3jAOc-unsplash.webp").default}
							alt="..."
						/>
					</Col>
					<Col lg={12} md={24} className="px-4 flex items-center">
						<div>
							<p className="text-4xl font-bold pr-10">Find Tutors and Start your Lecture</p>
							<p className="discription">To start your lecture, find tutors who is suitable f or you</p>
						</div>
					</Col>
				</Row>

				<Tutors />
			</div>
		</>
	);
}
