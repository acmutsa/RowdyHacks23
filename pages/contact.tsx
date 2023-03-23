import { type NextPage } from 'next';

const Contact: NextPage = () => {
	return (
		<div className='absolute top-0 min-h-screen w-full bg-[url("https://static.rowdyhacks.org/img/profiles/mountainbg.svg")] bg-cover bg-fixed flex items-center justify-center'>
			<div className="w-full max-w-[1000px] md:aspect-video md:h-auto h-[500px] p-5 rounded border-2 border-rh-sunset bg-rh-deep-purple flex flex-col items-center justify-center">
				<h1 className="text-6xl font-poppins font-black text-rh-sunset">Contact Us</h1>
				<h2 className="font-sans text-white text-center mt-3 font-bold">
					Have a question and want to reach out? Feel free to use one of the contact methods below!
				</h2>
				<h1 className="mt-10 text-white font-sans font-bold mb-1">General Email</h1>
				<div className="flex rounded border-rh-sunset border-2">
					<input className="p-2 text-center" value={'team@rowdyhacks.org'} readOnly />
					<button
						onClick={() =>
							navigator.clipboard
								.writeText('team@rowdyhacks.org')
								.then(() => alert('Copied to Clipboard!'))
						}
						className="p-2 px-4 font-sans font-bold text-rh-deep-purple bg-rh-sunset"
					>
						Copy
					</button>
				</div>
				<h1 className="mt-5 text-white font-sans font-bold mb-1">Public Relations & Partners</h1>
				<div className="flex rounded border-rh-sunset border-2">
					<input className="p-2 text-center" value={'pr@rowdyhacks.org'} readOnly />
					<button
						onClick={() =>
							navigator.clipboard
								.writeText('pr@rowdyhacks.org')
								.then(() => alert('Copied to Clipboard!'))
						}
						className="p-2 px-4 font-sans font-bold text-rh-deep-purple bg-rh-sunset"
					>
						Copy
					</button>
				</div>
			</div>
		</div>
	);
};

export default Contact;
