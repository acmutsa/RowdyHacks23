import { type FunctionComponent, useState } from 'react';
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

import { SiVercel } from 'react-icons/si';

interface Props {
	className?: string;
}

const newDisclosure = () => {
	const [showResources, setShowResources] = useState(false);
	const [showLinks, setShowLinks] = useState(false);
	const [showHackathons, setShowHackathons] = useState(false);

	return (
		<div>
			<div className="bg-black border-t-gray-500 border-t-[1px] pb-10 lg:block hidden">
				<div className="grid grid-cols-5 bg-transparent md:p-10 max-w-[1200px] mx-auto">
					<div className="col-span-2">
						<div className="w-full flex items-center justify-start h-full">
							<Image
								src="https://static.rowdyhacks.org/img/logos/rh_landing.svg"
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
					</div>
					<div className="flex flex-col font-sans text-gray-400">
						<h2 className="text-white !text-md">Resources</h2>
						<Link href={'/auth'}>
							<a className="text-sm hover:underline">Register</a>
						</Link>
						<Link href={'/faq'}>
							<a className="text-sm hover:underline">FAQ</a>
						</Link>
						<Link href={'https://mlh.io/code-of-conduct'}>
							<a className="text-sm hover:underline">Code of Conduct</a>
						</Link>
						<Link href={'/contact'}>
							<a className="text-sm hover:underline">Contact Us</a>
						</Link>
						<Link href={'https://acmutsa.org/'}>
							<a className="text-sm hover:underline">ACM UTSA</a>
						</Link>
					</div>
					<div className="flex flex-col font-sans text-gray-400">
						<h2 className="text-white !text-md">Links</h2>
						<Link href={'https://github.com/UTSA-ACM/RowdyHacks23'}>
							<a className="text-sm hover:underline">Open Source</a>
						</Link>
						<Link href={'https://github.com/UTSA-ACM/RowdyHacks23/blob/develop/contributions.md'}>
							<a className="text-sm hover:underline text-amber-300">Contributions</a>
						</Link>
					</div>
					<div className="flex flex-col font-sans text-gray-400">
						<h2 className="text-white !text-md">Other Hackathons</h2>
						<Link href={'https://cqhacks.org/'}>
							<a className="text-sm hover:underline">CodeQuantum</a>
						</Link>
						<Link href={'https://rowdydatathon.org/'}>
							<a className="text-sm hover:underline">RowdyDatathon</a>
						</Link>
						<Link href={'https://tamuhack.com/'}>
							<a className="text-sm hover:underline">TAMUhack</a>
						</Link>
						<Link href={'https://hackutd.co/'}>
							<a className="text-sm hover:underline">HackUTD</a>
						</Link>
						<Link href={'https://hacktx.com/'}>
							<a className="text-sm hover:underline">HackTX</a>
						</Link>
						<Link href={'https://unthackathon.com/#/'}>
							<a className="text-sm hover:underline">HackUNT</a>
						</Link>
					</div>
					<div className="col-span-5 h-10"></div>
					<div className="flex col-span-1 justify-center h-[44px] w-[212px]">
						<a href="https://vercel.com/?utm_source=ACM%20UTSA&utm_campaign=oss">
							<img
								className="invert h-[44px] w-[212px]"
								src="https://static.rowdyhacks.org/img/powered-by-vercel.svg"
							/>
						</a>
					</div>
					<div className="col-span-3 text-white text-xs font-sans flex items-center justify-center">
						<p className="text-center">
							Made with &lt;/&gt; & ♥ @ RowdyHacks
							<br />© RowdyHacks & Association of Computing Machinery at UTSA{' '}
							{new Date().getFullYear()}. All Rights Reserved.
						</p>
					</div>
					<div className="flex justify-end items-center h-[44px] max-w-[212px] w-full">
						<div className="flex text-gray-900 bg-white h-[44px] w-[212px] items-center justify-evenly p-[5px] rounded-lg text-xl">
							<a href="https://twitter.com/rowdyhacks" className="mr-2">
								<FaTwitter />
							</a>
							<a href="https://www.instagram.com/rowdyhacks/" className="mx-2">
								<FaInstagram />
							</a>
							<a href="https://www.facebook.com/rowdyhacks" className="mx-2">
								<FaFacebook />
							</a>
							<a href="https://github.com/UTSA-ACM" className="mx-2">
								<FaGithub />
							</a>
							<a href="https://go.rowdyhacks.org/discord" className="ml-2">
								<FaDiscord />
							</a>
						</div>
					</div>
				</div>
				<div className="bg-white text-black font-sans w-full flex flex-col items-center py-2">
					<p className="text-center text-sm">
						<a href="https://github.com/acmutd/hackportal" className="hover:underline font-bold">
							HackPortal
						</a>{' '}
						developed with &lt;3 by <span className="font-black inline">HackUTD</span> and{' '}
						<span className="font-black inline">ACM UTD Development</span>
					</p>
				</div>
			</div>
			<div className="lg:hidden grid grid-cols-2 bg-black border-t-gray-500 border-t-[1px] min-h-[350px] py-5">
				<div className="col-span-2 md:col-span-1">
					<div className="w-full flex items-center justify-center h-full">
						<Image
							src="https://static.rowdyhacks.org/img/logos/rh_landing.svg"
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
				</div>
				<div className="px-10 flex flex-col justify-center col-span-2 md:col-span-1 md:py-0 py-10">
					<div className="flex flex-col font-sans text-gray-400 border-gray-600 hover:cursor-pointer border-b-[1px] py-[5px]">
						<h2 onClick={() => setShowResources(!showResources)} className="text-white !text-md">
							Resources
						</h2>
						{showResources ? (
							<div className="flex flex-col">
								<Link href={'/auth'}>
									<a className="text-sm hover:underline">Register</a>
								</Link>
								<Link href={'/faq'}>
									<a className="text-sm hover:underline">FAQ</a>
								</Link>
								<Link href={'https://mlh.io/code-of-conduct'}>
									<a className="text-sm hover:underline">Code of Conduct</a>
								</Link>
								<Link href={'/contact'}>
									<a className="text-sm hover:underline">Contact Us</a>
								</Link>
								<Link href={'https://acmutsa.org/'}>
									<a className="text-sm hover:underline">ACM UTSA</a>
								</Link>
							</div>
						) : null}
					</div>
					<div className="flex flex-col font-sans text-gray-400 border-gray-600 hover:cursor-pointer border-b-[1px] py-[5px]">
						<h2 className="text-white !text-md" onClick={() => setShowLinks(!showLinks)}>
							Links
						</h2>
						{showLinks ? (
							<div className="flex flex-col">
								<Link href={'https://github.com/UTSA-ACM/RowdyHacks23'}>
									<a className="text-sm hover:underline">Open Source</a>
								</Link>
								<Link
									href={'https://github.com/UTSA-ACM/RowdyHacks23/blob/develop/contributions.md'}
								>
									<a className="text-sm hover:underline text-amber-300">Contributions</a>
								</Link>
							</div>
						) : null}
					</div>
					<div className="flex flex-col font-sans text-gray-400 border-gray-600 hover:cursor-pointer py-[5px]">
						<h2 onClick={() => setShowHackathons(!showHackathons)} className="text-white !text-md">
							Other Hackathons
						</h2>
						{showHackathons ? (
							<div className="flex flex-col">
								<Link href={'https://cqhacks.org/'}>
									<a className="text-sm hover:underline">CodeQuantum</a>
								</Link>
								<Link href={'https://rowdydatathon.org/'}>
									<a className="text-sm hover:underline">RowdyDatathon</a>
								</Link>
								<Link href={'https://tamuhack.com/'}>
									<a className="text-sm hover:underline">TAMUhack</a>
								</Link>
								<Link href={'https://hackutd.co/'}>
									<a className="text-sm hover:underline">HackUTD</a>
								</Link>
								<Link href={'https://hacktx.com/'}>
									<a className="text-sm hover:underline">HackTX</a>
								</Link>
								<Link href={'https://unthackathon.com/#/'}>
									<a className="text-sm hover:underline">HackUNT</a>
								</Link>
							</div>
						) : null}
					</div>
				</div>
				<div className="sm:col-span-1 col-span-2">
					<div className="flex justify-center items-center min-h-[44px] h-full w-full">
						<a href="https://vercel.com/?utm_source=ACM%20UTSA&utm_campaign=oss">
							<img
								className="invert h-[44px] w-[212px]"
								src="https://static.rowdyhacks.org/img/powered-by-vercel.svg"
							/>
						</a>
					</div>
				</div>
				<div className="sm:col-span-1 sm:mt-0 mt-10 col-span-2">
					<div className="flex justify-center items-center min-h-[44px] h-full min-w-[212px] w-full">
						<div className="flex text-gray-900 bg-white h-[44px] w-[212px] items-center justify-evenly p-[5px] rounded-lg text-xl">
							<a href="https://twitter.com/rowdyhacks" className="mr-2">
								<FaTwitter />
							</a>
							<a href="https://www.instagram.com/rowdyhacks/" className="mx-2">
								<FaInstagram />
							</a>
							<a href="https://www.facebook.com/rowdyhacks" className="mx-2">
								<FaFacebook />
							</a>
							<a href="https://github.com/UTSA-ACM" className="mx-2">
								<FaGithub />
							</a>
							<a href="https://go.rowdyhacks.org/discord" className="ml-2">
								<FaDiscord />
							</a>
						</div>
					</div>
				</div>
				<div className="text-white text-xs font-sans flex items-center justify-center col-span-2">
					<p className="text-center md:py-0 py-10">
						Made with &lt;/&gt; & ♥ @ RowdyHacks
						<br />© RowdyHacks & Association of Computing Machinery at UTSA{' '}
						{new Date().getFullYear()}. All Rights Reserved.
					</p>
				</div>
				<div className="bg-white text-black font-sans w-full flex flex-col items-center justify-center col-span-2 h-[50px]">
					<p className="text-center text-sm">
						<a href="https://github.com/acmutd/hackportal" className="hover:underline font-bold">
							HackPortal
						</a>{' '}
						developed with &lt;3 by <span className="font-black inline">HackUTD</span> and{' '}
						<span className="font-black inline">ACM UTD Development</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default newDisclosure;
