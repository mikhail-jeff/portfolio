import { useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { BsSunFill } from 'react-icons/bs';
import { RiMoonFill } from 'react-icons/ri';
import Footer from './components/Footer';

function App() {
	const [theme, setTheme] = useState(null);

	useEffect(() => {
		if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}, []);

	useEffect(() => {
		if (theme === 'dark') {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}, [theme]);

	const handleThemeSwitcher = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<div className='bg:white dark:bg-black'>
			<button
				type='button'
				onClick={handleThemeSwitcher}
				className='fixed z-10 right-6 top-24 p-1 round-md'
			>
				{theme === 'dark' ? (
					<RiMoonFill
						size={20}
						className='text-gray-700 hover:scale-110'
					/>
				) : (
					<BsSunFill
						size={20}
						className='text-yellow-300 hover:scale-110'
					/>
				)}
			</button>
			<Navbar />
			<Hero />
			<About />
			<Skills />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}

export default App;
