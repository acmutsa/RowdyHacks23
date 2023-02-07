/* 3rd Party Imports */

import type { GetStaticPropsResult, NextPage } from 'next';
import { GetServerSideProps } from 'next';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { stats } from '../lib/data';

/* Firebase */

import { RequestHelper } from '../lib/request-helper';
import 'firebase/messaging';
import 'firebase/storage';

/* Imports */

import { Mountains, MountainCaves } from '../components-rh/landing-sections/Mountains';
import { Ocean } from '../components-rh/landing-sections/Ocean';
import { Forest } from '../components-rh/landing-sections/Forests';
import Disclosure from '../components/Disclosure';
import { data } from 'jquery';

interface propsType {
	props: {
		keynoteSpeakers: KeynoteSpeaker[];
		challenges: Challenge[];
		answeredQuestion: AnsweredQuestion[];
		fetchedMembers: TeamMember[];
		sponsors: Sponsor[];
	};
}

const Home: NextPage<propsType> = ({ props }) => {
	let contentWrapperRef = useRef(null);

	return (
		<div className="w-full absolute top-0">
			<Mountains />
			<MountainCaves stats={stats} />
			<Ocean sponsors={props?.sponsors} />
			<Forest />
			<Disclosure />
		</div>
	);
};

export async function getStaticProps({ params }: any): Promise<GetStaticPropsResult<propsType>> {
	const { data: keynoteData } = await RequestHelper.get<KeynoteSpeaker[]>(
		`${process.env.NEXT_PUBLIC_APP_URL}/api/keynotespeakers`,
		{},
	);
	const { data: challengeData } = await RequestHelper.get<Challenge[]>(
		`${process.env.NEXT_PUBLIC_APP_URL}/api/challenges/`,
		{},
	);
	const { data: answeredQuestion } = await RequestHelper.get<AnsweredQuestion[]>(
		`${process.env.NEXT_PUBLIC_APP_URL}/api/questions/faq`,
		{},
	);
	const { data: memberData } = await RequestHelper.get<TeamMember[]>(
		`${process.env.NEXT_PUBLIC_APP_URL}/api/members`,
		{},
	);
	const { data: sponsorData } = await RequestHelper.get<Sponsor[]>(
		`${process.env.NEXT_PUBLIC_APP_URL}/api/sponsor`,
		{},
	);
	return {
		props: {
			props: {
				keynoteSpeakers: keynoteData,
				challenges: challengeData,
				answeredQuestion: answeredQuestion,
				fetchedMembers: memberData,
				sponsors: sponsorData,
			},
		},
		revalidate: 60,
	};
}

export default Home;
