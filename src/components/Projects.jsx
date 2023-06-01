import bluedot from '../assets/blueDOT.png';
import management from '../assets/management.png';
import merngoal from '../assets/merngoal.png';

const Projects = () => {
	return (
		<section
			name='projects'
			className='w-full h-screen flex flex-col justify-center items-center text-gray-500'>
			<div className='max-w-[1080px] p-4 mx-auto'>
				<p className='text-center text-4xl font-bold text-gray-800'>Projects</p>
				<p className='text-center pb-5'>Check out some of my recent projects.</p>

				<div className='grid md:grid-cols-3 gap-8'>
					<div className='inline-block border shadow-lg rounded-md overflow-hidden dark:shadow-gray-500 dark:shadow-md'>
						<img
							className='w-full h-[200px] object-cover'
							src={bluedot}
							alt=''
						/>
						<a href='https://github.com/mikhail-jeff/BlueDOT'>
							<p className='font-extrabold text-xl text-center pt-2 text-gray-800'>BLueDOT Project</p>
						</a>
						<p className='font-bold text-center'>(HTML, CSS, JS, Bootstrap)</p>
						<p className='font-medium  px-3 py-2 text-justify'>I have created a responsive static informational website with a focus on raising awareness about the crisis our planet is facing. This marks my first website creation.</p>
					</div>

					<div className='inline-block border shadow-lg rounded-md overflow-hidden dark:shadow-gray-500 dark:shadow-md'>
						<img
							className='w-full h-[200px] object-cover'
							src={management}
							alt=''
						/>
						<a href='https://github.com/mikhail-jeff/managementSystem'>
							<p className='font-extrabold text-xl text-center pt-2  text-gray-800'>Management System</p>
						</a>
						<p className='font-bold text-center'>(HTML, PHP, Bootstrap, MySQL)</p>
						<p className='font-medium  px-3 py-2 text-justify'>The management system offers essential functionalities including CRUD operations, search capability, as well as login and logout features.</p>
					</div>

					<div className='inline-block border shadow-lg rounded-md overflow-hidden dark:shadow-gray-500 dark:shadow-md'>
						<img
							className='w-full h-[200px] object-cover'
							src={merngoal}
							alt=''
						/>
						<a href='https://github.com/mikhail-jeff/mern-goal-app'>
							<p className='font-extrabold text-xl text-center pt-2 text-gray-800'>Goals App</p>
						</a>
						<p className='font-bold text-center'>(MERN Stack, Bootstrap)</p>
						<p className='font-medium  px-3 py-2 text-justify'>A simple web app that allows you to set your goals. Helps me build a good foundation in API, CRUD operation, and understanding backend & frontend technologies.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
