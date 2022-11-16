import bluedot from '../assets/blueDOT.png';
import management from '../assets/management.png';
import merngoal from '../assets/merngoal.png';

const Projects = () => {
	return (
		<section
			name='projects'
			className='w-full h-screen flex flex-col justify-center items-center text-gray-500'
		>
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
							<p className='font-bold text-xl text-center pt-2 text-gray-800'>BLueDOT Project</p>
						</a>
						<p className='font-medium text-center'>(HTML, CSS, JS, Bootstrap)</p>
						<p className='font-medium  px-3 py-2 text-justify'>A responsive static info website focused on raising awareness about our planet's crisis. This is the first website I've created.</p>
					</div>

					<div className='inline-block border shadow-lg rounded-md overflow-hidden dark:shadow-gray-500 dark:shadow-md'>
						<img
							className='w-full h-[200px] object-cover'
							src={management}
							alt=''
						/>
						<a href='https://github.com/mikhail-jeff/managementSystem'>
							<p className='font-bold text-xl text-center pt-2  text-gray-800'>Management System</p>
						</a>
						<p className='font-medium text-center'>(HTML, PHP, Bootstrap, MySQL)</p>
						<p className='font-medium  px-3 py-2 text-justify'>A simple management system with CRUD operation, search, login & logout functionalities.</p>
					</div>

					<div className='inline-block border shadow-lg rounded-md overflow-hidden dark:shadow-gray-500 dark:shadow-md'>
						<img
							className='w-full h-[200px] object-cover'
							src={merngoal}
							alt=''
						/>
						<a href='https://github.com/mikhail-jeff/mern-goal-app'>
							<p className='font-bold text-xl text-center pt-2 text-gray-800'>Goals App</p>
						</a>
						<p className='font-medium text-center'>(MERN Stack, Bootstrap)</p>
						<p className='font-medium  px-3 py-2 text-justify'>A simple web app that allows you to set your goals. This web app helps me build a good foundation on API, CRUD operation and how backend & frontend technology works.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
