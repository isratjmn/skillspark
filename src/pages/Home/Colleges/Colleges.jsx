/* eslint-disable */
import React, { useEffect, useState } from "react";
// import { courses } from "../../../Data";
import { motion } from "framer-motion";
import CollegeCourse from "../Colleges/CollegeCourse";
import { Link } from "react-router-dom";

const Colleges = () => {
	/* const container = {
		hidden: {
			opacity: 0,
			scale: 0,
		},
		visible: {
			opacity: 1,
			scale: 1,
			transition: {
				delayChildren: 0.3,
				staggerChildren: 0.2,
			},
		},
	}; */

	const [courses, setCourses] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		fetch("https://skillspark-server.vercel.app/courses")
			.then((res) => res.json())
			.then((data) => {
				setCourses(data);
				setLoading(false);
			});
	},[]);

	return (
		<motion.div>
			<div className="section" id="courses">
				<div className="flex flex-col md:flex-row items-center md:justify-between">
					<div className="">
						<h1 className="sm:text-4xl lg:d-done text-4xl lg:text-5xl font-bold mr-2 text-blueish">
							Most Popular Colleges
						</h1>
						<p className="text-[20px] leading-7 max-w-[550px] pt-4 pb-6 me-auto">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Labore tempora illo laborum ex cupiditate
							tenetur.
						</p>
					</div>
					<div className="md:text-center sm:ml-auto">
						<Link to="/colleges" className="nav-link">
							<button className="btn-gradient mb-3 font-bold py-3 m-auto rounded-lg mt-4">
								View Details
							</button>
						</Link>
					</div>
				</div>
				<div className="overflow-x-hidden w-full relative">
					<div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
						{courses.map((course) => {
							return (
								<CollegeCourse key={course.id} {...course} />
							);
						})}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Colleges;
