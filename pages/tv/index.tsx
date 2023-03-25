import { type NextPage } from 'next';

const NotFound: NextPage = () => {
	return (
		<div className='absolute top-0 min-h-screen w-full bg-[url("https://static.rowdyhacks.org/img/profiles/mountainbg.svg")] bg-cover bg-fixed flex items-center justify-center'>
			<div className="w-full max-w-[1000px] md:aspect-video md:h-auto h-[500px] p-5 rounded border-2 border-rh-sunset bg-rh-deep-purple">
				<h1 className="text-6xl font-poppins font-black text-rh-sunset text-center my-5">RHTV</h1>
				<div className="w-full h-[0px] relative pb-[56.25%] border-2 rounded border-rh-sunset">
					<iframe
						src="https://streamyard.com/watch/PK7uARFw65Qr?embed=true"
						width="100%"
						height="100%"
						frameBorder="0"
						allowFullScreen
						className="w-full h-full absolute top-0 left-0 overflow-hidden"
					></iframe>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
