import IRoute from '../interfaces/route';
import BrowsingPage from '../common/components/BrowsingPage';
import SenpaiProfile from '../features/profile/SenpaiProfile';
import ProfileSetting from '../features/profile/setting/ProfileSetting';
import KohaiProfile from '../features/profile/KohaiProfile';
import Detail from '../common/components/Detail';

const protectedRoutes: IRoute[] = [
	{
		path: 'board',
		name: 'Browsing Page',
		component: BrowsingPage,
	},
	{
		path: 'profile/senpai',
		name: 'Senpai Profile',
		component: SenpaiProfile,
	},
	{
		path: 'profile/setting/senpai',
		name: 'Senpai Profile Setting',
		component: ProfileSetting,
	},
	{
		path: 'profile/kohai',
		name: 'Kohai Profile',
		component: KohaiProfile,
	},
	{
		path: 'profile/setting/kohai',
		name: 'Kohai Profile Setting',
		component: ProfileSetting,
	},
	{
		path: 'profile/:id',
		name: 'Detail',
		component: Detail,
	},
];

export default protectedRoutes;
