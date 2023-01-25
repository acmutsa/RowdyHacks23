import { type NextPage } from 'next';

const Contact: NextPage = () => {
	return (
		<div className='absolute top-0 min-h-screen w-full bg-[url("https://static.rowdyhacks.org/img/profiles/mountainbg.svg")] bg-cover bg-fixed flex items-center justify-center'>
			<div className="w-full max-w-[1000px] md:aspect-video md:h-auto h-[500px] p-5 rounded border-2 border-rh-sunset bg-rh-deep-purple flex flex-col items-center justify-center">
				<h1 className="text-6xl font-poppins font-black text-rh-sunset">Contact Us</h1>
				<h2 className="font-sans text-white mt-3 font-bold">
					Have a question and want to reach out? Feel free to use one of the contact methods below!
				</h2>
			</div>
		</div>
	);
};

export default Contact;
