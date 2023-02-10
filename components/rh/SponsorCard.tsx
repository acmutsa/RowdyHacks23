import type { FunctionComponent } from 'react';
import { titleCase } from 'title-case';
import Link from 'next/link';
import Image from 'next/image';
import { BsPower } from 'react-icons/bs';
import { MdSignalWifiStatusbar3Bar } from 'react-icons/md';
import Tilt from 'react-parallax-tilt';

const SponsorCard: FunctionComponent<Sponsor> = (sponsor) => {
	// return (
	// 	<Link href={sponsor.link}>
	// 		<div className="w-full aspect-[3/2] flex items-center justify-center relative shadow-xl hover:cursor-pointer bg-blue-800 rounded-xl border-white border-2">
	// 			<Image
	// 				layout="fill"
	// 				objectFit="contain"
	// 				src={sponsor.image}
	// 				alt={`${titleCase(sponsor.reference)} Logo`}
	// 				className="scale-90"
	// 			/>
	// 		</div>
	// 	</Link>
	// );

	return (
		<Link href={sponsor.link} target="_blank">
			<Tilt
				perspective={800}
				gyroscope={false}
				tiltReverse={true}
				className="parallax-effect-img w-full !aspect-[3/2] flex items-center justify-center shadow-xl box-border hover:cursor-pointer rounded-t-xl border-b-0 border-gray-900 border-4 bg-blue-900"
			>
				<div className="absolute top-0 bg-gray-900 h-[15px] w-[20%] rounded-b-lg flex justify-center">
					<div className="h-[50%] w-[30%] bg-gray-600 rounded-full mt-[2%] mr-[2px]"></div>
					<div className="h-[50%] aspect-square bg-gray-600 rounded-full mt-[2%] ml-[2px]"></div>
				</div>
				<img
					src={sponsor.image}
					alt={`${titleCase(sponsor.reference)} Logo`}
					className="inner-parallax-element !aspect-[3/2] object-contain"
				/>
				<div className="absolute mb-[-25px] w-[calc(100%+8px)] bottom-0 h-[25px] bg-gray-900 text-white grid grid-cols-4 border-gray-900 border-x-4 rounded-b-xl px-[5px]">
					<div className="flex items-center">
						<div className="h-[15px] w-[15px] bg-red-500 rounded-full mr-[2px]"></div>
						<div className="h-[15px] w-[15px] bg-yellow-500 rounded-full mx-[2px]"></div>
						<div className="h-[15px] w-[15px] bg-green-500 rounded-full ml-[2px]"></div>
					</div>
					<div className="font-sans font-bold flex items-center justify-center text-xs col-span-2">
						<p className="leading-[20px]">RowdyHacks 2023</p>
					</div>
					<div className="flex items-center justify-end">
						<MdSignalWifiStatusbar3Bar className="mx-[5px]" />
						<BsPower className="ml-[5px]" />
					</div>
				</div>
			</Tilt>
		</Link>
	);
};

export default SponsorCard;
