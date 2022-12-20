import type { NextPage } from 'next';
import Image from 'next/image';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Home: NextPage = () => {
	return (
		<Parallax pages={3} className={'w-full overflow-hidden top-0 left-0'}>
			<ParallaxLayer factor={1} speed={1} className="sky-gradient-2nd overflow-hidden" />
			<ParallaxLayer factor={1} speed={1} className="overflow-hidden">
				<div className="w-full flex justify-center items-center pt-[calc(100vh/4)]">
					<Image
						src="/img/logos/rh_landing.svg"
						width={175}
						height={175}
						className="h-[100px] w-[100px]"
					></Image>
					<div className="ml-[5px]">
						<h1 className="text-8xl font-black font-sans text-white">RowdyHacks</h1>
						<h2 className="text-4xl font-black font-permanent-marker italic text-white text-center">
							Into The Unknown
						</h2>
					</div>
				</div>
			</ParallaxLayer>
			<ParallaxLayer factor={1} speed={0.2} className="overflow-hidden">
				<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
					<img src="/img/landscape/p/layer_2.png" className="min-w-[3000px] object-cover"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer factor={1} speed={0.4} className="overflow-hidden">
				<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
					<img src="/img/landscape/p/layer_3.png" className="min-w-[3000px] object-cover"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer factor={1} speed={0.6} className="overflow-hidden">
				<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
					<img src="/img/landscape/p/layer_4.png" className="min-w-[3000px] object-cover"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer factor={1} speed={0.8} className="overflow-hidden">
				<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
					<img src="/img/landscape/p/layer_5.png" className="min-w-[3000px] object-cover"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer factor={1} speed={1} className="overflow-hidden">
				<div className="w-full h-full overflow-x-hidden flex justify-center items-end">
					<img src="/img/landscape/p/layer_6.png" className="min-w-[3000px] object-cover"></img>
				</div>
			</ParallaxLayer>
			<ParallaxLayer offset={0.99999} speed={1} className="z-10 bg-red-500"></ParallaxLayer>
			<ParallaxLayer offset={2} speed={1} className="z-10 bg-blue-500"></ParallaxLayer>
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
