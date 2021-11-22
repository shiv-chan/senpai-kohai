import IRoute from '../interfaces/route';
import Home from '../common/components/Home';
import BrowsingPage from '../common/components/BrowsingPage';
import SenpaiProfile from '../features/profile/SenpaiProfile';
import ProfileSetting from '../features/profile/setting/ProfileSetting';
import KohaiProfile from '../features/profile/KohaiProfile';
import LogIn from '../features/login/LogIn';
import SignUp from '../features/signup/SignUp';
import Detail from '../common/components/Detail';

const routes: IRoute[] = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
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
		path: 'login',
		name: 'Log in',
		component: LogIn,
	},
	{
		path: 'signup',
		name: 'Sign up',
		component: SignUp,
	},
	{
		path: 'profile/:id',
		name: 'Detail',
		component: Detail,
	},
];

export default routes;
