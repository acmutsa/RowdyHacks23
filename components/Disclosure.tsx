import type { FunctionComponent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
	FaTwitter,
	FaInstagram,
	FaFacebook,
	FaGithub,
	FaDiscord,
	FaLinkedin,
} from 'react-icons/fa';

interface Props {
	className?: string;
}

const Disclosure: FunctionComponent = () => {
	return (
		<div className="bg-gray-900 h-[50vh] w-full grid grid-cols-2 py-[20px]">
			<div className="w-full h-[30vh] flex justify-end items-center border-r-white border-r-2 pr-[10px]">
				<Image
					src="/img/logos/rh_landing.svg"
					width={75}
					height={75}
					className="h-[75px] w-[75px]"
				></Image>
				<div className="ml-[5px]">
					<h1 className="text-4xl font-black font-sans text-white">RowdyHacks</h1>
					<h2 className="text-xl font-black font-permanent-marker italic text-white text-center">
						Into The Unknown
					</h2>
				</div>
			</div>
			<div className="w-full h-[30vh] flex flex-col justify-center items-start pl-[10px]">
				<Link href={'/contributions'}>
					<a className="text-white font-sans font-extrabold hover:underline hover:cursor-pointer">
						Contributions
					</a>
				</Link>
				<Link href={'/contributions'}>
					<a className="text-white font-sans font-extrabold hover:underline hover:cursor-pointer">
						Contact Us
					</a>
				</Link>
				<Link href={'/contributions'}>
					<a className="text-white font-sans font-extrabold hover:underline hover:cursor-pointer">
						Code of Conduct
					</a>
				</Link>
				<Link href={'/oss'}>
					<a className="text-white font-sans font-extrabold hover:underline hover:cursor-pointer">
						Open Source
					</a>
				</Link>
				<Link href={'https://acmutsa.org/'}>
					<a className="text-white font-sans font-extrabold hover:underline hover:cursor-pointer">
						ACM UTSA
					</a>
				</Link>
				<div className="flex text-gray-900 bg-white p-[5px] rounded text-xl mt-[10px]">
					<a href="https://twitter.com/rowdyhacks" className="mr-2">
						<FaTwitter />
					</a>
					<a href="https://twitter.com/rowdyhacks" className="mx-2">
						<FaInstagram />
					</a>
					<a href="https://twitter.com/rowdyhacks" className="mx-2">
						<FaFacebook />
					</a>
					<a href="https://twitter.com/rowdyhacks" className="mx-2">
						<FaGithub />
					</a>
					<a href="https://twitter.com/rowdyhacks" className="ml-2">
						<FaDiscord />
					</a>
				</div>
			</div>
			<div className="h-[15vh] col-span-2">
				<div className="text-white flex flex-col items-center justify-end font-sans font-bold h-[15vh] ">
					<p className="text-center text-sm">
						Made with &lt;/&gt; & ♥ @ RowdyHacks
						<br />© RowdyHacks & Association of Computing Machinery at UTSA{' '}
						{new Date().getFullYear()}. All Rights Reserved.
					</p>
					<div className="bg-amber-500 w-full flex flex-col items-center mt-[20px]">
						<p className="text-center text-sm">
							HackPortal developed with &lt;3 by <p className="font-black inline">HackUTD</p> and{' '}
							<p className="font-black inline">ACM UTD Development</p>
						</p>
						<Link href={'/contributions'}>
							<a className="text-sm underline">Other Contributions</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Disclosure;
