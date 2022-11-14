import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useState } from 'react';
import logo from '../assets/logo_transparent.png';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleClick = () => {
		setNav(!nav);
	};

	return (
		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 shadow-md text-gray-900'>
			<div>
				<img
					src={logo}
					alt=''
					style={{ width: '200px' }}
				/>
			</div>

			{/* Menu */}
			<ul className='hidden md:flex'>
				<li className='font-medium uppercase text-gray-600 hover:text-gray-800'>
					<Link
						to='hero'
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className='font-medium uppercase'>
					<Link
						to='about'
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className='font-medium uppercase'>
					<Link
						to='skills'
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className='font-medium uppercase'>
					<Link
						to='projects'
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li className='font-medium uppercase'>
					<Link
						to='contact'
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div
				onClick={handleClick}
				className='md:hidden z-10'
			>
				{!nav ? <FaBars size={25} /> : <FaTimes size={25} />}
			</div>

			{/* Mobile Menu */}
			<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-500 flex flex-col justify-center items-center'}>
				<li className='py-5 text-3xl'>
					{' '}
					<Link
						onClick={handleClick}
						to='hero'
						smooth={true}
						duration={500}
					>
						Home
					</Link>
				</li>
				<li className='py-5 text-3xl'>
					<Link
						onClick={handleClick}
						to='about'
						smooth={true}
						duration={500}
					>
						About
					</Link>
				</li>
				<li className='py-5 text-3xl'>
					<Link
						onClick={handleClick}
						to='skills'
						smooth={true}
						duration={500}
					>
						Skills
					</Link>
				</li>
				<li className='py-5 text-3xl'>
					<Link
						onClick={handleClick}
						to='projects'
						smooth={true}
						duration={500}
					>
						Projects
					</Link>
				</li>
				<li className='py-5 text-3xl'>
					<Link
						onClick={handleClick}
						to='contact'
						smooth={true}
						duration={500}
					>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social Icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[140px] h-[50px] flex justify-between items-center'>
						<a
							className='flex justify-between items-center w-full text-gray-900 ml-[-90px] hover:ml-[-10px] duration-300'
							href='https://www.linkedin.com/in/jeff-mikhail-mangrobang-8878b7254/'
						>
							LinkedIn
							<FaLinkedin
								className='text-blue-600'
								size={25}
							/>
						</a>
					</li>
					<li className='w-[140px] h-[60px] flex justify-between items-center'>
						<a
							className='flex justify-between items-center w-full text-gray-900 ml-[-90px] hover:ml-[-10px] duration-300'
							href='https://github.com/mikhail-jeff'
						>
							GitHub
							<FaGithub
								className='text-gray-700'
								size={25}
							/>
						</a>
					</li>
					<li className='w-[140px] h-[60px] flex justify-between items-center'>
						<a
							className='flex justify-between items-center w-full text-gray-900 ml-[-90px] hover:ml-[-10px] duration-300'
							href='mailto: mikhailcruz78@gmail.com'
						>
							Email
							<HiOutlineMail
								className='text-red-600'
								size={25}
							/>
						</a>
					</li>
					<li className='w-[140px] h-[60px] flex justify-between items-center'>
						<a
							className='flex justify-between items-center w-full text-gray-900 ml-[-90px] hover:ml-[-10px] duration-300'
							href='https://www.google.com/'
						>
							Resume
							<BsFillPersonLinesFill
								className='text-gray-700'
								size={25}
							/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
