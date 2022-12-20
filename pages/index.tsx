import type { NextPage } from 'next';
import Image from 'next/image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Home: NextPage = () => {
	return (
		<Parallax
			pages={1}
			className={'max-h-[calc(100vh-64px)] w-full mt-[64px] overflow-x-hidden'}
			style={{ perspective: '100px' }}
		>
			<ParallaxLayer offset={0} speed={2.5} className="sky-gradient-2nd" />
			<ParallaxLayer offset={0} speed={2.5} className="pt-[25%]">
				<div className="w-full flex justify-center items-center">
					<Image
						src="/img/logos/rh_landing.svg"
						width={150}
						height={150}
						className="h-[100px] w-[100px]"
					></Image>
					<div className="ml-[5px]">
						<h1 className="text-6xl font-black font-sans text-[#501c8c] underline">RowdyHacks</h1>
						<h2 className="text-2xl font-black italic text-[#501c8c]">Into The Unknown</h2>
					</div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={2.5} className="flex items-end justify-center">
				<div>
					<img src="/img/landscape/p/layer_2.png" className="p_l_2"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={2.5} className="flex items-end justify-center">
				<div>
					<img src="/img/landscape/p/layer_3.png" className="p_l_3"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={2.5} className="flex items-end justify-center">
				<div>
					<img src="/img/landscape/p/layer_4.png" className="p_l_4"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={2.5} className="flex items-end justify-center">
				<div>
					<img src="/img/landscape/p/layer_5.png" className="p_l_5"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0} speed={2.5} className="flex items-end justify-center">
				<div>
					<img src="/img/landscape/p/layer_6.png"></img>
				</div>
			</ParallaxLayer>
		</Parallax>
	);
};

const Old: NextPage = () => {
	return (
		<div className="bg-black">
			<div className="min-h-[calc(100vh-64px)] sky-gradient-2nd max-w-[1920px] mx-auto overflow-x-hidden flex justify-center items-end">
				<div className="w-full grid grid-cols-1 grid-rows-1">
					<img src="/img/landscape/p/layer_4.png" className="w-min-full col-[1] row-[1]"></img>
					<img src="/img/landscape/p/layer_5.png" className="w-min-full col-[1] row-[1]"></img>
					<img src="/img/landscape/p/layer_6.png" className="w-min-full col-[1] row-[1]"></img>
				</div>
			</div>
		</div>
	);
};

export default Home;
