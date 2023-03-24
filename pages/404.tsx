import { type NextPage } from 'next';

const NotFound: NextPage = () => {
	return (
		<div className='absolute top-0 min-h-screen w-full bg-[url("https://static.rowdyhacks.org/img/profiles/mountainbg.svg")] bg-cover bg-fixed flex items-center justify-center'>
			<div className="w-full max-w-[1000px] md:aspect-video md:h-auto h-[500px] p-5 rounded border-2 border-rh-sunset bg-rh-deep-purple flex flex-col items-center justify-center">
				<h1 className="text-6xl font-poppins font-black text-rh-sunset">Page Not Found</h1>
				<h2 className="font-sans text-white text-center mt-3 font-bold">
					This page does not exist or will only be available during the event.
					<br />
					<a href="/" className="underline">
						Return Home
					</a>
				</h2>
			</div>
		</div>
	);
};

export default NotFound;
