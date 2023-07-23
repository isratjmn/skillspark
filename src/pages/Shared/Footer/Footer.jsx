import { BiTime } from "react-icons/bi";
import {
	FaFacebookF,
	FaHome,
	FaInstagram,
	FaPhoneAlt,
	FaPinterest,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import useTheme from "../../../hooks/useTheme";
import logo from "../../../assets/logo.png";

const Footer = () => {
	const { theme } = useTheme();
	return (
		<footer className="pt-10 bg-[#a1d7d0bc]">
			<div className="footer container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 py-4 gap-6 max-w-[1420px] mx-auto lg:pb-3 sm:pb-6">
				<div className="col-span-1 px-4 sm:px-0">
					{" "}
					{/* Add left padding for mobile */}
					<div className="flex items-center mb-5">
						<img src={logo} className="w-12" alt="" />
						<h2
							className={`mt-2 text-2xl font-bold ${
								theme === "dark"
									? "text-white"
									: "bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
							}`}
						>
							<span className="text-[#9769B1] font-extrabold">
								Skill
							</span>
							<span className="text-[#405398] font-extrabold">
								Spark
							</span>
						</h2>
					</div>
					<a className="link link-hover mb-3 flex items-center font-bold gap-2 text-sm sm:text-base">
						<FaFacebookF /> Facebook
					</a>
					<a className="link link-hover mb-3 font-bold flex items-center gap-2 text-sm sm:text-base">
						<FaInstagram /> Instagram
					</a>
					<a className="link link-hover font-bold mb-3 flex items-center gap-2 text-sm sm:text-base">
						<FaPinterest /> Pinterest
					</a>
				</div>
				<div className="col-span-1 px-4 sm:px-0">
					<span
						className="footer-title font-bold opacity-100 text-lg"
						data-aos="zoom-in"
					>
						INFORMATION
					</span>
					<a className="flex mb-3 link link-hover mt-2 text-sm sm:text-base">
						About Search
					</a>
					<a className="flex mb-3 link link-hover text-sm sm:text-base">
						Privacy Policy
					</a>
					<a className="flex mb-3 link link-hover text-sm sm:text-base">
						Terms & Condition
					</a>
					<a className="flex mb-3 link link-hover text-sm sm:text-base">
						Faq & Help
					</a>
					<a className="flex mb-3 link link-hover text-sm sm:text-base">
						Refund & Return
					</a>
				</div>
				<div className="col-span-1 px-4 sm:px-0">
					<span
						className="footer-title opacity-100 text-lg font-bold"
						data-aos="zoom-in"
					>
						SUPPORT
					</span>
					<a className="flex link link-hover mb-3 mt-2 text-sm sm:text-base">
						Chat Support
					</a>
					<a className="flex link link-hover mb-3 text-sm sm:text-base">
						Terms of Support
					</a>
					<a className="flex link link-hover mb-3 text-sm sm:text-base">
						Press Release
					</a>
					<a className="flex link link-hover mb-3 text-sm sm:text-base">
						Star Support
					</a>
				</div>
				<div className="col-span-1 px-4 sm:px-0">
					<span
						className="footer-title opacity-100 text-lg font-bold"
						data-aos="zoom-in"
					>
						CONTACT US
					</span>
					<p className="flex items-center mb-2 gap-2 mt-2 text-sm sm:text-base">
						<FaHome className="text-3xl" /> 5678 Bangla Main Road,
						cities 580, GBnagla, 54786
					</p>
					<p className="flex items-center mb-2 gap-2 text-sm sm:text-base">
						<FaPhoneAlt className="text-xl" /> +444 555 666 777
					</p>
					<p className="flex items-center mb-2 gap-2 text-sm sm:text-base">
						<BiTime className="text-2xl" /> 9.00AM - 6.00PM
					</p>
					<a className="link link-hover flex mb-2 items-center gap-2 text-sm sm:text-base">
						<HiMail className="text-2xl" /> admin@gmail.com
					</a>
				</div>
			</div>
			<div className="footer footer-center p-4 border-t">
				<div>
					<p>
						Copyright © 2023 - All right reserved by Showkat Ali Sam
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
