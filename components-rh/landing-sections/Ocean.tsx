import { type FunctionComponent } from 'react';
import Image from 'next/image';
import SponsorCard from '../../components/rh/SponsorCard';
import { ReactElement } from 'react-markdown/lib/react-markdown';

interface propsType {
	sponsors: Sponsor[];
}

const sponsorTierRanking = {
	Gold: 3,
	Silver: 2,
	Bronze: 1,
};

export const Ocean: FunctionComponent<propsType> = ({ sponsors }) => {
	return (
		<div className="ocean-gradient relative" id="partners">
			<img
				className="w-full relative top-0 left-0 select-none drag-none"
				src="https://static.rowdyhacks.org/img/borders/cave_down.svg"
			></img>
			<br />
			<br />
			<br />
			<br className="md:hidden" />
			<br className="md:hidden" />
			<br className="md:hidden" />
			<br className="md:hidden" />
			<br className="md:hidden" />
			<br className="md:hidden" />
			<div className="max-w-[1200px] mx-auto pb-[30px] px-[5px] lg:flex items-center relative hidden">
				<Image
					src={'https://static.rowdyhacks.org/img/logos/rh_aqua.svg'}
					width={150}
					height={150}
				></Image>
				<h1 className="font-poppins text-9xl text-[rgb(0,102,204)] font-black pl-[10px]">
					Partners
				</h1>
			</div>
			<div className="max-w-[1200px] mx-auto pb-[30px] px-[5px] lg:hidden items-center relative flex justify-center">
				<Image
					src={'https://static.rowdyhacks.org/img/logos/rh_aqua.svg'}
					width={75}
					height={75}
				></Image>
				<h1 className="font-poppins text-6xl text-[rgb(0,102,204)] font-black pl-[10px] text-center">
					Partners
				</h1>
			</div>
			<div className="w-full max-w-[1200px] overflow-y-visible mx-auto px-[5px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 gap-y-12">
				{(() => {
					const goldSponsors: Sponsor[] = [];
					const silverSponsors: Sponsor[] = [];
					const bronzeSponsors: Sponsor[] = [];
					const otherSponsors: Sponsor[] = [];

					for (const sponsor of sponsors) {
						switch (sponsor.tier) {
							case 'Gold':
								goldSponsors.push(sponsor);
								break;
							case 'Silver':
								silverSponsors.push(sponsor);
								break;
							case 'Bronze':
								bronzeSponsors.push(sponsor);
								break;
							default:
								otherSponsors.push(sponsor);
								break;
						}
					}

					const organizedSponsors = [
						...goldSponsors,
						...silverSponsors,
						...bronzeSponsors,
						...otherSponsors,
					];
					const sponsorCards: ReactElement[] = [];
					if (organizedSponsors) {
						for (const sponsor of organizedSponsors) {
							console.log('Sponsor Data: ', sponsor);
							sponsorCards.push(
								<SponsorCard key={`${sponsor.reference}_${sponsor.tier}`} {...sponsor} />,
							);
						}
					}
					return sponsorCards;
				})()}
			</div>
			<div className="w-full relative bottom-0 left-0">
				<img className="w-full mb-[-1px] " src="/img/landscape/oceanfloor.svg"></img>
				<img
					className="w-full rotate-180 mb-[-1px] bg-[#00213E]"
					src="https://static.rowdyhacks.org/img/borders/trees_up.svg"
				></img>
			</div>
		</div>
	);
};
