import { type NextPage } from 'next';
import { type FunctionComponent, useState, type ReactElement, useEffect } from 'react';
import { useAuthContext } from '../lib/user/AuthContext';
import { useUser } from '../lib/profile/user-data';
import { IoProvider, useSocket, useSocketEvent } from 'socket.io-react-hook';
import { useForm } from 'react-hook-form';

type songLookupData = {
	songName: string;
};

interface queueItemProps {
	name: string;
	artist: string;
	songID: string;
	art: string;
	hasBeenClicked: (id: string) => void;
}

const SearchResultItem: FunctionComponent<queueItemProps> = ({
	name,
	artist,
	art,
	songID,
	hasBeenClicked,
}) => {
	return (
		<div
			className="border-2 border-rh-sunset rounded m-2 w-full hover:cursor-pointer flex"
			onClick={() => hasBeenClicked(songID)}
		>
			<img className="aspect-square h-[50px]" src={art}></img>
			<div className="flex flex-col justify-center pl-2 text-white">
				<h1 className="m-0 text-sm font-sans font-bold">{name}</h1>
				<h2 className="m-0 text-xs font-sans">{artist} &#x2022; Not in queue</h2>
			</div>
		</div>
	);
};

const Music: FunctionComponent = () => {
	const { isSignedIn, hasProfile } = useAuthContext();
	const user = useUser();

	if (!isSignedIn) {
		return (
			<div className="text-center text-xl font-sans font-bold">
				In order to use Hack Music, please sign in to your RowdyHacks account!
			</div>
		);
	}

	const [searchResults, setSearchResults] = useState<ReactElement[]>();
	const [hasBeenVerified, setHasBeenVerified] = useState<null | Boolean>(null);

	const { socket, error } = useSocket(process.env.NEXT_PUBLIC_SOCKET_URL);
	const { lastMessage: currQueue } = useSocketEvent(socket, 'queueDidUpdate');

	useEffect(() => {
		const kickOff = async () => {
			console.log('Verifying...');
			const val = await socket.emit('verify', user.id, (data) => {
				console.log('verified with result ', data.success);
				setHasBeenVerified(data.success);
			});
			console.log('got here + ', val);
		};
		if (socket) {
			kickOff();
		}
	}, [socket]);

	useEffect(() => {
		console.log('socket error: ', error);
	}, [error]);

	useEffect(() => {
		if (currQueue) {
			console.log(new Date().getTime());
			console.log(currQueue);
		}
	}, [currQueue]);

	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
	} = useForm<songLookupData>();

	const queueItemWasClicked = (id: string) => {
		alert('clicked ' + id);
		socket.emit('voteForSong', id);
	};

	const onSubmit = handleSubmit(async (data) => {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_SOCKET_URL}/api/lookup/${encodeURIComponent(data.songName)}`,
		);
		const json = await res.json();
		if (json.success) {
			alert('Found songs!');
			console.log(json.result);
			const elsToRender: ReactElement[] = [];
			for (const song of json.result) {
				elsToRender.push(
					<SearchResultItem
						name={song.name}
						artist={song.artists[0].name}
						art={song.album.images[0].url}
						songID={song.id}
						key={song.id}
						hasBeenClicked={queueItemWasClicked}
					/>,
				);
			}
			setSearchResults(elsToRender);
		} else {
			alert('No songs found!');
		}
	});
	if (hasBeenVerified == null) {
		return <div>Verifying...</div>;
	} else if (hasBeenVerified == false) {
		return (
			<div>
				We failed to verify your hackPortal account, please try again! If this continue to be an
				issue, please contact a organizer!
			</div>
		);
	} else {
		// return (
		// 	<div className="w-full max-w-[1000px] h-full max-h-[750px] bg-blue-500">
		// 		<h1>Hello World</h1>
		// 		<button className="p-2 bg-red-500" onClick={() => socket.emit('debugPrintQueue')}>
		// 			Cause Debug Log
		// 		</button>
		// 		<br />
		// 		<form onSubmit={onSubmit}>
		// 			<input {...register('songName')} placeholder="song to search"></input>
		// 			<button className="bg-green-500">Do Search</button>
		// 		</form>
		// 		<br />
		// 		<div className="flex">{searchResults}</div>
		// 		<h1>Queue:</h1>
		// 	</div>
		// );
		return (
			<div className="grid grid-cols-3 w-full aspect-video max-w-[1200px]">
				<div className="bg-rh-deep-purple rounded-lg relative w-full flex flex-col items-center p-2 overflow-y-auto border-rh-sunset border-2">
					<form onSubmit={onSubmit} className="w-full ">
						<input
							{...register('songName')}
							placeholder="Song Name"
							className="h-[40px] rounded-l border-rh-sunset border-2 px-2 w-[80%]"
						></input>
						<button className="w-[20%] h-[40px] rounded-r text-rh-sunset border-l-0 px-2 border-2 border-rh-sunset font-bold">
							Search
						</button>
					</form>
					{searchResults}
				</div>
				<div className="col-span-2 w-full grid grid-cols-2 grid-rows-2">
					<div className="col-span-2 flex items-center justify-center h-full">
						<img
							className="aspect-square h-[90%] m-2 max-h-[250px] rounded-lg"
							src="/img/team/placeholder.png"
						></img>
						<div className="w-full h-full flex flex-col justify-center">
							<h1 className="font-sans font-black text-white text-2xl">Some song</h1>
							<h1 className="font-sans font-normal text-white text-2xl">Some Artist</h1>
							<div className="flex items-center mt-4">
								<div className="w-[80%] bg-white rounded-full h-3 overflow-hidden">
									<div className="bg-gray-300 h-full w-[60%]"></div>
								</div>
								<p className="w-[20%] text-center font-sans text-white font-bold">4:23 / 5:60</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

const MusicWrapped: NextPage = () => {
	return (
		<IoProvider>
			<div className="min-h-screen flex items-center justify-center sky-gradient absolute top-0 left-0 w-screen">
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
				<div className="w-full h-full absolute top-0 left-0 flex items-center justify-center">
					<Music />
				</div>
			</div>
		</IoProvider>
	);
};

export default MusicWrapped;
