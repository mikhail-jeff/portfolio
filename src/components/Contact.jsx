import React from 'react';

const Contact = () => {
	return (
		<section
			name='contact'
			className='w-full h-screen flex flex-col justify-end items-center text-gray-500 mt-[260px]'
		>
			<div className='max-w-[1080px] p-4 mx-auto w-full'>
				<div>
					<p className='text-center text-4xl font-bold '>Contact</p>
					<p className='text-center py-4'>Let's collaborate mate.</p>
				</div>
				<form
					method='POST'
					action='https://getform.io/f/2fc6803b-2078-4535-a217-cdde9c20e226'
					className='flex flex-col max-w-[600px] w-full mx-auto'
				>
					<input
						className='my-1 p-2 bg-gray-300 focus:outline-none'
						type='text'
						name='name'
						id=''
						placeholder='Name'
					/>
					<input
						className='my-1  p-2 bg-gray-300 focus:outline-none'
						type='email'
						name='email'
						id=''
						placeholder='Email'
					/>
					<textarea
						className='bg-gray-300 my-4 p-2 focus:outline-none'
						name='message'
						id=''
						rows='10'
						placeholder='Message'
					></textarea>
					<button className='border-2 p-2 my-1  bg-gray-300 hover:bg-gray-800 font-medium hover:text-white'>Send Message</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
