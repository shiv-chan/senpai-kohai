export default interface IRoute {
	path: string;
	name: string;
	component: any;
	protected: boolean;
	props?: any;
}
