const About = () => {
	return (
		<section
			name="about"
			className="mb-[170px] w-full h-screen flex flex-col justify-center items-center text-gray-500">
			<div className="max-w-[1080px] h-auto mx-auto p-4">
				<p className="text-4xl font-bold text-center mb-4 text-gray-800">About</p>
				<p className="max-w-[800px] text-justify">
					A passionate and results-driven full stack web developer, I bring to the table a dynamic and promising skill set. Dedicated to continuous learning and improvement. My key strengths include adaptability and the ability to thrive in various work environments, allowing me to adjust to the
					unique demands of each projects. I am equally adept at working independently with minimal supervision..
				</p>
				<div className="m-12">
					<p className=" py-1 mb-3 text-2xl font-bold text-center text-gray-800">Educational Background</p>
					<div className="flex justify-between items-center max-w-[600px] mx-auto">
						<p className="flex flex-col">
							<span className="font-bold">Bachelor of Science in Information Technology</span>
							<span className="font-medium">- STI College Sta. Mesa -</span>
						</p>
						<p>
							<span className="font-medium">2021</span>
						</p>
					</div>
					<div className="flex justify-between items-center max-w-[600px] mx-auto mt-3">
						<p className="flex flex-col">
							<span className="font-bold">Full Stack Web Development Bootcamp</span>
							<span className="font-medium">- Kodego -</span>
						</p>
						<p>
							<span className="font-medium">2022</span>
						</p>
					</div>
				</div>

				<div className="m-12">
					<p className=" py-1 mb-3 text-2xl font-bold text-center text-gray-800">Professional Experience</p>
					<div className="flex justify-between items-center max-w-[600px] mx-auto">
						<p className="flex flex-col">
							<span className="font-bold">Full Stack Developer</span>
							<span className="font-medium">- Bizbox Inc. -</span>
						</p>
						<p>
							<span className="font-medium">Mar 2023 - Sep 2023</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
