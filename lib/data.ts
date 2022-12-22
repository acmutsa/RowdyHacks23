export const buttonDatas = [
	{ text: 'Mentor App', path: '/' },
	{ text: 'Sponsor App', path: '/' },
];

export const navItems = [
	{ text: 'Dashboard', path: '/dashboard' },
	{ text: 'Survival Guide', path: '/hackerpacks' },
	{ text: 'Schedule', path: '/schedule' },
];

export const stats = [
	{
		data: 'Big',
		object: 'statistic 1',
	},
	{
		data: 'Shocking',
		object: 'statistic 2',
	},
	{
		data: 'Incredible',
		object: 'statistic 3',
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
