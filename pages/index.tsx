/* 3rd Party Imports */

import type { GetStaticPropsResult, NextPage } from 'next';
import { useRef } from 'react';
import { stats } from '../lib/data';

/* Firebase */

import { RequestHelper } from '../lib/request-helper';
import { firestore } from 'firebase-admin';
import initializeApi from '../lib/admin/init';
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
	initializeApi();
	const db = firestore();

	const keynoteSpeakerSnapshot = db.collection('/keynotespeakers').get();
	const challengeSnapshot = db.collection('/challenges').get();
	const faqSnapshot = db.collection('/faqs').get();
	const memberSnapshot = db.collection('/members').get();
	const sponsorSnapshot = db.collection('/sponsors').get();

	const dataRes = await Promise.all([
		keynoteSpeakerSnapshot,
		challengeSnapshot,
		faqSnapshot,
		memberSnapshot,
		sponsorSnapshot,
	]);

	let keynoteData: KeynoteSpeaker[] = [];
	dataRes[0].forEach((doc) => {
		keynoteData.push(doc.data() as KeynoteSpeaker);
	});

	let challengeData: Challenge[] = [];
	dataRes[1].forEach((doc) => {
		challengeData.push(doc.data() as Challenge);
	});

	let answeredQuestion: AnsweredQuestion[] = [];
	dataRes[2].forEach((doc) => {
		answeredQuestion.push(doc.data() as AnsweredQuestion);
	});

	let memberData: TeamMember[] = [];
	dataRes[3].forEach((doc) => {
		memberData.push(doc.data() as TeamMember);
	});

	let sponsorData: Sponsor[] = [];
	dataRes[4].forEach((doc) => {
		sponsorData.push(doc.data() as Sponsor);
	});

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
