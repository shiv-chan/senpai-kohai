import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import IProfileSetting from '../../../interfaces/profileSetting';
import {
	SENPAI_PROFILE_ITEMS,
	KOHAI_PROFILE_ITEMS,
} from './ProfileSettingItems';
import axios from 'axios';

const ProfileSetting: React.FunctionComponent<{ props?: any }> = () => {
	const { pathname } = useLocation(); // used as a flag to see if it's senpai or kohai *returns as /profile/setting/senpai
	const navigate = useNavigate();
	const [inputs, setInputs] = useState<IProfileSetting>({
		name: '',
		publicEmail: '',
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

	const handleSubmitBtn = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		try {
			const response = await axios.put(
				`http://localhost:5000${pathname}`,
				inputs
			);
			if (pathname === '/profile/setting/senpai') {
				navigate('/profile/senpai');
			} else {
				navigate('/profile/kohai');
			}
			console.log(response);
		} catch (err: any) {
			console.error(err.response.data.message);
		}
	};

	return (
		// TODO: adjust margin-top based on the height of the header
		<div className="bg-primary_bg_color w-screen min-h-screen mt-mobileHeaderHeight lg:mt-laptopHeaderHeight">
			<div className="container max-w-xl mx-auto py-paddingAroundtheContent px-6 sm:px-8 flex flex-col gap-y-6">
				<section className="flex gap-x-8 items-center">
					<img
						src="https://dummyimage.com/300x300/ededed/d4d4d4.png"
						alt="dummy-profile"
						className="w-1/3 h-1/3 rounded-full"
					/>
					<div>
						<h1 className="text-xl font-bold">Jane Doe</h1>
					</div>
				</section>
				<p className="text-red-500">*required</p>
				<form className="flex flex-col gap-y-6">
					<article>
						<label htmlFor="name" className="font-bold block">
							*Name
						</label>
						<p className="text-sm">Please use your real name.</p>
						<input
							type="text"
							id="name"
							name="name"
							value={inputs.name}
							onChange={handleOnChange}
							className="border border-gray-300 rounded focus:outline-none focus:border-primary_title_color"
						/>
					</article>
					<article>
						<label htmlFor="image" className="font-bold block">
							Profile Picture
						</label>
						<input type="file" id="image" name="image" accept="image/*" />
					</article>
					<article>
						<label htmlFor="email" className="font-bold block">
							*Email can be reached at you
						</label>
						<p className="text-sm">This one will be on public.</p>
						<input
							type="email"
							id="email"
							name="publicEmail"
							value={inputs.publicEmail}
							onChange={handleOnChange}
							className="border border-gray-300 rounded focus:outline-none focus:border-primary_title_color"
						/>
					</article>
					<article>
						<label htmlFor="tech-stack" className="font-bold block">
							{pathname === '/profile/setting/senpai' && (
								<p>*{SENPAI_PROFILE_ITEMS.skillsTitle}</p>
							)}
							{pathname === '/profile/setting/kohai' && (
								<p>*{KOHAI_PROFILE_ITEMS.skillsTitle}</p>
							)}
						</label>
						<p className="text-sm">
							Please place your languages and skills separeted with a comma.
						</p>
						<textarea
							id="tech-stack"
							name="techStack"
							rows={3}
							cols={32}
							value={inputs.techStack}
							onChange={handleOnChange}
							className="border border-gray-300 rounded focus:outline-none focus:border-primary_title_color mobile_s:w-full"
						/>
					</article>
					<article>
						<label htmlFor="description" className="block font-bold">
							Description
						</label>
						<textarea
							id="description"
							name="description"
							rows={10}
							cols={32}
							value={inputs.description}
							onChange={handleOnChange}
							className="border border-gray-300 rounded focus:outline-none focus:border-primary_title_color mobile_s:w-full"
						/>
					</article>
				</form>
				<button
					className="bg-primary_title_color w-48 px-4 py-2 text-white rounded cursor-pointer"
					onClick={handleSubmitBtn}
				>
					Update Profile
				</button>
			</div>
		</div>
	);
};

export default ProfileSetting;
