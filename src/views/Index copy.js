/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
import { Select, Col, Row, Collapse } from "antd";
import 'antd/dist/reset.css';

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
const { Panel } = Collapse;

export default function Index() {
	const options = [
		{
			value: 'Language essentials',
			label: 'Language essentials',
		},
		{
			value: 'Exam prep',
			label: 'Exam prep',
		},
		{
			value: 'Everyday conversation',
			label: 'Everyday conversation',
		},
		{
			value: 'English for work',
			label: 'English for work',
		},
	];

	const handleChange = (value) => {
		console.log(`selected ${value}`);
	};


	return (
		<>
			<IndexNavbar fixed />
			<section className="header relative pt-16 items-center flex h-screen max-h-860-px">
				<div className="container mx-auto items-center flex flex-wrap">
					<div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
						<div className="pt-32 sm:pt-0">
							<h2 className="font-semibold text-4xl text-blueGray-600">
								Online English tutors & teachers for private lessons
							</h2>
							<p className="mt-4 text-lg leading-relaxed text-blueGray-500">
								Looking for an online English tutor? Preply is the leading online language learning platform worldwide. You can choose from 3360 English teachers with an average rating of 4.9 out of 5 stars given by 100596 customers. Book a lesson with a private English teacher today and start learning. Not entirely happy with your tutor? No worries, Preply offers free tutor replacement till you're 100% satisfied. Looking for a different way to learn a language? Explore online English classes or find other resources to learn English online.
							</p>
							<div className="mt-12">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
									target="_blank"
									className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>
									Get started
								</a>
							</div>
						</div>
					</div>
				</div>

				<img
					className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-4/12 max-h-860px"
					src={require("assets/img/hero_image-a9fccf88d4e1edf9b05c33efaf9b7447.png").default}
					alt="..."
				/>
			</section>

			<div className="container mx-auto items-center flex flex-wrap">
				<div className="w-full" style={{ display: "flex" }}>
					<div className="form-group w-full">
						<label>Topic</label>
						<Select
							className="pr-4 mt-2"
							mode="multiple"
							style={{ width: '100%' }}
							placeholder="Topic"
							onChange={handleChange}
							size="large"
							options={options}
						/>
					</div>
					<div className="form-group" style={{ width: '100%' }}>
						<label>Day</label>
						<Select
							className="pr-4 mt-2"
							mode="multiple"
							style={{ width: '100%' }}
							placeholder="Topic"
							onChange={handleChange}
							size="large"
							options={options}
						/>
					</div>
					<div className="form-group" style={{ width: '100%' }}>
						<label>Time</label>
						<Select
							className="pr-4 mt-2"
							mode="multiple"
							style={{ width: '100%' }}
							placeholder="Topic"
							onChange={handleChange}
							size="large"
							options={options}
						/>
					</div>
					<div className="form-group" style={{ width: '100%' }}>
						<label>Time</label>
						<Select
							className="pr-4 mt-2"
							mode="multiple"
							style={{ width: '100%' }}
							placeholder="Topic"
							onChange={handleChange}
							size="large"
							options={options}
						/>
					</div>
				</div>
			</div>

			<section className="mt-100">
				<div className="container mx-auto items-center">
					<Row>
						<Col className="p-5" lg={8}>
							<div className="border border-slate-600 rounded-lg overflow-hidden">
								<img
									className="max-h-860px w-full"
									src={require("assets/img/Talk+with+a+New+Yorker.jpg").default}
								/>
								<div className="p-6 border-b border-slate-500">
									<p className="text-2xl font-bold">Talk with a New Yorker!</p>
									<div>
										<span className="mr-5 p-1 border-solid border border-slate-600 rounded ">Monday, 11:30 - 12:00</span>
										<span className="mr-5 p-1 border-solid border border-slate-600 rounded ">+8 options</span>
									</div>
									<div className="pt-4" style={{ display: "flex" }}>
										<img className="w-10 rounded-full mr-4" src={require("assets/img/avatar_5jw7o362q2s.jpg").default} />
										<div className="">
											<span className="font-bold">With Norbert W.</span> <br />
											<span className="mt-1">708 classes taught</span>
										</div>
									</div>
								</div>
								<div className="p-6 text-right">
									<span>???8.73 / class</span>
								</div>
							</div>
						</Col>
						<Col className="p-5" lg={8}>
							<div className="border border-slate-600 rounded-lg overflow-hidden">
								<img
									className="max-h-860px w-full"
									src={require("assets/img/Talk+with+a+New+Yorker.jpg").default}
								/>
								<div className="p-6 border-b border-slate-500">
									<p className="text-2xl font-bold">Talk with a New Yorker!</p>
									<div>
										<span className="mr-5 p-1 border-solid border border-slate-600 rounded ">Monday, 11:30 - 12:00</span>
										<span className="mr-5 p-1 border-solid border border-slate-600 rounded ">+8 options</span>
									</div>
									<div className="pt-4" style={{ display: "flex" }}>
										<img className="w-10 rounded-full mr-4" src={require("assets/img/avatar_5jw7o362q2s.jpg").default} />
										<div className="">
											<span className="font-bold">With Norbert W.</span> <br />
											<span className="mt-1">708 classes taught</span>
										</div>
									</div>
								</div>
								<div className="p-6 text-right">
									<span>???8.73 / class</span>
								</div>
							</div>
						</Col>
						<Col className="p-5" lg={8}>
							<div className="border border-slate-600 rounded-lg overflow-hidden">
								<img
									className="max-h-860px w-full"
									src={require("assets/img/Talk+with+a+New+Yorker.jpg").default}
								/>
								<div className="p-6 border-b border-slate-500">
									<p className="text-2xl font-bold">Talk with a New Yorker!</p>
									<div>
										<span className="mr-5 p-1 border-solid border border-slate-600 rounded ">Monday, 11:30 - 12:00</span>
										<span className="mr-5 p-1 border-solid border border-slate-600 rounded ">+8 options</span>
									</div>
									<div className="pt-4" style={{ display: "flex" }}>
										<img className="w-10 rounded-full mr-4" src={require("assets/img/avatar_5jw7o362q2s.jpg").default} />
										<div className="">
											<span className="font-bold">With Norbert W.</span> <br />
											<span className="mt-1">708 classes taught</span>
										</div>
									</div>
								</div>
								<div className="p-6 text-right">
									<span>???8.73 / class</span>
								</div>
							</div>
						</Col>
						<Col className="p-5" lg={8}>
							<div className="border border-slate-600 rounded-lg overflow-hidden">
								<img
									className="max-h-860px w-full"
									src={require("assets/img/Talk+with+a+New+Yorker.jpg").default}
								/>
								<div className="p-6 border-b border-slate-500">
									<p className="text-2xl font-bold">Talk with a New Yorker!</p>
									<div>
										<span className="mr-5 p-1 border-solid border border-slate-600 rounded ">Monday, 11:30 - 12:00</span>
										<span className="mr-5 p-1 border-solid border border-slate-600 rounded ">+8 options</span>
									</div>
									<div className="pt-4" style={{ display: "flex" }}>
										<img className="w-10 rounded-full mr-4" src={require("assets/img/avatar_5jw7o362q2s.jpg").default} />
										<div className="">
											<span className="font-bold">With Norbert W.</span> <br />
											<span className="mt-1">708 classes taught</span>
										</div>
									</div>
								</div>
								<div className="p-6 text-right">
									<span>???8.73 / class</span>
								</div>
							</div>
						</Col>
						<Col className="p-5" lg={8}>
							<div className="border border-slate-600 rounded-lg overflow-hidden">
								<img
									className="max-h-860px w-full"
									src={require("assets/img/Talk+with+a+New+Yorker.jpg").default}
								/>
								<div className="p-6 border-b border-slate-500">
									<p className="text-2xl font-bold">Talk with a New Yorker!</p>
									<div>
										<span className="mr-5 p-1 border-solid border border-slate-600 rounded ">Monday, 11:30 - 12:00</span>
										<span className="mr-5 p-1 border-solid border border-slate-600 rounded ">+8 options</span>
									</div>
									<div className="py-4" style={{ display: "flex" }}>
										<img className="w-10 rounded-full mr-4" src={require("assets/img/avatar_5jw7o362q2s.jpg").default} />
										<div className="">
											<span className="font-bold">With Norbert W.</span> <br />
											<span className="mt-1">708 classes taught</span>
										</div>
									</div>
								</div>
								<div className="p-6 text-right">
									<span>???8.73 / class</span>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</section>

			<section className="mt-100">
				<div className="container mx-auto items-center">
					<div className="text-center font-20 pb-5 pt-10">Frequently asked questions</div>
					<div>
						<Collapse accordion>
							<Panel header="What are Preply group classes?" key="1">
								<p>Preply group classes is a marketplace of online English learning classes for adults. We help learners find and register for great group classes across a variety of topics. We help qualified tutors create, manage and promote their classes. Preply focuses on small group, live, interactive, online classes, delivering excellent learning experiences.</p>
							</Panel>
							<Panel header="What type of courses do you offer?" key="2">
								<p>We offer different types of courses to learn English for beginner, intermediate and advanced level learners (A2-C1). They cover a wide range of topics, including everything from English for work to everyday conversation practice. You can filter by a variety of criteria to help you find the perfect course for you. We are continuously adding more courses to the platform.</p>
							</Panel>
							<Panel header="How do the courses work?" key="3">
								<p>All classes on Preply are live online spoken English classes. All classes include live meetings over video at scheduled times. Each course has its own meeting time and frequency. Every course has a clear class plan that outlines expected objectives and in-class activities.</p>
							</Panel>
						</Collapse>
					</div>
				</div>
			</section>


			<section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
				<div
					className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
					style={{ transform: "translateZ(0)" }}
				>
					<svg
						className="absolute bottom-0 overflow-hidden"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
					>
						<polygon
							className="text-blueGray-100 fill-current"
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div>
				<div className="container mx-auto">
					<div className="flex flex-wrap items-center">
						<div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
							<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
								<img
									alt="..."
									src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
									className="w-full align-middle rounded-t-lg"
								/>
								<blockquote className="relative p-8 mb-4">
									<svg
										preserveAspectRatio="none"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 583 95"
										className="absolute left-0 w-full block h-95-px -top-94-px"
									>
										<polygon
											points="-30,95 583,95 583,65"
											className="text-lightBlue-500 fill-current"
										></polygon>
									</svg>
									<h4 className="text-xl font-bold text-white">
										Great for your awesome project
									</h4>
									<p className="text-md font-light mt-2 text-white">
										Putting together a page has never been easier than matching
										together pre-made components. From landing pages
										presentation to login areas, you can easily customise and
										built your pages.
									</p>
								</blockquote>
							</div>
						</div>

						<div className="w-full md:w-6/12 px-4">
							<div className="flex flex-wrap">
								<div className="w-full md:w-6/12 px-4">
									<div className="relative flex flex-col mt-4">
										<div className="px-4 py-5 flex-auto">
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
												<i className="fas fa-sitemap"></i>
											</div>
											<h6 className="text-xl mb-1 font-semibold">
												CSS Components
											</h6>
											<p className="mb-4 text-blueGray-500">
												Notus React comes with a huge number of Fully Coded CSS
												components.
											</p>
										</div>
									</div>
									<div className="relative flex flex-col min-w-0">
										<div className="px-4 py-5 flex-auto">
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
												<i className="fas fa-drafting-compass"></i>
											</div>
											<h6 className="text-xl mb-1 font-semibold">
												JavaScript Components
											</h6>
											<p className="mb-4 text-blueGray-500">
												We also feature many dynamic components for React,
												NextJS, Vue and Angular.
											</p>
										</div>
									</div>
								</div>
								<div className="w-full md:w-6/12 px-4">
									<div className="relative flex flex-col min-w-0 mt-4">
										<div className="px-4 py-5 flex-auto">
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
												<i className="fas fa-newspaper"></i>
											</div>
											<h6 className="text-xl mb-1 font-semibold">Pages</h6>
											<p className="mb-4 text-blueGray-500">
												This extension also comes with 3 sample pages. They are
												fully coded so you can start working instantly.
											</p>
										</div>
									</div>
									<div className="relative flex flex-col min-w-0">
										<div className="px-4 py-5 flex-auto">
											<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
												<i className="fas fa-file-alt"></i>
											</div>
											<h6 className="text-xl mb-1 font-semibold">
												Documentation
											</h6>
											<p className="mb-4 text-blueGray-500">
												Built by developers for developers. You will love how
												easy is to to work with Notus React.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="container mx-auto overflow-hidden pb-20">
					<div className="flex flex-wrap items-center">
						<div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
							<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
								<i className="fas fa-sitemap text-xl"></i>
							</div>
							<h3 className="text-3xl mb-2 font-semibold leading-normal">
								CSS Components
							</h3>
							<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
								Every element that you need in a product comes built in as a
								component. All components fit perfectly with each other and can
								have different colours.
							</p>
							<div className="block pb-6">
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Buttons
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Inputs
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Labels
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Menus
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Navbars
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Pagination
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Progressbars
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Typography
								</span>
							</div>
							<a
								href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
								target="_blank"
								className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
							>
								View All{" "}
								<i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
							</a>
						</div>

						<div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
							<div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
								<img
									alt="..."
									src={require("assets/img/component-btn.png").default}
									className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
								/>
								<img
									alt="..."
									src={require("assets/img/component-profile-card.png").default}
									className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
								/>
								<img
									alt="..."
									src={require("assets/img/component-info-card.png").default}
									className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
								/>
								<img
									alt="..."
									src={require("assets/img/component-info-2.png").default}
									className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
								/>
								<img
									alt="..."
									src={require("assets/img/component-menu.png").default}
									className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
								/>
								<img
									alt="..."
									src={require("assets/img/component-btn-pink.png").default}
									className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
								/>
							</div>
						</div>
					</div>

					<div className="flex flex-wrap items-center pt-32">
						<div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
							<div className="justify-center flex flex-wrap relative">
								<div className="my-4 w-full lg:w-6/12 px-4">
									<a
										href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
										target="_blank"
									>
										<div className="bg-red-600 shadow-lg rounded-lg text-center p-8">
											<img
												alt="..."
												className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
												src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/svelte.jpg"
											/>
											<p className="text-lg text-white mt-4 font-semibold">
												Svelte
											</p>
										</div>
									</a>
									<a
										href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
										target="_blank"
									>
										<div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
											<img
												alt="..."
												className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
												src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/react.jpg"
											/>
											<p className="text-lg text-white mt-4 font-semibold">
												ReactJS
											</p>
										</div>
									</a>
									<a
										href="https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus?ref=vtw-index"
										target="_blank"
									>
										<div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
											<img
												alt="..."
												className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
												src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/nextjs.jpg"
											/>
											<p className="text-lg text-white mt-4 font-semibold">
												NextJS
											</p>
										</div>
									</a>
								</div>
								<div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
									<a
										href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
										target="_blank"
									>
										<div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
											<img
												alt="..."
												className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
												src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
											/>
											<p className="text-lg text-white mt-4 font-semibold">
												JavaScript
											</p>
										</div>
									</a>
									<a
										href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
										target="_blank"
									>
										<div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
											<img
												alt="..."
												className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
												src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
											/>
											<p className="text-lg text-white mt-4 font-semibold">
												Angular
											</p>
										</div>
									</a>
									<a
										href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
										target="_blank"
									>
										<div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
											<img
												alt="..."
												className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
												src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
											/>
											<p className="text-lg text-white mt-4 font-semibold">
												Vue.js
											</p>
										</div>
									</a>
								</div>
							</div>
						</div>

						<div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
							<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
								<i className="fas fa-drafting-compass text-xl"></i>
							</div>
							<h3 className="text-3xl mb-2 font-semibold leading-normal">
								Javascript Components
							</h3>
							<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
								In order to create a great User Experience some components
								require JavaScript. In this way you can manipulate the elements
								on the page and give more options to your users.
							</p>
							<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
								We created a set of Components that are dynamic and come to help
								you.
							</p>
							<div className="block pb-6">
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Alerts
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Dropdowns
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Menus
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Modals
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Navbars
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Popovers
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Tabs
								</span>
								<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
									Tooltips
								</span>
							</div>
							<a
								href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
								target="_blank"
								className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
							>
								View all{" "}
								<i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
							</a>
						</div>
					</div>
				</div>

				<div className="container mx-auto px-4 pb-32 pt-48">
					<div className="items-center flex flex-wrap">
						<div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
							<div className="md:pr-12">
								<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
									<i className="fas fa-file-alt text-xl"></i>
								</div>
								<h3 className="text-3xl font-semibold">
									Complex Documentation
								</h3>
								<p className="mt-4 text-lg leading-relaxed text-blueGray-500">
									This extension comes a lot of fully coded examples that help
									you get started faster. You can adjust the colors and also the
									programming language. You can change the text and images and
									you're good to go.
								</p>
								<ul className="list-none mt-6">
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
													<i className="fas fa-fingerprint"></i>
												</span>
											</div>
											<div>
												<h4 className="text-blueGray-500">
													Built by Developers for Developers
												</h4>
											</div>
										</div>
									</li>
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
													<i className="fab fa-html5"></i>
												</span>
											</div>
											<div>
												<h4 className="text-blueGray-500">
													Carefully crafted code for Components
												</h4>
											</div>
										</div>
									</li>
									<li className="py-2">
										<div className="flex items-center">
											<div>
												<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
													<i className="far fa-paper-plane"></i>
												</span>
											</div>
											<div>
												<h4 className="text-blueGray-500">
													Dynamic Javascript Components
												</h4>
											</div>
										</div>
									</li>
								</ul>
							</div>
						</div>

						<div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
							<img
								alt="..."
								className="max-w-full rounded-lg shadow-xl"
								style={{
									transform:
										"scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
								}}
								src={require("assets/img/documentation.png").default}
							/>
						</div>
					</div>
				</div>

				<div className="justify-center text-center flex flex-wrap mt-24">
					<div className="w-full md:w-6/12 px-12 md:px-4">
						<h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
						<p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
							Notus React is a completly new product built using our past
							experience in web templates. Take the examples we made for you and
							start playing with them.
						</p>
					</div>
				</div>
			</section>

			<section className="block relative z-1 bg-blueGray-600">
				<div className="container mx-auto">
					<div className="justify-center flex flex-wrap">
						<div className="w-full lg:w-12/12 px-4  -mt-24">
							<div className="flex flex-wrap">
								<div className="w-full lg:w-4/12 px-4">
									<h5 className="text-xl font-semibold pb-4 text-center">
										Login Page
									</h5>
									<Link to="/auth/login">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src={require("assets/img/login.jpg").default}
											/>
										</div>
									</Link>
								</div>

								<div className="w-full lg:w-4/12 px-4">
									<h5 className="text-xl font-semibold pb-4 text-center">
										Profile Page
									</h5>
									<Link to="/profile">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src={require("assets/img/profile.jpg").default}
											/>
										</div>
									</Link>
								</div>

								<div className="w-full lg:w-4/12 px-4">
									<h5 className="text-xl font-semibold pb-4 text-center">
										Landing Page
									</h5>
									<Link to="/landing">
										<div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
											<img
												alt="..."
												className="align-middle border-none max-w-full h-auto rounded-lg"
												src={require("assets/img/landing.jpg").default}
											/>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-20 bg-blueGray-600 overflow-hidden">
				<div className="container mx-auto pb-64">
					<div className="flex flex-wrap justify-center">
						<div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
							<div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
								<i className="fas fa-code-branch text-xl"></i>
							</div>
							<h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
								Open Source
							</h3>
							<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
								Since{" "}
								<a
									href="https://tailwindcss.com/?ref=creativetim"
									className="text-blueGray-300"
									target="_blank"
								>
									Tailwind CSS
								</a>{" "}
								is an open source project we wanted to continue this movement
								too. You can give this version a try to feel the design and also
								test the quality of the code!
							</p>
							<p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
								Get it free on Github and please help us spread the news with a
								Star!
							</p>
							<a
								href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
								target="_blank"
								className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
							>
								Github Star
							</a>
						</div>

						<div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
							<i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
						</div>
					</div>
				</div>
			</section>

			<section className="pb-16 bg-blueGray-200 relative pt-32">
				<div
					className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
					style={{ transform: "translateZ(0)" }}
				>
					<svg
						className="absolute bottom-0 overflow-hidden"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="none"
						version="1.1"
						viewBox="0 0 2560 100"
						x="0"
						y="0"
					>
						<polygon
							className="text-blueGray-200 fill-current"
							points="2560 0 2560 100 0 100"
						></polygon>
					</svg>
				</div>

				<div className="container mx-auto">
					<div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
						<div className="w-full text-center lg:w-8/12">
							<p className="text-4xl text-center">
								<span role="img" aria-label="love">
									????
								</span>
							</p>
							<h3 className="font-semibold text-3xl">
								Do you love this Starter Kit?
							</h3>
							<p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
								Cause if you do, it can be yours now. Hit the buttons below to
								navigate to get the Free version for your next project. Build a
								new web app or give an old project a new look!
							</p>
							<div className="sm:block flex flex-col mt-10">
								<a
									href="https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus?ref=nr-index"
									target="_blank"
									className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
								>
									Get started
								</a>
								<a
									href="https://github.com/creativetimofficial/notus-react?ref=nr-index"
									target="_blank"
									className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
								>
									<i className="fab fa-github text-lg mr-1"></i>
									<span>Help With a Star</span>
								</a>
							</div>
							<div className="text-center mt-16"></div>
						</div>
					</div>
				</div>
			</section>
			<Footer />
		</>
	);
}
