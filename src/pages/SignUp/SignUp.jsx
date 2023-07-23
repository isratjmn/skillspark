/* eslint-disable */
import React, { useContext, useState } from "react";

import { BsGithub } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { HiArrowLongRight } from "react-icons/hi2";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../../components/Spinnner/Spinner";
import { AuthContext } from "../../providers/AuthProvider";

const SignUp = () => {
	const { user, loading, createUser, loginWithGoogle, loginWithGithub } =
		useContext(AuthContext);
	const [error, setError] = useState(null);
	const [fullName, setFullName] = useState("");
	const [photoURL, setPhotoURL] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();
	const { state } = useLocation();

	const handleRegister = async (e) => {
		e.preventDefault();
		setError(null);
		try {
			if (fullName.trim().length < 3)
				throw new Error("Name should be minimum three characters");
			if (photoURL.trim().length === 0)
				throw new Error("Please input photo URL");
			if (
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) ===
				false
			)
				throw new Error("Please input valid email");

			if (
				/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/.test(
					password
				) === false
			)
				throw new Error(
					"Password must contain minimum six characters, at least one letter, one number and one special character"
				);

			const result = await createUser(
				fullName,
				photoURL,
				email,
				password
			);
			if (result.success) {
				toast.success(result.message);
				e.target.reset();
			} else setError(result.message);
		} catch (error) {
			setError(error.message);
		}
	};

	const googleLogin = async () => {
		const result = await loginWithGoogle();
		if (result.success) toast.success(result.message);
		else setError(result.message);
	};

	const githubLogin = async () => {
		const result = await loginWithGithub();
		if (result.success) toast.success(result.message);
		else setError(result.message);
	};

	if (loading) return <Spinner />;
	if (user) {
		return (
			<Navigate
				to={state?.pathname ? state.pathname : "/"}
				replace={true}
			/>
		);
	}
	return (
		<section className="gradient-bg mx-auto px-4 sm:px-8 lg:px-16 pt-28 pb-12">
			<form
				onSubmit={handleRegister}
				className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm shadow-lg border-2 rounded p-8 space-y-6"
			>
				<h1 className="text-3xl mb-8 text-black font-bold">
					Create account!
				</h1>
				<div className="flex items-center gap-x-5">
					<span className="label-text flex items-center gap-x-2">
						Already have an account? Click here <HiArrowLongRight />
					</span>

					<label className="relative inline-flex items-center cursor-pointer">
						<input
							type="checkbox"
							onClick={(e) =>
								!e.target.checked &&
								setTimeout(
									() =>
										navigate("/login", {
											state,
										}),
									500
								)
							}
							className="sr-only peer"
							defaultChecked
						/>
						<div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-blue-500 dark:peer-focus:ring-hummingBirdColor dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-hummingBirdColor"></div>
					</label>
				</div>

				{error && <p className="text-red-700 font-semibold">{error}</p>}

				<input
					type="text"
					placeholder="Full Name"
					className="w-full h-12 mt-4 p-4 bg-white/10 outline-none focus:bg-transparent border-1 border-neutral-300 rounded"
					value={fullName}
					onChange={(e) => setFullName(e.target.value)}
					
				/>
				<input
					type="text"
					placeholder="Photo URL"
					className="w-full h-12 mt-4 p-4 bg-white/10 outline-none focus:bg-transparent border-1 border-neutral-300 rounded"
					value={photoURL}
					onChange={(e) => setPhotoURL(e.target.value)}
					
				/>
				<input
					type="email"
					placeholder="Email"
					className="w-full h-12 mt-4 p-4 bg-white/10 outline-none focus:bg-transparent border-1 border-neutral-300 rounded"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					
				/>
				<input
					type="password"
					placeholder="********"
					className="w-full h-12 mt-4 p-4 bg-white/10 outline-none focus:bg-transparent border-1 border-neutral-300 rounded"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					
				/>

				<button
					type="submit"
					className="w-full h-12 btn btn-gradient text-white border-2 rounded-lg"
				>
					Signup
				</button>

				<div className="max-w-sm font-bold mx-auto my-6 text-center flex items-center gap-5">
					<hr
						className="flex-grow border-gray-300 border-t-4"
						style={{ height: "1px" }}
					/>
					<div>OR</div>
					<hr
						className="flex-grow border-gray-300 border-t-4"
						style={{ height: "1px" }}
					/>
				</div>
				<div className="flex items-center justify-center gap-3">
					<h3 className="gradient-text font-semibold text-lg">
						Continue with
					</h3>
					<button
						disabled={loading}
						onClick={googleLogin}
						type="button"
						className="btn btn-circle bg-hummingBirdColor hover:bg-neutral/20 text-xl disabled:opacity-0"
						style={{
							width: "55px",
							height: "55px",
							borderRadius: "50%",
						}}
					>
						<FcGoogle className="text-[32px] ml-3" />
					</button>

					<button
						disabled={loading}
						onClick={githubLogin}
						type="button"
						className="btn btn-circle bg-hummingBirdColor hover:bg-neutral/20 text-xl disabled:opacity-0"
						style={{
							width: "55px",
							height: "55px",
							borderRadius: "50%",
						}}
					>
						<BsGithub className="text-[30px] ml-3" />
					</button>
				</div>
			</form>
		</section>
	);
};

export default SignUp;
