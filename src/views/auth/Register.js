import React, { useState, useMemo } from "react";
import axios from "axios"
import { Error, Success } from "../../components/Alert"
import { Link } from "react-router-dom";
import { Input, Select, Form, Button } from "antd"
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import countryList from 'react-select-country-list'

export default function Register() {
	const [status, setStatus] = useState({ "type": "", "text": "" })
	const [phone, setPhone] = useState("");
	const [country, setCountry] = useState('')

	const handlePhone = (e) => {
		setPhone(e);
	}

	const AlertShow = () => {
		if (status.type === 'error') {
			return (
				<Error text="" content={status.text} />
			)
		}
		if (status.type === 'success') {
			return (
				<Success text="" content={status.text} />
			)
		}
	}


	const onFinish = (values) => {
		axios.post(`${process.env.REACT_APP_SERVER_URL}/signup`,
			{
				phone: values.phone,
				country: values.country,
				email: values.email,
				password: values.password,
				name: values.name,
				gender: values.gender,
				agent: "student"
			})
			.then(res => {
				console.log(res);
				setStatus({ "type": "success", "text": "Sign UP success" })
			})
			.catch((err) => {
				setStatus({ "type": "error", "text": err.response.data.error })
				console.log(err.response.data.error);
			});
	};
	const onFinishFailed = (errorInfo) => {
		console.log('Failed:', errorInfo);
	};

	const options = useMemo(() => countryList().getData(), [])

	const handleCountry = value => {
		setCountry(country)
	}



	return (
		<>
			<div className="container mx-auto px-4 h-full">
				<div className="flex content-center items-center justify-center h-full">
					<div className="w-full lg:w-6/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
							<div className="rounded-t mb-0 px-6 py-6">
								<div className="text-center mb-3">
									<h6 className="text-blueGray-500 text-sm font-bold">
										Sign up AS Student
									</h6>
								</div>
								<hr className="mt-6 border-b-1 border-blueGray-300" />
							</div>
							<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
								{AlertShow()}
								<Form
									name="basic"
									layout="vertical"
									initialValues={{ remember: true, }}
									onFinish={onFinish}
									onFinishFailed={onFinishFailed}
									autoComplete="off"
								>
									<Form.Item
										label="Name"
										name="name"
										rules={[
											{
												required: true,
												message: 'Please input your name!',
											},
										]}
									>
										<Input size="large" placeholder="" />
									</Form.Item>

									<Form.Item
										label="Email"
										name="email"
										rules={[
											{
												type: "email",
												message: 'Invalid email!',
											},
											{
												required: true,
												message: 'Please input your email!',
											},
										]}
									>
										<Input size="large" placeholder="" />
									</Form.Item>

									<Form.Item
										label="Password"
										name="password"
										rules={[
											{
												required: true,
												message: 'Please input your password!',
											},
										]}
									>
										<Input.Password size="large" placeholder="" />
									</Form.Item>

									<Form.Item
										label="Retype Password"
										name="retypepassword"
										rules={[
											{
												required: true,
												message: 'Please input your password!',
											},
										]}
									>
										<Input.Password size="large" placeholder="" />
									</Form.Item>

									<Form.Item
										label="Gender"
										name="gender"
										rules={[
											{
												required: true,
												message: 'Please select your Gender!',
											},
										]}
									>
										<Select
											size="large"
											options={[
												{
													value: 'Male',
													label: 'Male',
												},
												{
													value: 'Female',
													label: 'Female',
												}
											]}
										/>
									</Form.Item>

									<Form.Item
										label="Phone Number"
										name="phone"
										rules={[
											{
												required: true,
												message: 'Please input your phone number!',
											},
										]}
									>
										<PhoneInput
											placeholder="Enter phone number"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow"
											value={phone}
											onChange={handlePhone} />
									</Form.Item>

									<Form.Item
										label="Country"
										name="country"
										rules={[
											{
												required: true,
												message: 'Please input your country!',
											},
										]}
									>
										<Select size="large" options={options} value={country} onChange={handleCountry} />
									</Form.Item>
									<Button
										size="large"
										className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
										type="primary"
										htmlType="submit">
										Submit
									</Button>
								</Form>
							</div>
						</div>
						<div className="flex flex-wrap mt-6 relative">
							<div className="w-1/2"></div>
							<div className="w-1/2 text-right">
								<Link to="/auth/login" className="text-blueGray-200">
									<small>Back to Login</small>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}


