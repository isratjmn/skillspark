/* eslint-disable */

import React from "react";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";
import { Outlet } from "react-router-dom";
import Routers from "../Routes/Routers";

const MainLayout = () => {
	return (
		<>
			<Navbar />
			<main>
				<Routers/>
			</main>
			<Footer />
		</>
	);
};

export default MainLayout;
