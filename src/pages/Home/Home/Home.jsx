/* eslint-disable */
import React, { useEffect, useState } from "react";
import hero from "../../../assets/hero.png";
import Colleges from "../Colleges/Colleges";
import ImageGallery from "../ImageGallery/ImageGallery";
import Testimonials from "../Testimonials/Testimonials";
import Spinner from "../../../components/Spinner";

const Home = () => {
	const [allData, setAllData] = useState({});
	const [loading, setLoading] = useState(true);
	const { testimonials } = allData;

	useEffect(() => {
		const fetchData = async () => {
			try {
			
				// for testimonials section
				const testimonials = await fetch(
					"https://skillspark-server.vercel.app/testimonials"
				).then((res) => res.json());

				setAllData({
					testimonials,
				});
			} catch (error) {
				console.error(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);
	if (loading) return <Spinner />;

	return (
		<>
			<div className="section" id="home">
				<div class="md:flex items-center justify-center">
					<div>
						<div class="font-bold leading-10 text-base text-blueish mb-4 sm:text-lg lg:text-xl">
							Your E-learning Partner
						</div>

						<div class="text-3xl leading-10 mb-4 sm:text-2xl lg:text-5xl font-bold text-purple">
							<span class="sm:text-3xl lg:d-done text-4xl lg:text-5xl font-bold text-purple mr-2">
								SkillSpark:
							</span>
							<br class="hidden sm:inline" />
							<span class="block lg:hidden sm:text-2xl lg:leading-12 text-3xl lg:text-5xl font-bold text-blueish">
								Reserve College <br class="hidden sm:inline" />
								Facilities Hassle-Free
							</span>
							<p class="sm:text-3xl hidden lg:block mb-4 lg:leading-12 text-4xl lg:text-5xl font-bold text-blueish">
								Reserve College <br />
							</p>
							<p class="sm:text-3xl hidden lg:block text-4xl lg:text-5xl font-bold text-blueish">
								Facilities Hassle-Free
							</p>
						</div>

						<p class="text-lg sm:text-xl lg:text-2xl leading-7 text-gray max-w-lg">
							Implement a user-friendly interface that enables
							users to search for available services and
							facilities and make reservations based on their
							preferences.
						</p>
						<div class="mt-6">
							<button class="px-6 py-3 font-bold text-white bg-blueish rounded-lg mr-4">
								Get Started
							</button>
							<button class="px-6 py-3 font-bold bg-purple border border-solid border-gray rounded-lg text-white">
								Discover
							</button>
						</div>
					</div>
					<div class="md:w-[60%]">
						<img src={hero} alt="img" />
					</div>
				</div>
			</div>
			<div>
				<Colleges />
				<ImageGallery />
				<Testimonials testimonials={testimonials} />
			</div>
		</>
	);
};

export default Home;
