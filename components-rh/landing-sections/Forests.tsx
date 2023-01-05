import { type FunctionComponent } from 'react';

export const Forest: FunctionComponent = () => {
	return (
		<div className="relative min-h-screen bg-emerald-900 overflow-x-hidden">
			<div className="w-full h-full relative ">
				<img
					src="/img/landscape/trees.svg"
					className="min-w-[calc(100%+100px)] translate-x-[-50px] translate-y-[-20vh]"
				></img>
			</div>
			<div className="absolute left-0 top-0 w-full f-hull">
				<div className="w-full h-full mx-auto max-w-[1000px] grid grid-cols-2 gap-2">
					<div className="col-span-2 flex items-center min-h-[20vh] ">
						<h1 className="font-permanent-marker text-6xl font-bold text-emerald-700">
							Work With Us
						</h1>
					</div>
					<div>
						<div className="bg-stone-800 border-emerald-700 border-2 px-[15px] w-full rounded-xl aspect-video text-white py-[20px]">
							<div className="bg-emerald-700 rounded-full w-[150px] h-[30px] mt-[-35px] absolute">
								<h1 className="font-poppins font-bold text-xl text-center text-white">Students</h1>
							</div>
							<div className="grid grid-cols-1 h-full">
								<h1 className="text-3xl font-black font-sans pt-[5px] h-[20%]">
									Interested in helping?
								</h1>
								<div>
									<p className="font-bold text-md">
										We are always looking for volunteers and mentors to help us make RowdyHacks the
										best hackathon around! If you are interested in becoming a volunteer or mentor,
										please fill out the form below.
									</p>
								</div>
								<div className="grid grid-cols-2 h-[20%]">
									<div className="flex items-center justify-center">
										<a className="bg-emerald-900 rounded" href="#">
											<button className="bg-emerald-700 translate-y-[-4px] hover:translate-y-0 font-sans w-[100px] h-[45px] rounded font-bold">
												Volunteer
											</button>
										</a>
									</div>
									<div className="flex items-center justify-center">
										<a className="bg-emerald-900 rounded" href="#">
											<button className="bg-emerald-700 translate-y-[-4px] hover:translate-y-0 font-sans w-[100px] h-[45px] rounded font-bold">
												Mentor
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div>
						<div className="bg-stone-800 border-emerald-700 border-2 px-[15px] w-full rounded-xl aspect-video text-white py-[20px]">
							<div className="bg-emerald-700 rounded-full w-[150px] h-[30px] mt-[-35px] absolute">
								<h1 className="font-poppins font-bold text-xl text-center text-white">Companies</h1>
							</div>
							<div className="grid grid-cols-1 h-full">
								<h1 className="text-3xl font-black font-sans pt-[5px] h-[20%]">
									Interested in sponsoring?
								</h1>
								<div>
									<p className="font-bold text-md">
										RowdyHacks would not be possible without our incredible sponsors! If you or a
										group you represent are interested in sponsoring, please click below to view our
										sponsorship packet.
									</p>
								</div>
								<div className="grid grid-cols-2 h-[20%]">
									<div className="flex items-center justify-center col-span-2">
										<a className="bg-emerald-900 rounded" href="#">
											<button className="bg-emerald-700 font-sans w-[150px] h-[45px] rounded font-bold translate-y-[-4px] hover:translate-y-0">
												Sponsor Packet
											</button>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
