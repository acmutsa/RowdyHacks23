import { type FunctionComponent } from 'react';
import SponsorCard from '../../components/rh/SponsorCard';

interface propsType {
	sponsors: Sponsor[];
}

export const Ocean: FunctionComponent<propsType> = ({ sponsors }) => {
	return (
		<div className="ocean-gradient">
			<img
				className="w-full relative top-0 left-0 select-none drag-none"
				src="/img/borders/cave_down.svg"
			></img>
			<br />
			<br />
			<br />
			<div className="max-w-[1200px] mx-auto pb-[30px]">
				<h1 className="font-permanent-marker text-6xl font-bold text-white pb-[5px] border-b-2 border-b-white">
					Sponsors
				</h1>
			</div>
			<div className="w-full max-w-[1200px] overflow-y-visible mx-auto px-[5px] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 gap-y-12">
				{(() => {
					let sponsorCards = [];
					if (sponsors) {
						for (const sponsor of sponsors) {
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
					src="/img/borders/trees_up.svg"
				></img>
			</div>
		</div>
	);
};
