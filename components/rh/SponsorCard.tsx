import type { FunctionComponent } from 'react';
import { titleCase } from 'title-case';
import Link from 'next/link';
import Image from 'next/image';

const SponsorCard: FunctionComponent<Sponsor> = (sponsor) => {
	return (
		<Link href={sponsor.link}>
			<div
				className="w-full aspect-[3/2] bg-white flex items-center justify-center relative shadow-xl hover:cursor-pointer p-[5px]"
				style={{
					borderWidth: '3px',
					borderStyle: 'solid',
					borderImage: `linear-gradient(to right, #009ffd, #2a2a72)`,
					borderImageSlice: '1',
					borderRadius: '0.75rem',
				}}
			>
				<Image
					layout="fill"
					objectFit="contain"
					src={sponsor.image}
					alt={`${titleCase(sponsor.reference)} Logo`}
				/>
			</div>
		</Link>
	);
};

export default SponsorCard;
