import { type FunctionComponent, type ReactElement, useRef, Fragment, useEffect } from 'react';
import { useScroll, useSpring, useTransform, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';

interface teamCardProps {
	name: string;
	role: string;
	linkedin?: string;
	github?: string;
	image: string;
}

interface spaceProps {
	teamMembers: TeamMember[];
}

export const TeamMemberItem: FunctionComponent<teamCardProps> = ({
	name,
	role,
	linkedin,
	github,
	image,
}) => {
	return (
		<div
			className={`will-change-transform relative mx-auto bg-white bg-opacity-5 rounded-xl aspect-[9/12] w-full max-w-[264px] before:absolute before:top-0 before:left-0 before:h-full before:w-full team-card-gradient before:opacity-0 before:[filter:blur(120px)] backdrop-blur border-[1px]`}
		>
			<div className="h-full internal-bg w-full z-10 absolute flex flex-col items-center justify-center p-2 top-0 left-0 rounded-2xl border-white">
				<Image
					src={`/img/team/${image}`}
					height={150}
					width={150}
					objectFit="cover"
					objectPosition={'center center'}
					className="rounded-full"
					quality={50}
					priority
				/>

				<h1 className="text-white font-sans font-black mt-5">{name}</h1>
				<h2 className="text-white font-sans italic">{role}</h2>
				<h3 className="flex items-center text-2xl mt-4 text-white">
					{linkedin && linkedin.length > 0 && (
						<a href={`https://linkedin.com/in/${linkedin}`} className="mx-2">
							<FaLinkedin />
						</a>
					)}
					{github && github.length > 0 && (
						<a href={`https://github.com/${github}`} className="mx-2">
							<FaGithub />
						</a>
					)}
				</h3>
			</div>
		</div>
	);
};

export const Space: FunctionComponent<spaceProps> = ({ teamMembers }) => {
	useEffect(() => {
		console.log('Rerendered Space');
	});
	let contentWrapperRef = useRef(null);
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true,
	});

	// const { scrollYProgress } = useScroll({
	// 	target: contentWrapperRef,
	// 	offset: ['start start', 'end start'],
	// });

	// const heading = useTransform(scrollYProgress, [0, 0.1], ['90deg', '0deg']);

	return (
		<section
			ref={contentWrapperRef}
			className="min-h-screen bg-black bg-[url('/img/landscape/space/stars.png')] bg-repeat bg-fixed md:pt-96 pt-40"
		>
			<div style={{ perspective: '1000px' }} className="overflow-hidden mb-32">
				{/* <motion.div style={{ rotateX: heading }}>
					<h1 className="font-sans text-gray-200 font-black text-9xl text-center">Meet The Team</h1>
				</motion.div> */}
				<h1
					ref={ref}
					className="font-sans text-gray-200 font-black md:text-9xl text-6xl text-center"
				>
					Meet The Team
				</h1>
			</div>
			<div
				className={`grid md:grid-cols-4 grid-cols-1 px-5 max-w-[1200px] mx-auto gap-10 will-change-transform before:absolute before:top-0 before:left-0 before:h-full before:w-full team-card-gradient before:opacity-0 before:[filter:blur(120px)] backdrop-blur${
					inView ? ' space-card-bg-ani' : ''
				}`}
			>
				<Fragment>
					{(() => {
						let sortedMembers = Array.from(teamMembers);
						sortedMembers.sort((a, b) => a.name.localeCompare(b.name));

						const itemsToRenderTop: ReactElement[] = [];
						const itemsToRenderBottom: ReactElement[] = [];

						for (const member of sortedMembers) {
							if (member.rank != 1) {
								itemsToRenderBottom.push(
									<TeamMemberItem
										key={member.name}
										name={member.name}
										role={member.description}
										linkedin={member.linkedin}
										github={member.github}
										image={member.fileName}
									/>,
								);
							} else {
								itemsToRenderTop.push(
									<TeamMemberItem
										key={member.name}
										name={member.name}
										role={member.description}
										linkedin={member.linkedin}
										github={member.github}
										image={member.fileName}
									/>,
								);
							}
						}
						return [...itemsToRenderTop, ...itemsToRenderBottom];
					})()}
				</Fragment>
			</div>
			<div className="flex items-center justify-center flex-col min-h-screen p-5">
				<h2 className="text-white text-center font-poppins md:text-4xl text-3xl font-black">
					Will You
				</h2>
				<h1 className="text-white text-center md:text-8xl text-6xl font-poppins font-black">
					Enter The Unknown?
				</h1>
				<div className="w-full max-w-[475px] relative hover:scale-125 ease-in-out duration-150 mt-10">
					<Link href={'auth'}>
						<div className="relative max-w-[475px] mx-auto mb-10">
							<div className="absolute z-[5] h-[64px] w-full max-w-[500px] hover:cursor-pointer bg-white mx-auto flex items-center justify-center register-clip">
								<h2 className="md:text-5xl text-3xl font-sans font-black italic text-center text-black">
									REGISTER NOW!
								</h2>
							</div>
							<div className="translate-y-2 absolute h-[64px] w-full max-w-[500px] hover:cursor-pointer bg-gray-400 mx-auto flex items-center justify-center register-clip"></div>
						</div>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Space;
