import bluedot from "../assets/blueDOT.png";
import miniproject from "../assets/miniproject.png";
import merngoal from "../assets/merngoal.png";

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
							src={miniproject}
							alt=''
						/>
						<a href='https://kodego-mini-project-2.netlify.app/'>
							<p className='font-extrabold text-xl text-center pt-2  text-gray-800'>Game On</p>
						</a>
						<p className='font-bold text-center'>(React JS, Tailwind CSS, Rapid API)</p>
						<p className='font-medium  px-3 py-2 text-justify'>My bootcamp mini project responsive website where gamers can explore the best games today and latest news.</p>
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
