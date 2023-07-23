const ImageGallery = () => {
	return (
		<section className="section mx-auto" id="gallery">
			<h2 className="sm:text-4xl text-4xl lg:text-5xl text-center font-bold mr-2 text-blueish">
				{" "}
				Graduate Students Gallery{" "}
			</h2>

			<p className="my-5 w-[98%] lg:w-[50%] mx-auto text-center leading-7 text-lg text-slate-800 mb-10 md:mb-16">
				Students are specifically crafted to provide interactive and
				hands-on experiences that promote learning in various areas such
				as cognitive skills.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-2 me-2 md:me-0 md:gap-4 sm:gap-y-3">
				<div className="grid lg:gap-y-5 gap-y-3">
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/xf6wzkY/gallery1.jpg"
							alt="img"
						/>
					</div>
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="lg:h-[240px] md:[160px] sm:h-[110px] image1 max-w-full rounded-lg"
							src="https://i.ibb.co/qsvPxFM/gallery3.jpg"
							alt="img"
						/>
					</div>
				</div>
				<div className="grid lg:gap-y-5 gap-y-3">
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-auto max-w-full rounded-lg col-span-2"
							src="https://i.ibb.co/s6pYXtT/gallery2.jpg"
							alt="img"
						/>
					</div>
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/B4mMjjq/gallery4.jpg"
							alt="img"
						/>
					</div>
				</div>
				<div className="grid lg:gap-y-5 gap-y-3">
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/Y3pLFd6/gallery5.jpg"
							alt="img"
						/>
					</div>
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="h-auto max-w-full rounded-lg"
							src="https://i.ibb.co/vqryySb/gallery6.jpg"
							alt="image"
						/>
					</div>
				</div>
				<div className="grid lg:gap-y-5 gap-y-3">
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="max-w-full rounded-lg"
							src="https://i.ibb.co/vqryySb/gallery6.jpg"
							alt="image"
						/>
					</div>
					<div data-aos-duration="2000" data-aos="zoom-in">
						<img
							className="max-w-full rounded-lg"
							src="https://i.ibb.co/HGktwg3/gallery7.jpg"
							alt="image"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ImageGallery;
