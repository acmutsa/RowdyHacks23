/* 3rd Party Imports */

import type { NextPage } from 'next';
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

export default Home;

export const getServerSideProps: GetServerSideProps<propsType> = async (context) => {
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
			props: {
				keynoteSpeakers: keynoteData,
				challenges: challengeData,
				answeredQuestion: answeredQuestion,
				fetchedMembers: memberData,
				sponsors: sponsorData,
			},
		},
	};
};
