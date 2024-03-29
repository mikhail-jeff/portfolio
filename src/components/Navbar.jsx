import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { useState } from "react";
import logo from "../assets/logo_transparent.png";
import { Link } from "react-scroll";

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleClick = () => {
		setNav(!nav);
	};

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 shadow-md dark:shadow-gray-500 dark:shadow-md">
			<div>
				<img
					src={logo}
					alt=""
					style={{ width: "200px" }}
				/>
			</div>

			{/* Menu */}
			<ul className="hidden md:flex uppercase">
				<li className="font-medium text-gray-500 hover:font-bold">
					<Link
						to="hero"
						smooth={true}
						duration={500}>
						Home
					</Link>
				</li>
				<li className="font-medium text-gray-500 hover:font-bold">
					<Link
						to="about"
						smooth={true}
						duration={500}>
						About
					</Link>
				</li>
				<li className="font-medium text-gray-500 hover:font-bold">
					<Link
						to="skills"
						smooth={true}
						duration={500}>
						Skills
					</Link>
				</li>
				<li className="font-medium text-gray-500 hover:font-bold">
					<Link
						to="projects"
						smooth={true}
						duration={500}>
						Projects
					</Link>
				</li>
				<li className="font-medium text-gray-500 hover:font-bold">
					<Link
						to="contact"
						smooth={true}
						duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Hamburger */}
			<div
				onClick={handleClick}
				className="md:hidden z-10">
				{!nav ? (
					<FaBars
						className="text-gray-500"
						size={25}
					/>
				) : (
					<FaTimes
						className="text-gray-500"
						size={25}
					/>
				)}
			</div>

			{/* Mobile Menu */}
			<ul className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-gray-100 text-gray-800 flex flex-col justify-center items-center font-medium uppercase"}>
				<li className="py-4 text-2xl">
					<Link
						onClick={handleClick}
						to="hero"
						smooth={true}
						duration={500}>
						Home
					</Link>
				</li>
				<li className="py-4 text-2xl">
					<Link
						onClick={handleClick}
						to="about"
						smooth={true}
						duration={500}>
						About
					</Link>
				</li>
				<li className="py-4 text-2xl">
					<Link
						onClick={handleClick}
						to="skills"
						smooth={true}
						duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-4 text-2xl">
					<Link
						onClick={handleClick}
						to="projects"
						smooth={true}
						duration={500}>
						Projects
					</Link>
				</li>
				<li className="py-4 text-2xl">
					<Link
						onClick={handleClick}
						to="contact"
						smooth={true}
						duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* Social Icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul className="font-medium">
					<li className="w-[140px] h-[50px] flex justify-between items-center">
						<a
							className="flex justify-between items-center w-full text-gray-500 ml-[-90px] hover:ml-[-10px] duration-300"
							target="_blank"
							rel="noreferrer"
							href="https://www.linkedin.com/in/jeff-mikhail-mangrobang-8878b7254/">
							LinkedIn
							<FaLinkedin
								className="text-blue-600"
								size={25}
							/>
						</a>
					</li>
					<li className="w-[140px] h-[60px] flex justify-between items-center">
						<a
							className="flex justify-between items-center w-full text-gray-500 ml-[-90px] hover:ml-[-10px] duration-300"
							target="_blank"
							rel="noreferrer"
							href="https://github.com/mikhail-jeff">
							GitHub
							<FaGithub
								className="text-gray-700"
								size={25}
							/>
						</a>
					</li>
					<li className="w-[140px] h-[60px] flex justify-between items-center">
						<a
							className="flex justify-between items-center w-full text-gray-500 ml-[-90px] hover:ml-[-10px] duration-300"
							target="_blank"
							rel="noreferrer"
							href="mailto: mikhailcruz78@gmail.com">
							Email
							<HiOutlineMail
								className="text-red-600"
								size={25}
							/>
						</a>
					</li>
					<li className="w-[140px] h-[60px] flex justify-between items-center">
						<a
							download
							className="flex justify-between items-center w-full text-gray-500 ml-[-90px] hover:ml-[-10px] duration-300"
							href="MANGROBANG_JEFF_2024.pdf">
							Resume
							<BsFillPersonLinesFill
								className="text-gray-700"
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
