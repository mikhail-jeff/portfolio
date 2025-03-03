import mernchat from "../assets/mern-chat-app.png";
import miniproject from "../assets/miniproject.png";
import tailwindemo from "../assets/tailwind-portfolio.png";
// import mernblog from "../assets/mern-blog.png";
// import tasktracker from "../assets/vite-task-tracker.png";
// import contactmanager from "../assets/contact-manager.png";
// import nodemysql from "../assets/node_mysql.png";

const Projects = () => {
	return (
		<section
			name="projects"
			className="w-full h-auto flex flex-col justify-center items-center text-gray-500">
			<div className="max-w-[1080px] p-4 mx-auto">
				<p className="text-center text-4xl font-bold text-gray-800">Projects</p>
				<p className="text-center pb-5">Check out some of my recent projects.</p>

				<div className="grid md:grid-cols-3 gap-8">
					<div className="inline-block border shadow-lg rounded-md overflow-hidden dark:shadow-gray-500 dark:shadow-md">
						<img
							className="w-full h-[200px] object-cover"
							src={mernchat}
							alt=""
						/>
						<a
							href="https://mern-chat-app-k836.onrender.com/login"
							target="_blank"
							rel="noreferrer">
							<p className="font-extrabold text-2xl text-center pt-2 text-gray-800">Chatify</p>
						</a>
						<p className="font-bold text-center">(MongoDb, React, Node, Express, Socket IO, Tailwind CSS, daisyUI)</p>
						<p className="font-medium  px-3 py-2 text-justify">A real time MERN Chat App with AUTH and Socket IO for real-time messaging designed with Tailwind CSS and daisyUI.</p>
					</div>

					<div className="inline-block border shadow-lg rounded-md overflow-hidden dark:shadow-gray-500 dark:shadow-md">
						<img
							className="w-full h-[200px] object-cover"
							src={miniproject}
							alt=""
						/>
						<a
							href="https://kodego-mini-project-2.netlify.app/"
							target="_blank"
							rel="noreferrer">
							<p className="font-extrabold text-2xl text-center pt-2  text-gray-800">Game On</p>
						</a>
						<p className="font-bold text-center">(React JS, Tailwind CSS, Rapid API)</p>
						<p className="font-medium  px-3 py-2 text-justify">My bootcamp mini project website where gamers can explore the best games today and latest news.</p>
					</div>

					<div className="inline-block border shadow-lg rounded-md overflow-hidden dark:shadow-gray-500 dark:shadow-md">
						<img
							className="w-full h-[200px] object-cover"
							src={tailwindemo}
							alt=""
						/>
						<a
							href="https://vite-tailwind-demo.netlify.app/"
							target="_blank"
							rel="noreferrer">
							<p className="font-extrabold text-2xl text-center pt-2 text-gray-800">Data Finance</p>
						</a>
						<p className="font-bold text-center">( React JS, Tailwind CSS and Netlify)</p>
						<p className="font-medium  px-3 py-2 text-justify">This is a fully responsive website built with React and Tailwind CSS to showcase my frontend development skills hosted on Netlify.</p>
					</div>

					{/* <div className="inline-block border shadow-lg rounded-md overflow-hidden dark:shadow-gray-500 dark:shadow-md">
						<img
							className="w-full h-[200px] object-cover"
							src={tasktracker}
							alt=""
						/>
						<a
							href="https://task-tracker-personal.netlify.app/"
							target="_blank"
							rel="noreferrer">
							<p className="font-extrabold text-2xl text-center pt-2 text-gray-800">Task Tracker App</p>
						</a>
						<p className="font-bold text-center">(React JS, Vite, Tailwind CSS, Netlify)</p>
						<p className="font-medium  px-3 py-2 text-justify">A React Vite Task Tracker App with CRUD (Create, Read, Update, Delete) functionality using Context API and Local Storage for state management, Tailwind CSS for styling, and react-toastify for displaying notifications.</p>
					</div> */}

					{/* <div className="inline-block border shadow-lg rounded-md overflow-hidden dark:shadow-gray-500 dark:shadow-md">
						<img
							className="w-full h-[200px] object-cover"
							src={contactmanager}
							alt=""
						/>
						<a
							href="https://github.com/mikhail-jeff/contact-api-1"
							target="_blank"
							rel="noreferrer">
							<p className="font-extrabold text-2xl text-center pt-2 text-gray-800">Contact Manager REST API</p>
						</a>
						<p className="font-bold text-center">(Express, Node, MongoDB, Postman)</p>
						<p className="font-medium  px-3 py-2 text-justify">A Contact Manager backend application using Node, Express, MongoDB with CRUD, LOGIN, LOGOUT, jwt access token and error handling.</p>
					</div> */}

					{/* <div className="inline-block border shadow-lg rounded-md overflow-hidden dark:shadow-gray-500 dark:shadow-md">
						<img
							className="w-full h-[200px] object-cover"
							src={nodemysql}
							alt=""
						/>
						<a
							href="https://github.com/mikhail-jeff/node-mysql-api"
							target="_blank"
							rel="noreferrer">
							<p className="font-extrabold text-2xl text-center pt-2 text-gray-800">REST CRUD API</p>
						</a>
						<p className="font-bold text-center">(Express, Node, MySQL, Sequelize ORM, Postman)</p>
						<p className="font-medium  px-3 py-2 text-justify">A simple backend application CRUD REST API using Node JS, Express JS, Sequelize ORM and MySQL for database.</p>
					</div> */}
				</div>
			</div>
		</section>
	);
};

export default Projects;
