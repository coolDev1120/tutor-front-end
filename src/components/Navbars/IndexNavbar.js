/*eslint-disable*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jwt_decode from 'jwt-decode';
import { Button, Dropdown } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import {
	toggle_side_message_box
} from "redux/actions";

const logout = () => {
	localStorage.removeItem('token');
	location.reload();
}

const items = [
	{
		key: '1',
		label: (
			<Link to="/general/setting/">Settings</Link>
		),
	},
	{
		key: '2',
		label: (
			<Link to="/general/become/">Become a Tutor</Link>
		),
	},
	{
		key: '3',
		label: (
			<Link to="/general/editschedule/">Edit schedule</Link>
		),
	},
	{
		key: '4',
		label: (
			<Link to="/general/myschedule">My schedule</Link>
		),
	},
	{
		key: '5',
		label: (
			<a onClick={logout}>Logout</a>
		),
	},
];

export default function Navbar(props) {
	const dispatch = useDispatch();
	const [navbarOpen, setNavbarOpen] = useState(false);
	const [loginState, SetLoginState] = useState(false);
	const [username, Setusername] = useState('');

	const toogleChatbox = () => {
		dispatch(
			toggle_side_message_box()
		);
	}

	useEffect(() => {
		if (localStorage.getItem('token') && jwt_decode(localStorage.getItem('token')).role) {
			SetLoginState(true)
			Setusername(jwt_decode(localStorage.getItem('token')).name);
		}
	}, []);

	return (
		<>
			<nav className="top-0 z-50 w-full flex flex-wrap items-center justify-between px-2 py-5 mb-5 navbar-expand-lg">
				<div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
					<div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
						<Link
							to="/"
							className="text-blueGray-700 text-lg font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
						>
							Tutor
						</Link>
						<button
							className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
							type="button"
							onClick={() => setNavbarOpen(!navbarOpen)}
						>
							<i className="fas fa-bars"></i>
						</button>
					</div>
					<div
						className={
							"lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
							(navbarOpen ? " block" : " hidden")
						}
						id="example-navbar-warning"
					>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="flex items-center px-5 py-4 font-bold">
								<Link to="/general/home">Home</Link>
							</li>
							<li className="flex items-center px-5 py-4 font-bold">
								<Link to="/general/dashboard">Find Tutors</Link>
							</li>
							<li className="flex items-center px-5 py-4 font-bold">
								<Link to="/general/myschedule">Lectures</Link>
							</li>
							<li className="flex items-center px-5 py-4 font-bold">
								<Link to="/general/report">Report</Link>
							</li>
							<li className="flex items-center px-5 py-4 font-bold">
								<Link to="/general/myschedule">FAQ</Link>
							</li>
							<li className="flex items-center px-5 py-4 font-bold">
								<Link onClick={toogleChatbox}>Message</Link>
							</li>
						</ul>
						<ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
							<li className="flex items-center">
								{!loginState &&
									<Link
										to="/auth/login"
										className=""
									>
										<Button type="primary" shape="round">Login</Button>
									</Link>
								}
								{loginState &&
									<Dropdown menu={{ items, }} placement="bottomLeft" >
										<span className="flex font-bold">
											<img className="w-7 rounded-full" src={`${process.env.REACT_APP_SERVER_URL}/` + jwt_decode(localStorage.getItem('token')).image} />
											<span className="pt-1.5 pl-3">{username}</span>
										</span>
									</Dropdown>
								}
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</>
	);
}
