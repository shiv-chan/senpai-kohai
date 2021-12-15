export interface ISenpai {
	name: string;
	profileImage: string;
	senpaiProfile: {
		id: string;
		description: string;
		techStack: string[];
	};
	publicEmail: string;
}

export interface IKohai {
	name: string;
	profileImage: string;
	kohaiProfile: {
		id: string;
		description: string;
		techStack: string[];
	};
	publicEmail: string;
}
