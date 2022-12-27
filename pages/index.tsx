import type { NextPage } from 'next';
import Image from 'next/image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { buttonDatas, stats } from '../lib/data';
import { RequestHelper } from '../lib/request-helper';
import firebase from 'firebase/app';
import 'firebase/messaging';
import 'firebase/storage';
import KeynoteSpeaker from '../components/KeynoteSpeaker';
import HomeChallengeCard from '../components/HomeChallengeCard';
import MemberCards from '../components/MemberCards';
import SponsorCard from '../components/SponsorCard';
import FAQ from '../components/faq';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import Disclosure from '../components/Disclosure';

interface propsType {
	props: {
		keynoteSpeakers: KeynoteSpeaker[];
		challenges: Challenge[];
		answeredQuestion: AnsweredQuestion[];
		fetchedMembers: TeamMember[];
		sponsorCard: Sponsor[];
	};
}

const Home: NextPage<propsType> = ({ props }) => {
	const router = useRouter();

	return (
		<div className="w-full h-screen absolute top-0 left-0">
			<Parallax pages={5.5} className={'w-full overflow-hidden top-0 left-0'}>
				<ParallaxLayer speed={0} className="sky-gradient overflow-hidden" />
				<ParallaxLayer speed={-0.5} className="overflow-hidden flex items-center justify-center">
					<img src="/img/landscape/clouds.svg" className="w-full opacity-20"></img>
				</ParallaxLayer>
				<ParallaxLayer speed={-0.2} className="overflow-hidden">
					<div className="w-full flex justify-center items-center pt-[calc(100vh/4)]">
						<Image
							src="/img/logos/rh_landing.svg"
							width={175}
							height={175}
							className="h-[100px] w-[100px]"
						></Image>
						<div className="ml-[5px]">
							<h1 className="text-8xl font-black font-sans text-white">RowdyHacks</h1>
							<h2 className="text-4xl font-black font-permanent-marker italic text-white text-center">
								Into The Unknown
							</h2>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer speed={-0.5} className="overflow-hidden">
					<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
						<img src="/img/landscape/p/layer_2.png" className="min-w-[3000px] object-cover"></img>
					</div>
				</ParallaxLayer>
				<ParallaxLayer speed={-0.3} className="overflow-hidden">
					<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
						<img src="/img/landscape/p/layer_3.png" className="min-w-[3000px] object-cover"></img>
					</div>
				</ParallaxLayer>
				<ParallaxLayer speed={-0.3} className="overflow-hidden">
					<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
						<img src="/img/landscape/p/layer_4.png" className="min-w-[3000px] object-cover"></img>
					</div>
				</ParallaxLayer>
				<ParallaxLayer speed={-0.2} className="overflow-hidden">
					<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
						<img src="/img/landscape/p/layer_5.png" className="min-w-[3000px] object-cover"></img>
					</div>
				</ParallaxLayer>
				<ParallaxLayer speed={0} className="overflow-hidden">
					<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
						<img
							src="/img/landscape/p/layer_6.png"
							className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
						></img>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0} className="bg-[#2d112b]">
					<div className="w-full h-full grid grid-cols-2 max-w-[1000px] mx-auto pt-[100px]">
						<div className="max-h-[280px] flex flex-col justify-center">
							<h3 className="font-black font-permanent-marker text-white text-4xl mb-[10px]">
								About Us
							</h3>
							<p className="font-sans text-white text-lg font-bold">
								RowdyHacks is a free, weekend-long, overnight hackathon hosted at UTSA and the
								second largest hackathon in Texas! Students can join us to network, code,
								collaborate, and compete. We welcome hackers from all disciplines, backgrounds, &
								technical levels!
							</p>
						</div>
						<div className="flex items-center justify-center max-h-[280px]">
							<Image src={'/img/logos/rh_sunset.svg'} width={175} height={175}></Image>
							<div className="h-[175px] ml-[10px] flex flex-col justify-center text-3xl font-sans text-[#ff583d] font-black">
								<h1 className="w-full">LET'S</h1>

								<h1 className="w-full">GET</h1>

								<h1 className="w-full font-permanent-marker tracking-wider">ROWDY</h1>
							</div>
						</div>
						<div className="flex items-center justify-center !overflow-visible">
							<Image
								className="translate-y-[-25px]"
								src={'/img/mountain_camping_site.png'}
								width={280}
								height={280}
							/>
						</div>
						<div className="max-h-[280px] flex flex-col justify-center">
							<h3 className="font-black font-permanent-marker text-white text-4xl mb-[10px]">
								About Us
							</h3>
							<p className="font-sans text-white text-lg font-bold">
								RowdyHacks is a free, weekend-long, overnight hackathon hosted at UTSA and the
								second largest hackathon in Texas! Students can join us to network, code,
								collaborate, and compete. We welcome hackers from all disciplines, backgrounds, &
								technical levels!
							</p>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={2} factor={2} speed={0} className="ocean-gradient">
					<img className="w-full absolute top-0 left-0" src="/img/borders/cave_down.svg"></img>

					<div className="w-full h-full pt-[600px] max-w-[1000px] mx-auto">
						<h1 className="font-permanent-marker text-6xl font-bold text-[#2a2a72]">Sponsors</h1>
					</div>
					<img
						className="w-full absolute bottom-0 left-0 rotate-180 mb-[-1px]"
						src="/img/borders/trees_up.svg"
					></img>
				</ParallaxLayer>
				<ParallaxLayer offset={4} speed={0} className="z-10 bg-emerald-900 overflow-hidden">
					<div className="w-full h-full absolute">
						<img
							src="/img/landscape/trees.svg"
							className="min-w-[calc(100%+100px)] translate-x-[-50px] translate-y-[-20vh]"
						></img>
					</div>
					<div className="absolute left-0 top-0 w-full f-hull">
						<div className="w-full h-full mx-auto max-w-[1000px] grid grid-cols-2 gap-2">
							<div className="col-span-2 flex items-center min-h-[20vh] ">
								<h1 className="font-permanent-marker text-6xl font-bold text-emerald-700">
									Work With Us
								</h1>
							</div>
							<div>
								<div className="bg-stone-800 border-emerald-700 border-2 px-[15px] w-full rounded-xl aspect-video text-white py-[20px]">
									<div className="bg-emerald-700 rounded-full w-[150px] h-[30px] mt-[-35px] absolute">
										<h1 className="font-poppins font-bold text-xl text-center text-white">
											Students
										</h1>
									</div>
									<div className="grid grid-cols-1 h-full">
										<h1 className="text-3xl font-black font-sans pt-[5px] h-[20%]">
											Interested in helping?
										</h1>
										<div>
											<p className="font-bold text-md">
												We are always looking for volunteers and mentors to help us make RowdyHacks
												the best hackathon around! If you are interested in becoming a volunteer or
												mentor, please fill out the form below.
											</p>
										</div>
										<div className="grid grid-cols-2 h-[20%]">
											<div className="flex items-center justify-center">
												<a href="#">
													<button className="bg-emerald-700 font-sans w-[100px] h-[45px] rounded font-bold">
														Volunteer
													</button>
												</a>
											</div>
											<div className="flex items-center justify-center">
												<a href="#">
													<button className="bg-emerald-700 font-sans w-[100px] h-[45px] rounded font-bold">
														Mentor
													</button>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="bg-stone-800 border-emerald-700 border-2 px-[15px] w-full rounded-xl aspect-video text-white py-[20px]">
									<div className="bg-emerald-700 rounded-full w-[150px] h-[30px] mt-[-35px] absolute">
										<h1 className="font-poppins font-bold text-xl text-center text-white">
											Companies
										</h1>
									</div>
									<div className="grid grid-cols-1 h-full">
										<h1 className="text-3xl font-black font-sans pt-[5px] h-[20%]">
											Interested in sponsoring?
										</h1>
										<div>
											<p className="font-bold text-md">
												RowdyHacks would not be possible without our incredible sponsors! If you or
												a group you represent are interested in sponsoring, please click below to
												view our sponsorship packet.
											</p>
										</div>
										<div className="grid grid-cols-2 h-[20%]">
											<div className="flex items-center justify-center col-span-2">
												<a href="#">
													<button className="bg-emerald-700 font-sans w-[150px] h-[45px] rounded font-bold">
														Sponsor Packet
													</button>
												</a>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer speed={0} offset={5} factor={0.5}>
					<Disclosure />
				</ParallaxLayer>
			</Parallax>
		</div>
	);
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const protocol = context.req.headers.referer?.split('://')[0] || 'http';
	const { data: keynoteData } = await RequestHelper.get<KeynoteSpeaker[]>(
		`${protocol}://${context.req.headers.host}/api/keynotespeakers`,
		{},
	);
	const { data: challengeData } = await RequestHelper.get<Challenge[]>(
		`${protocol}://${context.req.headers.host}/api/challenges/`,
		{},
	);
	const { data: answeredQuestion } = await RequestHelper.get<AnsweredQuestion[]>(
		`${protocol}://${context.req.headers.host}/api/questions/faq`,
		{},
	);
	const { data: memberData } = await RequestHelper.get<TeamMember[]>(
		`${protocol}://${context.req.headers.host}/api/members`,
		{},
	);
	const { data: sponsorData } = await RequestHelper.get<Sponsor[]>(
		`${protocol}://${context.req.headers.host}/api/sponsor`,
		{},
	);
	return {
		props: {
			keynoteSpeakers: keynoteData,
			challenges: challengeData,
			answeredQuestion: answeredQuestion,
			fetchedMembers: memberData,
			sponsorCard: sponsorData,
		},
	};
};
