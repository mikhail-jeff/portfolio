const About = () => {
	return (
		<section
			name='about'
			className='mb-[170px] w-full h-screen flex flex-col justify-center items-center text-gray-500'>
			<div className='max-w-[1080px] mx-auto p-4'>
				<p className='text-4xl font-bold text-center mb-4 text-gray-800'>About</p>
				<p className='max-w-[800px] text-justify'>
					I am an ambitious full stack web developer and software developer with a versatile skill set, continuously seeking opportunities for growth and improvement. As a collaborative team player, I thrive in diverse working environments and possess the ability to work independently with minimal
					supervision.
				</p>
				<div className='m-12'>
					<p className=' py-1 mb-3 text-2xl font-bold text-center text-gray-800'>Educational Background</p>
					<div className='flex justify-between items-center max-w-[600px] mx-auto'>
						<p className='flex flex-col'>
							<span className='font-bold'>Bachelor of Science in Information Technology</span>
							<span className='font-medium'>- STI College Sta. Mesa -</span>
						</p>
						<p>
							<span className='font-medium'>2021</span>
						</p>
					</div>
					<div className='flex justify-between items-center max-w-[600px] mx-auto mt-3'>
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
