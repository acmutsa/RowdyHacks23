export const buttonDatas = [
	{ text: 'Mentor App', path: '/' },
	{ text: 'Sponsor App', path: '/' },
];

export const navItems = [
	{ text: 'Dashboard', path: '/dashboard' },
	{ text: 'Schedule', path: '/schedule' },
];

export const stats = [
	{
		data: '36',
		object: 'Hours',
	},
	{
		data: '400+',
		object: 'Hackers',
	},
	{
		data: '70+',
		object: 'Projects',
	},
];

export const DEFAULT_EVENT_FORM_DATA: ScheduleEvent = {
	description: '',
	title: '',
	page: '',
	type: '',
	track: '',
	location: '',
	speakers: [],
	startDate: new Date(),
	endDate: new Date(),
	Event: -1,
};

export const groups = ['Forrests', 'Space', 'Caves', 'Oceans'];
