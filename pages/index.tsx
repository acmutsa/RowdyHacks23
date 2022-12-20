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
	return (
		<Parallax pages={3} className={'w-full overflow-hidden top-0 left-0'}>
			<ParallaxLayer factor={1} speed={1} className="sky-gradient-2nd overflow-hidden" />
			<ParallaxLayer factor={1} speed={1} className="overflow-hidden">
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
			<ParallaxLayer factor={1} speed={0.2} className="overflow-hidden">
				<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
					<img src="/img/landscape/p/layer_2.png" className="min-w-[3000px] object-cover"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer factor={1} speed={0.4} className="overflow-hidden">
				<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
					<img src="/img/landscape/p/layer_3.png" className="min-w-[3000px] object-cover"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer factor={1} speed={0.6} className="overflow-hidden">
				<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
					<img src="/img/landscape/p/layer_4.png" className="min-w-[3000px] object-cover"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer factor={1} speed={0.8} className="overflow-hidden">
				<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
					<img src="/img/landscape/p/layer_5.png" className="min-w-[3000px] object-cover"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer factor={1} speed={1} className="overflow-hidden">
				<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
					<img src="/img/landscape/p/layer_6.png" className="min-w-[3000px] object-cover"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0.99999} speed={1} className="z-10 bg-[#2d112b]">
				<div className="w-full h-full grid grid-cols-2 max-w-[1000px] mx-auto pt-[100px]">
					<div className="max-h-[280px] flex flex-col justify-center">
						<h3 className="font-black font-permanent-marker italic text-white text-4xl mb-[10px]">
							About Us
						</h3>
						<p className="font-sans text-white text-lg font-bold">
							RowdyHacks is a free, weekend-long, overnight hackathon hosted at UTSA and the second
							largest hackathon in Texas! Students can join us to network, code, collaborate, and
							compete. We welcome hackers from all disciplines, backgrounds, & technical levels!
						</p>
					</div>
					<div className="flex items-center justify-center max-h-[280px]">
						<Image src={'/img/logos/rh_landing.svg'} width={175} height={175}></Image>
					</div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={1} speed={1} className="z-10 bg-blue-500"></ParallaxLayer>
		</Parallax>
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
