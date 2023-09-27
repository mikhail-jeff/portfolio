import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
	return (
		<section
			name='hero'
			className='w-full h-screen'>
			{/* Container */}
			<div className='max-w-[1080px] mx-auto px-12 flex flex-col justify-center h-full'>
				<h2 className='text-2xl sm:text-3xl text-gray-500 font-medium'>Hello, my name is</h2>
				<h1 className='text-4xl sm:text-6xl font-bold text-gray-800 tracking-wide my-2'>Jeff Mikhail</h1>

				<h2 className='text-3xl sm:text-3xl text-gray-500 font-medium'>
					<TypeAnimation
						sequence={[
							'Full Stack Web Developer', // Types
							1000, // Waits 1s
							'Software Developer', // Deletes 'One' and types 'Two'
							2000, // Waits 2s
						]}
						wrapper='span'
						cursor={true}
						repeat={Infinity}
						y
					/>
				</h2>

				<div className=''>
					<Link
						to='projects'
						smooth={true}
						duration={500}
						className='max-w-[180px] mt-2 group px-6 py-3 my-1 border-1 rounded-md flex justify-center items-center bg-gray-500 border-gray-800 hover:text-white font-extrabold hover:cursor-pointer'>
						View Projects
						<span className='group-hover:rotate-90 duration-300'>
							<HiArrowNarrowRight className='ml-3' />
						</span>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Hero;
