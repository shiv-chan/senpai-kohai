import IRoute from '../interfaces/route';
import Home from '../common/components/Home';
import BrowsingPage from '../common/components/BrowsingPage';
import SenpaiProfile from '../features/profile/SenpaiProfile';
import ProfileSetting from '../features/profile/setting/ProfileSetting';
import KohaiProfile from '../features/profile/KohaiProfile';
import LogIn from '../features/login/LogIn';
import SignUp from '../features/signup/SignUp';
import ForgotPassword from '../features/forgotpassword/ForgotPassword';
import ForgotPasswordMessage from '../features/forgotpassword/ForgotPasswordMessage';
import ForgotPasswordReset from '../features/forgotpassword/ForgotPasswordReset';
import SenpaiDetail from '../common/components/SenpaiDetail';
import KohaiDetail from '../common/components/KohaiDetail';
import PageNotFound from '../common/components/PageNotFound';

const routes: IRoute[] = [
	{
		path: '/',
		name: 'Home',
		protected: false,
		component: Home,
	},
	{
		path: 'login',
		name: 'Log in',
		protected: false,
		component: LogIn,
	},
	{
		path: 'signup',
		name: 'Sign up',
		protected: false,
		component: SignUp,
	},
	{
		path: 'board',
		name: 'Browsing Page',
		protected: true,
		component: BrowsingPage,
	},
	{
		path: 'profile/senpai',
		name: 'Senpai Profile',
		protected: true,
		component: SenpaiProfile,
	},
	{
		path: 'profile/setting/senpai',
		name: 'Senpai Profile Setting',
		protected: true,
		component: ProfileSetting,
	},
	{
		path: 'profile/kohai',
		name: 'Kohai Profile',
		protected: true,
		component: KohaiProfile,
	},
	{
		path: 'profile/setting/kohai',
		name: 'Kohai Profile Setting',
		protected: true,
		component: ProfileSetting,
	},
	{
		path: 'forgotpassword',
		name: 'Forgot password',
		protected: false,
		component: ForgotPassword,
	},
	{
		path: 'forgotpassword/message',
		name: 'Forgot password',
		protected: false,
		component: ForgotPasswordMessage,
	},
	{
		path: 'forgotpassword/reset',
		name: 'Forgot password',
		protected: false,
		component: ForgotPasswordReset,
	},
	{
		path: 'profile/senpai/:id',
		name: 'Senpai Detail',
		protected: true,
		component: SenpaiDetail,
	},
	{
		path: 'profile/kohai/:id',
		name: 'Kohai Detail',
		protected: true,
		component: KohaiDetail,
	},
	{
		path: '*',
		name: 'Page Not Found',
		protected: false,
		component: PageNotFound,
	},
];

export default routes;
