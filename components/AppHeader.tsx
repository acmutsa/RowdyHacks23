import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import ProfileDialog from './ProfileDialog';
import { useUser } from '../lib/profile/user-data';
import { useAuthContext } from '../lib/user/AuthContext';
import { navItems } from '../lib/data';
import firebase from 'firebase/app';
import Image from 'next/image';
import 'firebase/remote-config';
import { getAccordionActionsUtilityClass } from '@mui/material';

/**
 * A global site header throughout the entire app.
 */
export default function AppHeader() {
	const [showMenu, setShowMenu] = useState(false);
	const { isSignedIn, hasProfile, profile } = useAuthContext();
	const [mobileIcon, setMobileIcon] = useState(true);
	const [showProfileDialog, setShowProfileDialog] = useState(false);
	const [dynamicNavItems, setDynamicNavItems] = useState(navItems);
	const user = useUser();

	useEffect(() => {
		if (firebase.auth().currentUser !== null && !firebase.auth().currentUser.emailVerified) {
			firebase
				.auth()
				.signOut()
				.then(() => {
					//signed out succesfully
				})
				.catch((error) => {
					console.warn('Could not sign out');
				});
		}
		const toExecute = async () => {
			const dataReq = await fetch('/api/config');
			const dataBody = await dataReq.json();

			//creating dynamic nav items
			setDynamicNavItems((dynamicNavItems) => {
				let navItemsToSet = [...dynamicNavItems];

				if (
					(dataBody.showDashboardInNav || process.env.NEXT_PUBLIC_IS_STAGED_PROD == 'true') &&
					dynamicNavItems.filter(({ text }) => text === 'Dashboard').length === 0
				) {
					navItemsToSet.push({ text: 'Dashboard', path: '/dashboard' });
				}

				if (
					(dataBody.showSurvivalGuideInNav || process.env.NEXT_PUBLIC_IS_STAGED_PROD == 'true') &&
					dynamicNavItems.filter(({ text }) => text === 'Adventure Guide').length === 0
				) {
					navItemsToSet.push({ text: 'Adventure Guide', path: '/guide' });
				}

				if (
					(dataBody.showScheduleInNav || process.env.NEXT_PUBLIC_IS_STAGED_PROD == 'true') &&
					dynamicNavItems.filter(({ text }) => text === 'Schedule').length === 0
				) {
					navItemsToSet.push({ text: 'Schedule', path: '/schedule' });
				}

				if (dynamicNavItems.filter(({ text }) => text === 'About Us').length === 0) {
					navItemsToSet.push({ text: 'About Us', path: '/#about' });
				}
				if (dynamicNavItems.filter(({ text }) => text === 'Partners').length === 0) {
					navItemsToSet.push({ text: 'Partners', path: '/#partners' });
				}
				if (dynamicNavItems.filter(({ text }) => text === 'Contact').length === 0) {
					navItemsToSet.push({ text: 'Contact', path: '/contact' });
				}

				if (
					isSignedIn &&
					profile &&
					(profile.user.permissions[0] === 'admin' ||
						profile.user.permissions[0] === 'super_admin') &&
					dynamicNavItems.filter(({ text }) => text === 'Admin').length === 0
				) {
					navItemsToSet.push({ text: 'Admin', path: '/admin' });
				}

				return navItemsToSet;
			});
		};

		toExecute();
	}, []);

	const toggleMenu = () => {
		setShowMenu(!showMenu);
		setMobileIcon(!mobileIcon);
	};

	const dismissDialog = () => {
		setShowProfileDialog(false);
	};
	const toggleDialog = () => {
		setShowProfileDialog(!showProfileDialog);
	};

	document.addEventListener('mousedown', (event) => {
		const targetComponent = document.querySelector('.profileDialog');
		if (
			targetComponent !== null &&
			!document.querySelector('.profileDialog').contains(event.target as Node)
		) {
			dismissDialog();
		}
	});

	return (
		<>
			<div className="min-h-[4rem]"></div>
			<header
				className="top-0 fixed justify-between flex flex-row w-full font-sans text-white items-center h-16 z-20 p-4 z-90"
				style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
			>
				<div className="flex justify-between items-center md:max-w-full md:justify-start md:w-9/12">
					<Link href="/">
						<a className="flex gap-2 order-2 relative ml-[6px] font-display self-center items-center md:order-1 md:ml-0">
							{/* !change src */}
							<Image
								src={
									'https://imagedelivery.net/XXZbKmdYGGT6KId3pavruw/447675e9-f425-40f1-35e7-a581fbc4e900/image'
								}
								alt="RowdyHacks Logo"
								width="30px"
								height="30px"
							/>
							<span className="text-[16px] font-black md:z-0 md:text-2xl">RowdyHacks</span>
						</a>
					</Link>
					{/* Smartphone nav */}
					<div onClick={toggleMenu} className={'relative md:hidden'}>
						{mobileIcon ? (
							<MenuIcon className="hover:cursor-pointer" />
						) : (
							<CloseIcon className="hover:cursor-pointer" />
						)}
						<ul
							className={`${
								showMenu ? 'translate-x-0' : '-translate-x-full'
							} transform transition-all ease-out duration-300 flex w-6/12 h-screen border-rh-sunset flex-col bg-rh-deep-purple fixed top-0 left-0 z-[-1] pt-16`}
						>
							{dynamicNavItems.map((item) => (
								<Link key={item.text} href={item.path}>
									<a className="border-b-2 first:border-t-2 border-rh-sunset p-4 py-6 hover:bg-rh-sunset">
										<p className="text-sm font-bold">{item.text}</p>
									</a>
								</Link>
							))}
						</ul>
					</div>
					{/* PC nav */}
					<div className="hidden text-xs order-2 md:flex items-center md:text-left lg:ml-12">
						{dynamicNavItems.map((item) => (
							<Link key={item.text} href={item.path}>
								<a>
									<p className="md:mx-4 text-sm font-bold text-center">{item.text}</p>
								</a>
							</Link>
						))}
					</div>
				</div>
				<div className="flex lg:mr-8">
					<button
						className="font-header font-bold bg-white rounded-full border-2 border-black text-sm px-8 py-1 text-black"
						onClick={toggleDialog}
					>
						{!user || !isSignedIn ? 'Sign in' : hasProfile ? 'Profile' : 'Register'}
					</button>
				</div>
				{showProfileDialog && <ProfileDialog onDismiss={dismissDialog} />}
			</header>
		</>
	);
}
