import React, { useState } from 'react';
import { useLocation } from 'react-router';
import IProfileSetting from '../../../interfaces/profileSetting';
import {
	SENPAI_PROFILE_ITEMS,
	KOHAI_PROFILE_ITEMS,
} from './ProfileSettingItems';

const ProfileSetting: React.FunctionComponent<{ props?: any }> = () => {
	const { pathname } = useLocation(); // used as a flag to see if it's senpai or kohai *returns as /profile/setting/senpai
	const [inputs, setInputs] = useState<IProfileSetting>({
		name: '',
		email: '',
		techStack: [],
		description: '',
	});

	const handleOnChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		if (name === 'techStack') {
			const commaSpliceArr: string[] = value.split(',');
			const returnedArr: string[] = [];
			commaSpliceArr.map((ele) => returnedArr.push(ele.trim()));
			setInputs({ ...inputs, techStack: returnedArr });
		} else {
			setInputs({ ...inputs, [name]: value });
		}
	};

	return (
		// TODO: adjust margin-top based on the height of the header
		<div className="container bg-primary_bg_color w-screen min-h-screen mt-headerHeight">
			<div className="md:container mx-auto px-4">
				<section>
					<img
						src="https://dummyimage.com/300x300/ededed/d4d4d4.png"
						alt="dummy-profile"
					/>
					<h1>Jane Doe</h1>
				</section>
				<p>*required</p>
				<form action="/profile/setting/senpai" method="POST">
					<article>
						<label htmlFor="name">*Name</label>
						<p>Please use your real name.</p>
						<input
							type="text"
							id="name"
							name="name"
							value={inputs.name}
							onChange={handleOnChange}
						/>
					</article>
					<article>
						<label htmlFor="image">Profile Picture</label>
						<input type="file" id="image" name="image" accept="image/*" />
					</article>
					<article>
						<label htmlFor="email">*Email can be reached at you</label>
						<p>This one will be on public.</p>
						<input
							type="email"
							id="email"
							name="email"
							value={inputs.email}
							onChange={handleOnChange}
						/>
					</article>
					<article>
						<label htmlFor="tech-stack">
							{pathname === '/profile/setting/senpai' && (
								<p>*{SENPAI_PROFILE_ITEMS.skillsTitle}</p>
							)}
							{pathname === '/profile/setting/kohai' && (
								<p>*{KOHAI_PROFILE_ITEMS.skillsTitle}</p>
							)}
						</label>
						<p>
							Please place your languages and skills separeted with a comma.
						</p>
						<textarea
							id="tech-stack"
							name="techStack"
							rows={3}
							cols={35}
							value={inputs.techStack}
							onChange={handleOnChange}
						/>
					</article>
					<article>
						<label htmlFor="description">Description</label>
						<textarea
							id="description"
							name="description"
							rows={10}
							cols={35}
							value={inputs.description}
							onChange={handleOnChange}
						/>
					</article>
					<button>Update Profile</button>
				</form>
			</div>
		</div>
	);
};

export default ProfileSetting;
