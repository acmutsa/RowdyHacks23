import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div className="min-h-[calc(100vh-64px)] sky-gradient-2nd">
			<div className="min-h-">
				<Image
					src="https://imagedelivery.net/XXZbKmdYGGT6KId3pavruw/a2cd4036-0cf2-449e-0c66-8bc43445ea00/image"
					alt="Mountains"
					layout="fill"
				/>
			</div>
		</div>
	);
};

export default Home;
