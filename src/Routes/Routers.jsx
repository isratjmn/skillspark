/* eslint-disable */
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home/Home";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";

const Routers = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="signup" element={<SignUp />} />
				<Route path="login" element={<Login />} />
				<Route path="colleges" element={<Colleges />} />
				<Route path="admission" element={<Admission />} />
			</Routes>
		</>
	);
};

export default Routers;
