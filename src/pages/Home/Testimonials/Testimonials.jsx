/* eslint-disable */
import React from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonials = ({ testimonials }) => {
	return (
		<section className="section mx-auto" id="gallery">
			{/* heading */}
			<h1
				className="sm:text-4xl text-4xl lg:text-5xl text-center font-bold mr-2 text-blueish"
				data-aos="zoom-in"
			>
				Our Students Voice
			</h1>
            <p className="my-5 w-[98%] lg:w-[50%] mx-auto text-center leading-7 text-lg text-slate-800 mb-10 md:mb-16">
				Students are specifically crafted to provide interactive and
				hands-on experiences that promote learning in various areas such
				as cognitive skills.
			</p>
			<Swiper
				
				spaceBetween={30}
				slidesPerView={1}
				grabCursor
				autoplay={{
					disableOnInteraction: false,
					delay: 6000,
				}}
				pagination={{
					el: ".pagination",
					clickable: true,
				}}
				breakpoints={{
					0: {
						slidesPerView: 1,
					},
					768: {
						slidesPerView: 2,
					},
					1200: {
						slidesPerView: 3,
					},
				}}
			>
				{/* slides of all comments by customer */}
				{testimonials.map((item) => (
					<SwiperSlide>
						<div
							className="w-full text-center space-y-6"
							data-aos="zoom-out-up"
						>
							<img
								src={item.cover}
								alt="img"
								className="w-20 aspect-square object-cover object-center rounded-full mx-auto"
							/>
							<p style={{marginBottom: '-20px'}} className="text-[18px] font-bold px-2">{item.title}</p>
							<p className="text-lg px-2">{item.desc}</p>
							<h2 className="text-lg font-bold">
								{item.clientName}
							</h2>
							<span className="text-xs font-semibold">
								{item.address}
							</span>
						</div>
					</SwiperSlide>
				))}

				{/* pagination controller */}
				<div className="pagination !w-fit mx-auto pt-5" />
			</Swiper>
		</section>
	);
};

export default Testimonials;
