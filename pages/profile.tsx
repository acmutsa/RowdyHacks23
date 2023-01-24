import { useRouter } from 'next/router';
import Image from 'next/image';
import React, { useRef, useState } from 'react';
import { useAuthContext } from '../lib/user/AuthContext';
import LoadIcon from '../components/LoadIcon';
import { getFileExtension } from '../lib/util';
import { titleCase } from 'title-case';
import { groups } from '../lib/data';

/**
 * A page that allows a user to modify app or profile settings and see their data.
 *
 * Route: /profile
 */
export default function ProfilePage() {
	const router = useRouter();
	const { isSignedIn, hasProfile, user, profile } = useAuthContext();
	const [uploading, setUploading] = useState<boolean>(false);
	const resumeRef = useRef(null);

	const handleResumeUpload = () => {
		const resumeFile =
			resumeRef.current.files.length !== 1 || !resumeRef.current.files[0].name.endsWith('.pdf')
				? null
				: resumeRef.current.files[0];
		if (!resumeFile) return alert('Accepted file types: pdf');

		setUploading(true);

		const formData = new FormData();
		formData.append('resume', resumeFile);
		formData.append('fileName', `${user.id}${getFileExtension(resumeFile.name)}`);
		fetch('/api/resume/upload', {
			method: 'post',
			body: formData,
		}).then((res) => {
			if (res.status !== 200) alert('Resume upload failed...');
			else {
				setUploading(false);
				alert('Resume updated...');
			}
		});
	};

	if (!isSignedIn) {
		return <div className="p-4 flex-grow text-center">Sign in to see your profile!</div>;
	}

	if (!hasProfile) {
		router.push('/register');
		return <div></div>;
	}

	return (
		<div
			className={`p-8 w-full min-h-screen flex items-center absolute top-0 pt-[80px] left-0 bg-[url("/img/profiles/mountainbg.svg")] bg-cover bg-fixed`}
		>
			<div className="max-w-6xl mx-auto w-full">
				<h1 className="md:text-5xl md:text-left text-center text-3xl font-bold font-permanent-marker text-white">
					Welcome, Adventurer!
				</h1>
				<section className="w-full py-5">
					<div className="flex flex-col md:flex-row gap-x-10">
						<div
							className={`w-full md:w-2/3 rounded-xl p-4 flex flex-col justify-around font-poppins ${'bg-rh-deep-purple text-white border-2 border-rh-sunset'}`}
							style={{ minHeight: '500px' }}
						>
							<h1 className="font-bold text-xl text-center">RowdyHacks</h1> {/* !change */}
							<div className="mx-auto">
								{user.photoUrl ? (
									<Image
										className="rounded-full object-cover"
										src={user.photoUrl}
										height={180}
										width={180}
										alt="Your profile"
									/>
								) : (
									<Image
										className="rounded-full object-cover"
										src={'https://api.dicebear.com/5.x/bottts-neutral/svg?seed=' + user.id}
										height={180}
										width={180}
										alt="Your profile"
									/>
								)}
							</div>
							<div>
								<h1 className="text-center font-bold text-xl">{`${profile.user.firstName} ${profile.user.lastName}`}</h1>
								<p className="text-center font-permanent-marker">{profile.user.permissions[0]}</p>
							</div>
						</div>
						<div className="w-full my-5">
							<div className="grid grid-cols-2 gap-10 text-white">
								<div className="flex flex-col gap-y-2">
									<div className="font-bold font-permanent-marker text-xl">Name</div>
									<h1 className="font-bold">{`${profile.user.firstName} ${profile.user.lastName}`}</h1>
								</div>
								<div className="flex flex-col gap-y-2">
									<div className="font-bold font-permanent-marker text-xl">Role</div>
									<h1 className="font-bold">{titleCase(profile.user.permissions[0])}</h1>
								</div>
								<div className="flex flex-col gap-y-2">
									<div className="font-bold font-permanent-marker text-xl">University</div>
									<h1 className="font-bold">{profile.university}</h1>
								</div>
								<div className="flex flex-col gap-y-2">
									<div className="font-bold font-permanent-marker text-xl">Biome</div>
									<h1 className="font-bold">{groups[profile.user.group] || 'Reload To View'}</h1>
								</div>
								<div className="flex flex-col gap-y-2">
									<div className="font-bold font-permanent-marker text-xl">Major</div>
									<h1 className="font-bold">{profile.major}</h1>
								</div>
								<div className="flex flex-col gap-y-2">
									<div className="font-bold font-permanent-marker text-xl">Level of Study</div>
									<h1 className="font-bold">{titleCase(profile.studyLevel)}</h1>
								</div>
								<div>
									{!uploading ? (
										<>
											<input
												id="resume"
												style={{ display: 'none' }}
												type="file"
												ref={resumeRef}
												onChange={handleResumeUpload}
											/>
											<label
												id="resume_label"
												className="transition rounded p-3 text-center whitespace-nowrap text-white w-min bg-gray-500 cursor-pointer font-black gap-y-2 hover:brightness-110"
												htmlFor="resume"
											>
												Update Resume
											</label>
										</>
									) : (
										<LoadIcon width={16} height={16} />
									)}
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
