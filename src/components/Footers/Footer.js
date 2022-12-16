import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
	return (
		<>
			<footer className="relative pt-8 pb-6" style={{ marginTop: "200px", background: "#ebebeb" }}>
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap text-center">
						<ul className="flex flex-col lg:flex-row list-none flex-1">
							<li className="flex items-center px-5 py-4 font-bold flex-1">
								<Link className="flex-1" to="/general/home">Home</Link>
							</li>
							<li className="flex items-center px-5 py-4 font-bold flex-1">
								<Link className="flex-1" to="/general/dashboard">Find Tutors</Link>
							</li>
							<li className="flex items-center px-5 py-4 font-bold flex-1">
								<Link className="flex-1" to="/general/myschedule">Lectures</Link>
							</li>
							<li className="flex items-center px-5 py-4 font-bold flex-1">
								<Link className="flex-1" to="/general/myschedule">Report</Link>
							</li>
							<li className="flex items-center px-5 py-4 font-bold flex-1">
								<Link className="flex-1" to="/general/myschedule">FAQ</Link>
							</li>
						</ul>
					</div>
					<hr className="my-6 border-blueGray-300" />
					<div className="flex flex-wrap items-center md:justify-between justify-center">
						<div className="w-full md:w-4/12 px-4 mx-auto text-center">
							<div className="text-sm text-blueGray-500 font-semibold py-1">
								Copyright © {new Date().getFullYear()} Tutor.com{" "}
								<a
									href="https://www.creative-tim.com?ref=nr-footer"
									className="text-blueGray-500 hover:text-blueGray-800"
								>
									All rights reserved.
								</a>
								.
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
