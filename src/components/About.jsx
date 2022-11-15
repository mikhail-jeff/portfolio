const About = () => {
	return (
		<section
			name='about'
			className='mb-[170px] w-full h-screen flex flex-col justify-center items-center text-gray-500'
		>
			<div className='max-w-[1080px] mx-auto p-4'>
				<p className='text-4xl font-bold text-center mb-4 text-gray-800'>About</p>
				<p className='max-w-[800px] text-justify'>
					An aspiring full stack web developer | software engineer equipped with a diverse and promising skill set, willing to be trained and improve, a team player who can thrive in any working environment and can work independently with minimal supervision.
				</p>
				<div>
					<p className=' py-2 mt-5 mb-3 text-xl font-bold text-center'>Educational Background</p>
					<div className='flex justify-between items-center max-w-[500px] mx-auto'>
						<p className='flex flex-col'>
							<span className='font-bold'>Bachelor of Science in Information Technology</span>
							<span className='font-medium'>- STI College Sta. Mesa -</span>
						</p>
						<p>
							<span className='font-medium'>2016-2021</span>
						</p>
					</div>
					<div className='flex justify-between items-center max-w-[500px] mx-auto mt-3'>
						<p className='flex flex-col'>
							<span className='font-bold'>Full Stack Web Development Bootcamp</span>
							<span className='font-medium'>- Kodego -</span>
						</p>
						<p>
							<span className='font-medium'>2022</span>
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
