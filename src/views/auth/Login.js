import React, { useState } from "react";
import axios from "axios"
import { Link } from "react-router-dom";
import { Error, Success } from "../../components/Alert"

export default function Login() {
	const [user, setUser] = useState([]);
	const [status, setStatus] = useState({ "type": "", "text": "" })

	const handleChange = (e) => {
		var param = user;
		param[e.target.name] = e.target.value;
		setUser(param);
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		axios.post(`${process.env.REACT_APP_SERVER_URL}/signin`,
			{ email: user.email, password: user.password, name: user.name })
			.then(res => {
				setStatus({ "type": "success", "text": "Login Success!" })
				localStorage.setItem('token', res.data.token);
				window.location = "/";
			})
			.catch((err) => {
				setStatus({ "type": "error", "text": "Email or Password is incorrect.."})
			});
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
		console.log(status)
	}

	return (
		<>
			<div className="container mx-auto px-4 h-full">
				<div className="flex content-center items-center justify-center h-full">
					<div className="w-full lg:w-4/12 px-4">
						<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
							<div className="rounded-t mb-0 px-6 py-6">
								<div className="text-center mb-3">
									<h6 className="text-blueGray-500 text-sm font-bold">
										Sign in
									</h6>
								</div>
							</div>
							<div className="flex-auto px-4 lg:px-10 py-10 pt-0">
								{AlertShow()}
								<form onSubmit={handleSubmit}>
									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Email
										</label>
										<input
											name="email"
											type="email"
											onChange={handleChange}
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Email"
										/>
									</div>

									<div className="relative w-full mb-3">
										<label
											className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
											htmlFor="grid-password"
										>
											Password
										</label>
										<input
											name="password"
											onChange={handleChange}
											type="password"
											className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
											placeholder="Password"
										/>
									</div>
									<div>
										<label className="inline-flex items-center cursor-pointer">
											<input
												id="customCheckLogin"
												type="checkbox"
												className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
											/>
											<span className="ml-2 text-sm font-semibold text-blueGray-600">
												Remember me
											</span>
										</label>
									</div>

									<div className="text-center mt-6">
										<button
											className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
											type="submit"
										>
											Sign In
										</button>
									</div>
								</form>
							</div>
						</div>
						<div className="flex flex-wrap mt-6 relative">
							<div className="w-1/2">
								<a
									href="#pablo"
									onClick={(e) => e.preventDefault()}
									className="text-blueGray-200"
								>
									<small>Forgot password?</small>
								</a>
							</div>
							<div className="w-1/2 text-right">
								<Link to="/auth/register" className="text-blueGray-200">
									<small>Create new account</small>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
