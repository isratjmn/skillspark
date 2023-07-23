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
			<div className="footer container grid grid-cols-4 py-4 gap-6 max-w-[1420px] mx-auto">
				<div className="col-span-1">
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
					<a className="link link-hover mb-3 flex items-center font-bold gap-2">
						<FaFacebookF /> Facebook
					</a>
					<a className="link link-hover mb-3 font-bold flex items-center gap-2">
						<FaInstagram /> Instagram
					</a>
					<a className="link link-hover font-bold mb-3 flex items-center gap-2">
						<FaPinterest /> Pinterest
					</a>
				</div>
				<div className="col-span-1">
					<span
						className="footer-title font-bold opacity-100 text-lg"
						data-aos="zoom-in"
					>
						INFORMATION
					</span>
					<a className="flex mb-3 link link-hover mt-2">
						About Search
					</a>
					<a className="flex mb-3 link link-hover">Privacy Policy</a>
					<a className="flex mb-3 link link-hover">
						Terms & Condition
					</a>
					<a className="flex mb-3 link link-hover">Faq & Help</a>
					<a className="flex mb-3 link link-hover">Refund & Return</a>
				</div>
				<div className="col-span-1">
					<span
						className="footer-title opacity-100 text-lg font-bold"
						data-aos="zoom-in"
					>
						SUPPORT
					</span>
					<a className="flex link link-hover mb-3 mt-2">
						Chat Support
					</a>
					<a className="flex link link-hover mb-3">
						Terms of Support
					</a>
					<a className="flex link link-hover mb-3">Press Release</a>
					<a className="flex link link-hover mb-3">Star Support</a>
				</div>
				<div className="col-span-1">
					<span
						className="footer-title opacity-100 text-lg font-bold"
						data-aos="zoom-in"
					>
						CONTACT US
					</span>
					<p className="flex items-center mb-2 gap-2 mt-2">
						<FaHome className="text-3xl" /> 5678 Bangla Main Road,
						cities 580, GBnagla, example 54786
					</p>
					<p className="flex items-center mb-2 gap-2">
						<FaPhoneAlt className="text-xl" /> +444 555 666 777
					</p>
					<p className="flex items-center mb-2 gap-2">
						<BiTime className="text-2xl" /> 9.00AM - 6.00PM
					</p>
					<a className="link link-hover flex mb-2 items-center gap-2">
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
