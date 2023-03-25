import React, { useState, useEffect } from 'react';
import CalendarIcon from '@material-ui/icons/CalendarToday';
import PinDrop from '@material-ui/icons/PinDrop';
import ClockIcon from '@material-ui/icons/AccessTime';
import Backpack from '@material-ui/icons/LocalMall';
import firebase from 'firebase';

/**
 * HackCenter Spotlight Card Component
 *
 * Cards for the Spotlight Carousel under HackCenter page
 */

function SpotlightCard(props: any) {
	const startDate = new firebase.firestore.Timestamp(props.startDate._seconds, 0).toDate();
	const endDate = new firebase.firestore.Timestamp(props.endDate._seconds, 0).toDate();

	const speakersData = props.speakers
		? props.speakers.filter((speaker: string) => speaker.length !== 0)
		: undefined;

	var speakerString = '';
	if (speakersData !== undefined && speakersData !== null && speakersData.length !== 0) {
		if (speakersData.length == 2) {
			speakerString = `Hosted by ${speakersData[0]} & ${speakersData[1]}`;
		} else if (speakersData.length == 1) {
			speakerString = `Hosted by ${speakersData[0]}`;
		} else {
			speakerString = 'Hosted by ';
			for (var i = 0; i < speakersData.length; i++) {
				if (i === speakersData.length - 1) {
					speakerString += 'and ' + speakersData[i];
				} else {
					speakerString += speakersData[i] + ', ';
				}
			}
		}
	}
	// console.log('Speaker String: ', speakerString);

	//first match extracts day abbreviation
	//second match extracts month abbreviation and the number day of the month
	var dayString =
		startDate.toString().match(/^[\w]{3}/)[0] +
		', ' +
		startDate.toString().match(/^\w+ (\w{3} \d{1,2})/)[1];

	return (
		<>
			<div className="scrollItem flex flex-col justify-between min-w-3/4 h-[90%] bg-aqua rounded-lg p-3 px-0 my-4 mx-12">
				<h1 className="lg:text-2xl text-4xl md:text-2xl font-black">{props.title}</h1>
				<h3 className="md:text-md text-sm font-black">{speakerString}</h3>
				{/* info section */}
				<div className="flex flex-col justify-around w-full min-h-1/2 rounded-lg bg-darkAqua p-3 pl-0 max-w-sm">
					{/* top row info */}
					<div className="flex sm:flex-row flex-col justify-between">
						<div className="flex gap-1 items-center text-xl">
							{<CalendarIcon style={{ fontSize: 'medium', margin: '2px' }} />}
							<p>{dayString}</p>
						</div>
						<div className="flex gap-1 items-center text-xl">
							{<PinDrop style={{ fontSize: 'medium', margin: '2px' }} />}
							<p>{props.location}</p>
						</div>
					</div>
					{/* botton row info */}
					<div className="flex sm:flex-row flex-col justify-between">
						<div className="flex items-center text-xl">
							{<ClockIcon style={{ fontSize: 'large', margin: '2px' }} />}
							<p>
								{(startDate.getHours() + 24) % 12 || 12}:{startDate.getMinutes() < 10 ? '0' : ''}
								{startDate.getMinutes()} {startDate.getHours() < 12 ? 'AM' : 'PM'} -{' '}
								{(endDate.getHours() + 24) % 12 || 12}:{endDate.getMinutes() < 10 ? '0' : ''}
								{endDate.getMinutes()} {endDate.getHours() < 12 ? 'AM' : 'PM'}
							</p>
						</div>
						<div className="flex items-center text-xl">
							{<Backpack style={{ fontSize: 'medium', margin: '2px' }} />}
							<p>{props.page}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default SpotlightCard;
