/* eslint-disable */
import React from "react";
import Slider from "react-slick";
import img from "../../assets/testimonial01.png";

const Testimonial = () => {
	const settings = {
		infinite: true,
		dots: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
	};
	return (
		<section className="bg-gray-100 py-10">
			<div className="container mx-auto px-4 lg:w-10/12">
				<div className="flex justify-between items-center">
					<div className="w-1/2">
						<img src={img} alt="" className="w-full" />
					</div>

					<div className="w-1/2">
						<h2 className="text-2xl font-bold mb-4">
							Our Students Voice
						</h2>

						<Slider {...settings}>
							<div>
								<div className="bg-white p-4 rounded-lg shadow-lg">
									<h6 className="font-bold mb-3">
										Excellent course of materials
									</h6>
									<p>
										Lorem ipsum dolor sit amet consectetur
										adipisicing elit. Facilis saepe id
										voluptas molestiae. Aperiam corrupti
										voluptas earum at molestiae neque!
									</p>

									<div className="mt-4">
										<h6 className="font-bold">Jhon Doe</h6>
										<p>California, United State</p>
									</div>
								</div>
							</div>

							
						</Slider>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Testimonial;
