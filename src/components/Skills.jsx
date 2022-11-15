import React from 'react';
import { FaHtml5, FaCss3 } from 'react-icons/fa';
import { TbBrandJavascript } from 'react-icons/tb';
import { SiTailwindcss, SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPhp, SiBootstrap, SiMysql } from 'react-icons/si';
import { DiGit } from 'react-icons/di';

const Skills = () => {
	return (
		<section
			name='skills'
			className='w-full h-screen mb-[500px]'
		>
			{/* Container */}
			<div className=' max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full text-gray-500'>
				<div className=''>
					<p className='text-center text-4xl font-bold text-gray-800'>Skills</p>
					<p className='text-center pb-5'>These are the technologies I've worked with.</p>
				</div>

				<div className='w-full h-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5 xl:grid-cols-6 gap-4 text-center py-8'>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<FaHtml5
							size={80}
							className='text-red-600'
						/>
						<p className='font-medium'>HTML 5</p>
					</div>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<FaCss3
							size={80}
							className='text-blue-600'
						/>
						<p className='font-medium'>CSS 3</p>
					</div>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<TbBrandJavascript
							size={80}
							className='text-yellow-400'
						/>
						<p className='font-medium'>Javascript</p>
					</div>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<SiTailwindcss
							size={80}
							className='text-blue-500'
						/>
						<p className='font-medium'>Tailwind CSS</p>
					</div>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<SiBootstrap
							size={80}
							className='text-blue-500'
						/>
						<p className='font-medium'>Bootstrap 5</p>
					</div>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<SiMongodb
							size={80}
							className='text-green-500'
						/>
						<p className='font-medium'>MongoDB</p>
					</div>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<SiExpress
							size={80}
							className='text-green-500'
						/>
						<p className='font-medium'>Express Js</p>
					</div>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<SiReact
							size={80}
							className='text-blue-500'
						/>
						<p className='font-medium'>React Js</p>
					</div>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<SiNodedotjs
							size={80}
							className='text-green-500'
						/>
						<p className='font-medium'>Node Js</p>
					</div>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<SiPhp
							size={80}
							className='text-violet-500'
						/>
						<p className='font-medium'>PHP</p>
					</div>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<DiGit
							size={80}
							className='text-orange-600'
						/>
						<p className='font-medium'>Git</p>
					</div>
					<div className='flex flex-col justify-center items-center border p-4 shadow-md hover:scale-105 duration-300 dark:shadow-gray-500 dark:shadow-md'>
						<SiMysql
							size={80}
							className='text-blue-500'
						/>
						<p className='font-medium'>MySQL</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Skills;
