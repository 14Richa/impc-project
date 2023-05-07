import { Icon } from '@chakra-ui/react';
import { MdBarChart,MdHome, MdOutlineSummarize } from 'react-icons/md';

// Admin Imports
import MainDashboard from 'views/admin/default';
import DataTables from 'views/admin/dataTables';
import Stats from 'views/admin/statistics';


const routes = [
	{
		name: 'About',
		layout: '/admin',
		path: '/default',
		icon: <Icon as={MdHome} width='20px' height='20px' color='#ed7b25' />,
		component: MainDashboard
	},
	{
		name: 'Summary Statistics',
		layout: '/admin',
		icon: <Icon as={MdOutlineSummarize} width='20px' height='20px' color='#ed7b25' />,
		path: '/statistics',
		component: Stats
	},
	{
		name: 'Heatmap',
		layout: '/admin',
		icon: <Icon as={MdBarChart} width='20px' height='20px' color='#ed7b25' />,
		path: '/data-tables',
		component: DataTables
	},
];

export default routes;
