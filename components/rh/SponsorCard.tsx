import type { FunctionComponent } from 'react';
import { titleCase } from 'title-case';
import Link from 'next/link';
import Image from 'next/image';

const SponsorCard: FunctionComponent<Sponsor> = (sponsor) => {
	return (
		<Link href={sponsor.link}>
			<div className="w-full aspect-[3/2] flex items-center justify-center relative shadow-xl hover:cursor-pointer bg-blue-800 rounded-xl border-white border-2">
				<Image
					layout="fill"
					objectFit="contain"
					src={sponsor.image}
					alt={`${titleCase(sponsor.reference)} Logo`}
					className="scale-90"
				/>
			</div>
		</Link>
	);
};

export default SponsorCard;
