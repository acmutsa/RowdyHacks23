import type { FunctionComponent } from 'react';
import { titleCase } from 'title-case';
import Link from 'next/link';

const SponsorCard: FunctionComponent<Sponsor> = (sponsor) => {
	return (
		<Link href={sponsor.link}>
			<div className="w-full aspect-[3/2] bg-white flex items-center justify-center rounded-xl">
				<img width={'400px'} src={sponsor.image}></img>
			</div>
		</Link>
	);
};

export default SponsorCard;
