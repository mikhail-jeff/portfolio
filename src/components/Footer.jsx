import { useState, useEffect } from "react";

const Footer = () => {
	const [currentTime, setCurrentTime] = useState();

	useEffect(() => {
		setInterval(() => {
			const time = new Date();
			setCurrentTime(time.toLocaleTimeString());
		}, 1000);
	}, []);

	return (
		<footer className="w-full h-auto mt-5 font-medium text-gray-500 shadow-inner dark:shadow-gray-500 text-center p-4">
			<div className="">
				<p className="text-2xl font-semibold">
					<span className="font-mono">{currentTime}</span>
				</p>
				<p className="">Pangasinan, Philippines</p>
				<p className="">&copy; Copyright {new Date().getFullYear()} jeffmikhail</p>
			</div>
		</footer>
	);
};

export default Footer;
