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
				<p className='text-center text-4xl font-bold '>Projects</p>
				<p className='text-center py-4'>Check out some of my recent projects.</p>

				<div className='grid md:grid-cols-3 gap-8'>
					<div className='inline-block border shadow-lg'>
						<img
							className='w-full h-[200px] object-cover'
							src={bluedot}
							alt=''
						/>
						<a href='https://github.com/mikhail-jeff/BlueDOT'>
							<p className='font-bold text-center pt-2'>BLueDOT Project</p>
						</a>
						<p className='font-medium text-center'>(HTML, CSS, JS, Bootstrap, Vercel)</p>
						<p className='font-medium  px-3 py-2 text-justify'>An info website in raising awareness about our planet's crisis we are currently facing. </p>
					</div>

					<div className='inline-block shadow-lg'>
						<img
							className='w-full h-[200px] object-cover'
							src={management}
							alt=''
						/>
						<a href='https://github.com/mikhail-jeff/managementSystem'>
							<p className='font-bold text-center pt-2'>Management System</p>
						</a>
						<p className='font-medium text-center'>(HTML, PHP, Bootstrap, MySQL)</p>
						<p className='font-medium  px-3 py-2 text-justify'>A simple management system with CRUD operation, search, login & logout functionalities.</p>
					</div>

					<div className='inline-block shadow-lg'>
						<img
							className='w-full h-[200px] object-cover'
							src={merngoal}
							alt=''
						/>
						<a href='https://github.com/mikhail-jeff/mern-goal-app'>
							<p className='font-bold text-center pt-2'>MERN Goal App</p>
						</a>
						<p className='font-medium text-center'>(MERN Stack)</p>
						<p className='font-medium  px-3 py-2 text-justify'>A full stack web app using MERN stack.</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Projects;
