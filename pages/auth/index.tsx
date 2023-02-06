import React from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '../../lib/user/AuthContext';
import { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import Link from 'next/link';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import GoogleIcon from '../../public/icons/googleicon.png';
import Image from 'next/image';
import NextConnect from 'next-connect';
import { GoAlert } from 'react-icons/go';

/**
 * A page that allows the user to sign in.
 *
 * Route: /auth
 */
export default function AuthPage() {
	const { isSignedIn, signInWithGoogle, updateUser } = useAuthContext();
	const [currentEmail, setCurrentEmail] = useState('');
	const [currentPassword, setCurrentPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	const [passwordResetDialog, setPasswordResetDialog] = useState(false);
	const [sendVerification, setSendVerification] = useState(false);
	const [signInOption, setSignInOption] = useState(true);

	const router = useRouter();
	const signIn = () => {
		setSendVerification(false);
		firebase
			.auth()
			.signInWithEmailAndPassword(currentEmail, currentPassword)
			.then(async ({ user }) => {
				// Signed in
				if (!user.emailVerified) {
					setSendVerification(true);
					throw new Error('Email is not verified. Verify your email before logging in.');
				}
				await updateUser(user);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setErrorMsg(errorMessage);
			});
	};

	const signUp = () => {
		firebase
			.auth()
			.createUserWithEmailAndPassword(currentEmail, currentPassword)
			.then((userCredential) => {
				// Signed in
				var user = userCredential.user;
				//send email verification
				firebase
					.auth()
					.currentUser.sendEmailVerification()
					.then(() => {
						router.push('/auth');
						alert(
							'Account created! Check your email/spam folder to verify your account and log in.',
						);
					});
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				setErrorMsg(errorMessage);
			});
	};

	const sendResetEmail = () => {
		firebase
			.auth()
			.sendPasswordResetEmail(currentEmail)
			.then(() => {
				alert('Password reset email sent');
			})
			.catch((error) => {
				var errorCode = error.code;
				var errorMessage = error.message;
				setErrorMsg(errorMessage);
			});
	};

	const sendVerificationEmail = () => {
		//send email verification
		try {
			firebase
				.auth()
				.currentUser.sendEmailVerification()
				.then(() => {
					router.push('/auth');
					alert('Verification email sent, check your email to verify your account and log in');
				});
		} catch (error) {
			alert(
				'There has been a problem sending a verfication email.\nWait a few minutes before sending another request.',
			);
		}
	};

	//toggle mask/unmask password in input field
	const showPassword = (id) => {
		var passwordInput = document.getElementById(id) as HTMLInputElement;
		passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';
	};

	if (isSignedIn) {
		router.push('/profile');
	}

	function handleSubmit(event) {
		signIn();
		event.preventDefault();
	}

	function handleSignUpSubmit(event) {
		signUp();
		event.preventDefault();
	}

	// Switches between sign in and create an account
	const changeOption = (option) => {
		document.getElementById(`signInOption`).style.textDecoration = option ? 'underline' : 'none';
		document.getElementById(`signUpOption`).style.textDecoration = option ? 'none' : 'underline';

		(document.getElementById(`signInSection`) as HTMLElement).style.display = option
			? 'block'
			: 'none';
		(document.getElementById(`signUpSection`) as HTMLElement).style.display = option
			? 'none'
			: 'block';
		setErrorMsg('');
	};

	return (
		<div className="sky-gradient h-full min-h-[1000px] oveflow-y-auto absolute top-0 w-full">
			<div className="w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform">
				<img
					src="/img/landscape/p/layer_2.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</div>
			<div className="w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform">
				<img
					src="/img/landscape/p/layer_3.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</div>
			<div className="w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform">
				<img
					src="/img/landscape/p/layer_4.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</div>
			<div className="w-full h-full absolute overflow-x-hidden flex justify-center items-end will-change-transform">
				<img
					src="/img/landscape/p/layer_5.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</div>
			<div className="w-full h-full absolute overflow-x-hidden flex justify-center items-end bottom-0">
				<img
					src="/img/landscape/p/layer_6.png"
					className="min-w-[3000px] object-cover border-b-[#2d112b] border-b-4"
				></img>
			</div>

			<section className="py-2 md:px-16 px-10 flex items-center justify-center flex-wrap w-full h-screen absolute top-0">
				<div className="xl:w-1/2 lg:w-2/3 w-5/6 my-4">
					<h1 className="md:text-8xl text-5xl font-black font-sans text-white text-center">
						RowdyHacks
					</h1>
					<h2 className="md:text-4xl text-3xl font-black font-permanent-marker italic text-white text-center">
						Into The Unknown
					</h2>
					<div className="mt-16 flex text-2xl">
						<div
							id="signInOption"
							className="py-2 mr-6 underline cursor-pointer text-white"
							onClick={() => changeOption(true)}
						>
							Sign In
						</div>
						<div
							id="signUpOption"
							className="py-2 cursor-pointer text-white"
							onClick={() => changeOption(false)}
						>
							Register
						</div>
					</div>
					<section
						id="signInSection"
						className="bg-[#2d112b] 2xl:min-h-[30rem] min-h-[28rem] rounded-lg p-6 border-[#ff583d] border-2"
					>
						<div className="bg-red-300 border-red-500 border-2 min-h-[75px] w-full mx-auto rounded flex items-center px-2">
							<GoAlert className="text-5xl text-red-500" />
							<div className="pl-2 text-red-900">
								<h1 className="font-bold">Notice:</h1>
								<p className="text-xs">
									At the moment, utsa.edu and my.utsa.edu emails <b>are not supported</b>. We are
									working to get this issue resolved with UTSA ASAP. In the meantime, please use a
									non-UTSA email when signing up. Thanks!
								</p>
							</div>
						</div>
						{!passwordResetDialog ? (
							<React.Fragment>
								<form onSubmit={handleSubmit}>
									<h1 className="text-xl font-bold mt-4 mb-2 text-white">Email</h1>
									<input
										className="w-full rounded-lg p-2 bg-white"
										value={currentEmail}
										onChange={(e) => setCurrentEmail(e.target.value)}
										type="text"
										name="email"
										autoComplete="email"
										placeholder="email@example.com"
									></input>
									<h1 className="text-xl font-bold mt-4 mb-2 text-white">Password</h1>
									<input
										id="passwordInputLg"
										className="w-full rounded-lg p-2 bg-white"
										value={currentPassword}
										onChange={(e) => setCurrentPassword(e.target.value)}
										type="password"
										name="password"
										autoComplete="current-password"
										placeholder="Password"
									></input>
									<div className="inline-flex md:flex justify-between md:flex-row flex-col-reverse">
										<div
											className="hover:underline cursor-pointer text-left text-white"
											onClick={() => {
												setPasswordResetDialog(true);
												setErrorMsg('');
												setSendVerification(false);
											}}
										>
											Forgot password?
										</div>
										<div className="text-white">
											<input
												className="mx-1"
												type="checkbox"
												onClick={() => showPassword('passwordInputLg')}
											/>
											Show Password
										</div>
										<input className="hidden" type="submit" value="Submit" />
									</div>
									<div className="flex justify-center mt-6 mb-4">
										<a className="bg-[#c41e04] rounded" href="#">
											<button
												onClick={() => {
													signIn();
												}}
												className="bg-[#ff583d] font-sans w-[150px] h-[45px] rounded font-bold translate-y-[-4px] hover:translate-y-0"
											>
												Sign In
											</button>
										</a>
									</div>
								</form>
								{/* Error and verification messages */}
								<div className="text-center">{errorMsg}</div>
								{/* !change if needed */}
								{/* Uncomment to allow resend verification email option (users could spam) */}
								{/* {sendVerification && (
                    <div className='flex justify-center'>
                      <button className="underline" onClick={() => sendVerificationEmail()}>
                        Resend verification
                      </button>
                    </div>
                  )} */}
								<div className="text-center text-gray-500 text-xl">or</div>
								<button
									className="px-4 py-2 w-full max-w-[250px] mx-auto rounded-md shadow-md bg-white my-4 text-lg font-bold hover:shadow-lg hover:bg-gray-100 text-left flex items-center"
									onClick={() => signInWithGoogle()}
								>
									<Image src={GoogleIcon} alt="GoogleIcon" width={25} height={25} />
									<p className="mx-2">Sign in with Google</p>
								</button>
							</React.Fragment>
						) : (
							<React.Fragment>
								<div className="text-left mt-4">
									<ArrowBackIcon
										className="cursor-pointer text-white"
										onClick={() => {
											setPasswordResetDialog(false);
											setErrorMsg('');
										}}
									/>
								</div>
								<h1 className="text-2xl my-4 text-white">Reset Password</h1>
								<input
									className="w-full rounded-lg p-2 bg-white"
									value={currentEmail}
									onChange={(e) => setCurrentEmail(e.target.value)}
									placeholder="Email"
								></input>

								<button
									className="bg-[#ff583d] font-sans w-[150px] h-[45px] rounded font-bold mt-10"
									onClick={() => {
										sendResetEmail();
										setErrorMsg('');
									}}
								>
									Send Reset Email
								</button>
								<div className="text-left">{errorMsg}</div>
							</React.Fragment>
						)}
					</section>
					<section
						id="signUpSection"
						className="hidden bg-rh-deep-purple border-rh-sunset border-2 2xl:min-h-[30rem] min-h-[28rem] rounded-lg p-6"
					>
						<div className="bg-red-300 border-red-500 border-2 min-h-[75px] w-full mx-auto rounded flex items-center px-2">
							<GoAlert className="text-5xl text-red-500" />
							<div className="pl-2 text-red-900">
								<h1 className="font-bold">Notice:</h1>
								<p className="text-xs">
									At the moment, utsa.edu and my.utsa.edu emails <b>are not supported</b>. We are
									working to get this issue resolved with UTSA ASAP. In the meantime, please use a
									non-UTSA email when signing up. Thanks!
								</p>
							</div>
						</div>
						<form onSubmit={handleSignUpSubmit}>
							<h1 className="text-xl font-bold mt-4 mb-2 text-rh-white">Email</h1>
							<input
								className="w-full rounded-lg p-2 !bg-white"
								value={currentEmail}
								onChange={(e) => setCurrentEmail(e.target.value)}
								type="text"
								name="email"
								autoComplete="email"
								placeholder="email@example.com"
							></input>
							<h1 className="text-xl font-bold mt-4 mb-2 text-rh-white">Password</h1>
							<input
								id="passwordInputSignUp"
								className="w-full rounded-lg p-2 bg-white"
								value={currentPassword}
								onChange={(e) => setCurrentPassword(e.target.value)}
								type="password"
								name="password"
								autoComplete="current-password"
								placeholder="Password"
							></input>
							<div className="flex justify-end">
								<div className="text-white">
									<input
										className="mx-1"
										type="checkbox"
										onClick={() => showPassword('passwordInputSignUp')}
									/>
									Show Password
								</div>
								<input className="hidden" type="submit" value="Submit" />
							</div>
							<div className="flex justify-center mt-6 mb-4">
								<a className="bg-[#c41e04] rounded" href="#">
									<button
										onClick={() => {
											signUp();
										}}
										className="bg-[#ff583d] font-sans w-[150px] h-[45px] rounded font-bold translate-y-[-4px] hover:translate-y-0"
									>
										Sign Up
									</button>
								</a>
							</div>
						</form>
						{/* Error and verification messages */}
						<div className="text-center">{errorMsg}</div>
					</section>
				</div>
			</section>
		</div>
	);
}
