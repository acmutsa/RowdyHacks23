import { type FunctionComponent, type MutableRefObject, useRef, useEffect } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import Image from 'next/image';

interface MountainsProps {
	containterRef: MutableRefObject<any>;
}

export const Mountains: FunctionComponent = () => {
	let contentWrapperRef = useRef(null);

	const { scrollYProgress } = useScroll({
		target: contentWrapperRef,
		offset: ['start start', 'end start'],
	});

	const springyScrollProg = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

	const sky = useTransform(springyScrollProg, [0, 1], ['0%', '20%']);
	const header = useTransform(springyScrollProg, [0, 1], ['0%', '80%']);
	const l2 = useTransform(springyScrollProg, [0, 1], ['0%', '50%']);
	const l3 = useTransform(springyScrollProg, [0, 1], ['0%', '32%']);
	const l4 = useTransform(springyScrollProg, [0, 1], ['0%', '30%']);
	const l5 = useTransform(springyScrollProg, [0, 1], ['0%', '20%']);

	const opacity = useTransform(scrollYProgress, [0, 1], ['100%', '0%']);
	return (
		<section ref={contentWrapperRef} className="h-screen relative">
			<motion.div className="h-screen sky-gradient absolute w-full will-change-transform"></motion.div>
			<motion.div
				style={{ y: l3 }}
				className="absolute w-full overflow-x-hidden will-change-transform"
			>
				{/* TODO: Make this more dynamic, split the clouds into different layers and then have then move at different speeds */}
				{/* TODO: Fix bug where animation sometimes skips */}
				<div className="cloud-scroll-bg will-change-transform"></div>
			</motion.div>
			<motion.div
				style={{ y: header }}
				className="w-full flex md:flex-row flex-col justify-center absolute items-center pt-[calc(100vh/4)] will-change-transform"
			>
				<Image
					src="/img/logos/rh_landing.svg"
					width={175}
					height={175}
					className="h-[100px] w-[100px]"
				></Image>
				<div className="ml-[5px]">
					<h1 className="md:text-8xl text-5xl font-black font-sans text-white">RowdyHacks</h1>
					<h2 className="md:text-4xl text-3xl font-black font-permanent-marker italic text-white text-center">
						Into The Unknown
					</h2>
				</div>
			</motion.div>
			<motion.div
				style={{ y: l2 }}
				className="w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform"
			>
				<img
					src="/img/landscape/p/layer_2.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</motion.div>
			<motion.div
				style={{ y: l3 }}
				className="w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform"
			>
				<img
					src="/img/landscape/p/layer_3.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</motion.div>
			<motion.div
				style={{ y: l4 }}
				className="w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform"
			>
				<img
					src="/img/landscape/p/layer_4.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</motion.div>
			<motion.div
				style={{ y: l5 }}
				className="w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform"
			>
				<img
					src="/img/landscape/p/layer_5.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</motion.div>
			<div className="w-full h-full absolute overflow-x-hidden flex justify-center items-end bottom-0">
				<img
					src="/img/landscape/p/layer_6.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</div>
		</section>
	);
};

export const MountainCaves: FunctionComponent = () => {
	return (
		<section className="min-h-screen bg-[#2d112b] relative z-10">
			<div className="w-full min-h-screen grid md:grid-cols-2 grid-cols-1 max-w-[1000px] mx-auto pt-[100px]">
				<div className="max-h-[280px] flex flex-col justify-center px-[5px]">
					<h3 className="font-black font-permanent-marker text-white text-4xl mb-[10px] text-center md:text-left">
						About Us
					</h3>
					<p className="font-sans text-white text-lg font-bold text-center md:text-left">
						RowdyHacks is a free, weekend-long, overnight hackathon hosted at UTSA! Students can
						join us to network, code, collaborate, and compete. We welcome hackers from all
						disciplines, backgrounds, & technical levels!
					</p>
				</div>
				<div className="flex items-center justify-center max-h-[280px]">
					<Image src={'/img/logos/rh_sunset.svg'} width={175} height={175}></Image>
					<div className="h-[175px] ml-[10px] flex flex-col justify-center text-3xl font-sans text-[#ff583d] font-black">
						<h1 className="w-full">LET'S</h1>

						<h1 className="w-full">GET</h1>

						<h1 className="w-full font-permanent-marker tracking-wider">ROWDY</h1>
					</div>
				</div>
				<div className="md:flex items-start justify-center hidden">
					<Image src={'/img/mountain_camping_site.png'} width={280} height={280} />
				</div>
				<div className="max-h-[280px] flex flex-col justify-center px-[5px]">
					<h3 className="font-black font-permanent-marker text-white text-4xl mb-[10px] md:mt-0 mt-[100px] text-center md:text-left">
						Why attend?
					</h3>
					<p className="font-sans text-white text-lg font-bold text-center md:text-left">
						RowdyHacks is a free, weekend-long, overnight hackathon hosted at UTSA and the second
						largest hackathon in Texas! Students can join us to network, code, collaborate, and
						compete. We welcome hackers from all disciplines, backgrounds, & technical levels!
					</p>
				</div>
			</div>
		</section>
	);
};
