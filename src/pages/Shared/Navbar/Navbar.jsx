import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import logo from "../../../assets/logo.png";
import useTheme from "../../../hooks/useTheme";

const Navbar = () => {
	const { theme } = useTheme();
	const { user, logoutUser } = useContext(AuthContext);
	const [showDropdown, setShowDropdown] = useState(false);

	const logoutHandler = async () => {
		const result = await logoutUser();
		if (result.success) {
			setShowDropdown(false);
		}
	};

	const toggleDropdown = () => {
		setShowDropdown((prevState) => !prevState);
	};

	return (
		<div className="bg-[#a1d7d0bc] py-4">
			<div className="container mx-auto px-4 sm:px-8 lg:px-16 flex items-center justify-between">
				{/* Logo */}
				<Link to="/" className="flex items-center">
					<img src={logo} className="w-12" alt="" />
					<h2
						className={`mt-2 text-2xl font-bold ${
							theme === "dark"
								? "text-white"
								: "bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text"
						}`}
					>
						<span className="text-purple font-extrabold">
							Skill
						</span>
						<span className="text-blueish font-extrabold">
							Spark
						</span>
					</h2>
				</Link>

				{/* Large Device Menu */}
				<div className="hidden md:flex flex-grow space-x-12 justify-center text-white">
					<Link
						to="/"
						className="nav-link text-black font-bold text-[18px]"
					>
						Home
					</Link>
					<Link
						to="/colleges"
						className="nav-link text-black font-bold text-[18px]"
					>
						Colleges
					</Link>
					<Link
						to="/admission"
						className="nav-link text-black font-bold text-[18px]"
					>
						Admission
					</Link>
				</div>

				{/* Large Device Login Button */}
				<div className="hidden md:flex items-center space-x-4 text-black">
					{user ? (
						<div className="relative">
							<button
								onClick={() =>
									setShowDropdown((prevState) => !prevState)
								}
								className="flex items-center text-black font-bold"
							>
								<span className="mr-2 font-semibold">
									{user.displayName}
								</span>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-5 w-5"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M14.293 7.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L10 10.586l4.293-4.293z"
										clipRule="evenodd"
									/>
								</svg>
							</button>
							{showDropdown && (
								<div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
									<div
										className="py-1"
										role="menu"
										aria-orientation="vertical"
										aria-labelledby="user-menu"
									>
										<Link
											to="/profile"
											className="block font-bold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											role="menuitem"
										>
											Profile
										</Link>
										<button
											onClick={logoutHandler}
											className="block w-full font-bold text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
											role="menuitem"
										>
											Logout
										</button>
									</div>
								</div>
							)}
						</div>
					) : (
						<Link to="/login" className="nav-link">
							<button className="btn-gradient py-3 rounded-lg mt-4">
								Login
							</button>
						</Link>
					)}
				</div>

				{/* Mobile Hamburger Menu */}
				<div className="md:hidden">
					<button className="text-white" onClick={toggleDropdown}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div>

				{/* Mobile Dropdown Menu */}
				<div
					className={`md:hidden absolute z-10 top-0 left-0 w-full bg-white ${
						showDropdown
							? "h-auto opacity-100 mt-4 p-4"
							: "h-0 opacity-0"
					} transition-all duration-300`}
				>
					<div className="flex flex-col items-start">
						<Link
							to="/"
							className="nav-link mb-3 font-semibold"
							onClick={toggleDropdown}
						>
							Home
						</Link>
						<Link
							to="/colleges"
							className="nav-link mb-3 font-semibold"
							onClick={toggleDropdown}
						>
							Colleges
						</Link>
						
						<Link
							to="/admission"
							className="nav-link mb-3 font-semibold"
							onClick={toggleDropdown}
						>
							Admission
						</Link>
						{user ? (
							<>
								<Link
									to="/profile"
									className="nav-link mb-2"
									onClick={toggleDropdown}
								>
									Profile
								</Link>
								<button
									onClick={logoutHandler}
									className="nav-link"
								>
									Logout
								</button>
							</>
						) : (
							<Link
								to="/login"
								className="nav-link"
								onClick={toggleDropdown}
							>
								<button className="btn-gradient py-3 rounded-lg mt-4">
									Login
								</button>
							</Link>
						)}
					</div>
					{/* Close Button */}
					<button
						className="absolute top-4 right-4 text-black"
						onClick={toggleDropdown}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
