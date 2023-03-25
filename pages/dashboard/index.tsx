import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import DashboardHeader from '../../components/DashboardHeader';
import { useUser } from '../../lib/profile/user-data';
import { useAuthContext } from '../../lib/user/AuthContext';
import AnnouncementCard from './Components/AnnouncementCards';
import Sidebar from './Components/Sidebar';
import firebase from 'firebase';
import 'firebase/messaging';
import { GetServerSideProps } from 'next';
import { RequestHelper } from '../../lib/request-helper';
import { useFCMContext } from '../../lib/service-worker/FCMContext';
import SpotlightCard from './Components/SpotlightCard';
import ChallengeCard from './Components/ChallengeCard';

import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Image from 'next/image';
import QuickLink from './Components/QuickLink';

/**
 * The dashboard / hack center.
 *
 *
 * Landing: /dashboard
 *
 */

export default function Dashboard(props: {
	announcements: Announcement[];
	scheduleEvents: ScheduleEvent[];
	challenges: Challenge[];
}) {
	const { isSignedIn, hasProfile } = useAuthContext();
	const user = useUser();
	const role = user.permissions?.length > 0 ? user.permissions[0] : '';
	const [announcements, setAnnouncements] = useState<Announcement[]>([]);
	const [dateTime, setdateTime] = useState(new Date());
	const [eventCount, setEventCount] = useState(0);
	const [challenges, setChallenges] = useState<Challenge[]>([]);

	useEffect(() => {
		setAnnouncements(props.announcements);
		// ordering challenges as speficied in firebase
		setChallenges(props.challenges.sort((a, b) => (a.rank > b.rank ? 1 : -1)));
		if (firebase.messaging.isSupported()) {
			firebase.messaging().onMessage((payload) => {
				setAnnouncements((prev) => [
					JSON.parse(payload.data.notification) as Announcement,
					...prev,
				]);
			});
		}

		setdateTime(new Date());
		setEventCount(
			props.scheduleEvents.reduce(
				(total, event, idx) =>
					validTimeDate(event.startTimestamp, event.endTimestamp) ? total + 1 : total,
				0,
			),
		);
	}, []);

	// Check if spotlight time/date interval encompasses current time/date
	const validTimeDate = (startDate, endDate) => {
		const currDate = firebase.firestore.Timestamp.now();
		if (currDate.seconds > startDate._seconds && currDate.seconds < endDate._seconds) {
			return true;
		} else {
			return false;
		}
	};

	var eventCountString;
	if (eventCount === 1) {
		eventCountString = 'There is 1 event is happening right now!';
	} else {
		eventCountString = `There are ${eventCount} events are happening right now!`;
	}

	if (!isSignedIn)
		return (
			<div className="text-2xl font-black text-center">Please sign-in to view your dashboard</div>
		);

	return (
		<>
			<div className="flex flex-wrap flex-grow">
				<Head>
					<title>RowdyHacks Dashboard</title>
					<meta name="description" content="HackPortal's Dashboard" />
				</Head>
				<section
					id="mainContent"
					className="w-full px-6 py-3 bg-rh-deep-purple min-h-screen overflow-y-scroll absolute top-0 left-0 pt-[64px]"
				>
					<h2 className="mt-16 font-white font-permanent-marker font-bold text-2xl text-white flex">
						Welcome, Adventurer
					</h2>
					<div className="flex items-center">
						<img></img>
						<h1 className="md:text-6xl text-3xl font-poppins font-black text-rh-sunset">
							Dashboard
						</h1>
					</div>

					<DashboardHeader />
					{/* Spotlight & Announcements */}
					<div className="flex flex-wrap justify-around my-12  gap-y-4">
						{/* Spotlight Events */}
						{/* Hides spotlight if no events are going on */}
						{eventCount > 0 && (
							<div className="sm:w-[47%] w-full max-h-96 p-4 bg-rh-sunset text-rh-deep-purple rounded-md">
								<h1 className="md:text-3xl text-xl font-black font-permanent-marker">Spotlight</h1>
								<div>{eventCountString}</div>
								<Swiper
									modules={[Navigation, Pagination, A11y]}
									spaceBetween={50}
									slidesPerView={1}
									navigation
									loop={false}
									pagination={{ clickable: true }}
								>
									{props.scheduleEvents.map(
										({ title, speakers, startTimestamp, endTimestamp, location, page }, idx) =>
											validTimeDate(startTimestamp, endTimestamp) && (
												<SwiperSlide key={idx}>
													<div className="h-[15rem] w-full bg-rh-white rounded-md">
														{/* Customize Spotlight card design for carousel in SpotlightCard component file*/}
														<SpotlightCard
															title={title}
															speakers={speakers}
															startDate={startTimestamp}
															location={location}
															endDate={endTimestamp}
															page={page}
															eventCount={eventCount}
														/>
													</div>
												</SwiperSlide>
											),
									)}
								</Swiper>
								<div />
							</div>
						)}
						{/* Quick Links */}
						<div className="sm:w-[47%] w-full max-h-96 overflow-scroll bg-white rounded-md p-4">
							<h1 className="md:text-3xl text-xl font-black text-rh-deep-purple font-permanent-marker">
								Quick Links
							</h1>
							<div className="flex flex-col gap-y-1 mt-2">
								<QuickLink
									title="RowdyHacks WiFi Info"
									href="https://gist.githubusercontent.com/Lermatroid/e9eb864e24e5081521e57feddf1d6d0e/raw/9c8dda2a676043aa702673aa33f266d2a3b84db6/gistfile1.txt"
								/>
								<QuickLink title="Parking Map" href="https://i.imgur.com/rBJhkAO.png" />
								<QuickLink title="Adventure Guide" href="/guide" />
								{/* <QuickLink title="Dummy Link" href="#" />
								<QuickLink title="Dummy Link" href="#" />
								<QuickLink title="Dummy Link" href="#" />
								<QuickLink title="Dummy Link" href="#" /> */}
							</div>
						</div>

						{/* Announcements */}
						{/* <div className={`${eventCount > 0 ? 'lg:w-2/5' : 'lg:w-full'} w-full h-96`}>
							<h1 className="md:text-3xl text-xl font-black">Announcements</h1>
							<div id="announcement-items" className="overflow-y-scroll h-9/10">
								{announcements.map((announcement, idx) => {
									const dateObj = new Date(announcement.timestamp!);
									const hour = dateObj.getHours(),
										minutes = dateObj.getMinutes();

									const time = `${hour < 10 ? '0' : ''}${hour}:${
										minutes < 10 ? '0' : ''
									}${minutes}`;

									return (
										<AnnouncementCard key={idx} text={announcement.announcement} time={time} />
									);
								})}
							</div>
						</div> */}
					</div>

					{/* Challenges */}
					<div className="flex flex-col items-center my-8 text-rh-white">
						<h1 className="md:text-3xl text-xl font-black font-permanent-marker mb-5">
							Challenges
						</h1>
						{/* Cards */}
						<QuickLink
							href="https://guide.rowdyhacks.org/tracks-challenges-prizes"
							title={'View Challenges'}
						/>
						<div className="challengeGrid my-8">
							{challenges.map(({ title, description, prizes }, idx) => (
								<ChallengeCard key={idx} title={title} description={description} prizes={prizes} />
							))}
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async (context) => {
	const protocol = context.req.headers.referer?.split('://')[0] || 'http';
	// const { data: announcementData } = await RequestHelper.get<Announcement[]>(
	// 	`${protocol}://${context.req.headers.host}/api/announcements/`,
	// 	{},
	// );
	// const { data: eventData } = await RequestHelper.get<ScheduleEvent[]>(
	// 	`${protocol}://${context.req.headers.host}/api/schedule/`,
	// 	{},
	// );
	// const { data: challengeData } = await RequestHelper.get<Challenge[]>(
	// 	`${protocol}://${context.req.headers.host}/api/challenges/`,
	// 	{},
	// );

	return {
		props: {
			announcements: [],
			scheduleEvents: [],
			challenges: [],
		},
	};
};
