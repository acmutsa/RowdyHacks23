import { type NextPage } from 'next';
import { type ReactElement } from 'react';
import FaqItem from '../components-rh/faq/FaqItem';
import Image from 'next/image';

const faq: NextPage = () => {
	const set = [
		{
			Question: 'What is a Hackathon?',
			Answer:
				'A hackathon is a weekend-long event where students form teams and collaborate on a software or hardware project to learn new skills, create social impact, participate in Partners challenges, and innovate new solutions! There’s also plenty of time for networking with partners, meeting other hackers, and attending workshops and mini events! In short, it’s a weekend dedicated to collaboration, technology, and community :)',
		},
		{
			Question: 'Who can participate?',
			Answer: 'Any university, college, or vocational student 18 or older can attend!',
		},

		{
			Question: 'How Much does it cost?',
			Answer:
				"RowdyHacks is completely FREE to attend, thanks to our awesome partners. You don't have to worry about a thing -- we'll provide meals, snacks, t-shirts, swag, prizes, and more all weekend long!",
		},

		{
			Question: 'What if I dont know how to code?',
			Answer:
				'No worries! RowdyHacks is for everyone from all coding and non-coding backgrounds! We will have plenty of mentors, resources, and workshops to help you learn throughout the event.',
		},
		{
			Question: 'How Big the Team Can Be?',
			Answer:
				"Teams can consist of up to 4 students! We encourage hackers to participate as part of a team. Don't have a team? No worries, we will have an opportunity before the event for you to meet other hackers and form teams!",
		},
		{
			Question: 'How Long This Hackathon?',
			Answer:
				'This year RowdyHacks will be a 36-hour event, 24 hours of which will be dedicated to hacking',
		},

		{
			Question: 'Can I Work On Previous Project?',
			Answer:
				'If you plan to submit your project to any of our competition tracks, your project must be started from scratch when hacking begins the weekend of the event. However, you can start brainstorming your ideas or learning new skills you might need for your project prior to the event',
		},
		{
			Question: 'What If I Am Not UTSA Student?',
			Answer:
				"Not a UTSA student? No problem! RowdyHacks is open to ANY college, university, or vocational student over 18 years old. We're so excited to see students from all over collaborating and innovating together at this year's event!!",
		},
		{
			Question: 'What Will I Need?',
			Answer:
				"RowdyHacks is a weekend-long event, and we want to make sure you're prepared!\nWe encourage you to bring a change of clothes and any hygiene items you might need. With COVID still ongoing, we also encourage our hackers to mask up during the event.\n Any hardware you plan on using for the project -- your laptop, charger, portable mouse, phone, Raspberry Pi, VR headset, robots, etc.\n While we cannot designate a sleeping area (per university rules), we also can’t stop you from napping! Since our event is overnight, feel free to bring a pillow and blanket and get comfy.\nWhile we will be providing meals, drinks, and snacks, you’re more than welcome to bring any snacks or drinks you’d like to enjoy. There will also be water bottle fill-up stations, so feel free to bring a reusable water bottle!",
		},
		{
			Question: 'What Can My Project Be?',
			Answer:
				'Anything! You can make a new social media website, a simple weather app, a sentimental analysis tool for tweets, a game... anything you can imagine, you can create.\n Your team can come prepared with an idea or come up with one on the spot. We’ll have workshops, resources, and mentors to help you out with your project as well!',
		},
		{
			Question: 'What Competition Tracks Will Be Offered This Year',
			Answer:
				"Hackers can submit their projects to either the Learners Track (geared towards those who are in intro CS classes or those who haven't coded before) or the General Track (for those with moderate to advanced skills). In addition to submitting projects to a competition track, hackers can also submit their project for Best Retro Hack, Best Hardware Hack, Cybersecurity, or Partners Challenge prizes.",
		},
		{
			Question: 'How Much It Cost To Participate?',
			Answer:
				"RowdyHacks is completely FREE to attend, thanks to our awesome partners. You don't have to worry about a thing -- we'll provide meals, snacks, t-shirts, swag, prizes, and more all weekend long!",
		},
	];

	return (
		<div
			className={
				'absolute top-0 min-h-screen w-full bg-[url("https://static.rowdyhacks.org/img/profiles/mountainbg.svg")] bg-cover bg-fixed p-2'
			}
		>
			<div
				className={
					'mx-auto  mt-[10em] items-center text-white flex flex-col justify-between w-[60%] md:w-[50%] h-[400%]'
				}
			>
				<div className="max-w-4xl py-6 mx-auto flex flex-col items-center">
					<div className="flex items-center">
						<Image src={'/img/logos/rh_landing.svg'} width={48} height={48}></Image>
						<h1 className="text-4xl font-black font-sans text-white ml-[5px]">RowdyHacks</h1>
					</div>
					<h2 className="text-6xl font-black font-sans text-white text-center">Hackathon FAQ</h2>
				</div>
			</div>
			{/* {openIndex !== null && (
				<div className=" text-white w-[85%] md:w-2/3 mt-4 mx-auto bg-rh-deep-purple p-6 rounded-lg shadow-lg border border-rh-sunset">
					<p className="text-xl font-bold mb-4">{set[openIndex].Answer}</p>
					<button className="bg-rh-sunset text-white p-2 rounded" onClick={clear}>
						Close
					</button>
				</div>
			)} */}
			<div className={'grid grid-cols-1 md:grid-cols-2 max-w-[1200px] gap-2 mx-auto faq-transtion'}>
				{(() => {
					let els: ReactElement[] = [];
					const faqs = set;
					for (let i = 0; i < faqs.length; i++) {
						els.push(<FaqItem key={i} question={faqs[i].Question} answer={faqs[i].Answer} />);
					}
					return els;
				})()}
				<div className="rounded bg-rh-deep-purple border-rh-sunset border-2 col-span-1 md:col-span-2 min-h-[100px] p-5 flex flex-col items-center">
					<h1 className="text-3xl font-poppins font-black text-rh-sunset text-center">
						Have Another Question?
					</h1>
					<p className="text-white mt-5 font-bold font-sans text-center">
						Feel free to reach out to us at{' '}
						<a className="text-rh-sunset underline" href="mailto:team@rowdyhacks.org">
							team@rowdyhacks.org
						</a>{' '}
						or join us on{' '}
						<a href={'https://go.rowdyhacks.org/discord'} className="text-rh-sunset underline">
							Discord
						</a>
						!
					</p>
				</div>
			</div>
		</div>
	);
};

export default faq;
