import React, { useState, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IProfileSetting from '../../../interfaces/profileSetting';
import SenpaiProfileSettingItems from './SenpaiProfileSettingItems';
import KohaiProfileSettingItems from './KohaiProfileSettingItems';
import axios from 'axios';
import ToggleButton from '../../../common/components/ToggleButton';
import { useAppSelector } from '../../../app/hook';

const ProfileSetting: React.FunctionComponent<{ props?: any }> = () => {
	const myProfile = useAppSelector((state) => state.myProfile.myProfile);
	const { pathname } = useLocation(); // used as a flag to see if it's senpai or kohai *returns as /profile/setting/senpai
	const navigate = useNavigate();
	const [isSenpai, setIsSenpai] = useState<undefined | boolean>(undefined);
	const profileType = isSenpai ? 'senpaiProfile' : 'kohaiProfile';
	const [inputs, setInputs] = useState<IProfileSetting>({
		name: '',
		publicEmail: '',
		techStack: [],
		description: '',
		isActive: false,
	});

	useLayoutEffect(() => {
		if (pathname === '/profile/setting/senpai') {
			setIsSenpai(true);
		} else {
			setIsSenpai(false);
		}

		if (Object.keys(myProfile).length !== 0) {
			const publicEmail = myProfile.publicEmail
				? myProfile.publicEmail
				: myProfile.email;
			setInputs({
				name: myProfile.name,
				publicEmail,
				techStack: myProfile[profileType].techStack,
				description: myProfile[profileType].description,
				isActive: myProfile[profileType].isActive,
			});
		}
	}, [pathname, myProfile, profileType]);

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
				inputs,
				{
					withCredentials: true,
				}
			);
			if (isSenpai) {
				navigate('/profile/senpai');
			} else {
				navigate('/profile/kohai');
			}
		} catch (err: any) {
			if (err.response) {
				console.error(err.response.data.message);
			} else {
				console.error(err);
			}
		}
	};

	const bgColor = () => {
		return isSenpai ? 'bg-primary_bg_color' : 'bg-secondary_bg_color';
	};

	const profileName = () => {
		if (isSenpai) {
			return myProfile.name === ''
				? `Senpai#${myProfile.senpaiProfile.id.slice(0, 5)}`
				: myProfile.name;
		} else {
			return myProfile.name === ''
				? `Kohai#${myProfile.kohaiProfile.id.slice(0, 5)}`
				: myProfile.name;
		}
	};

	return (
		// TODO: adjust margin-top based on the height of the header
		<div
			className={`${bgColor()} w-screen min-h-screen pt-mobileHeaderHeight lg:pt-laptopHeaderHeight`}
		>
			<div className="container max-w-xl mx-auto py-paddingAroundtheContent px-6 sm:px-8 flex flex-col gap-y-6">
				<section className="flex gap-x-8 items-center">
					<img
						src="https://dummyimage.com/300x300/ededed/d4d4d4.png"
						alt="dummy-profile"
						className="w-1/3 h-1/3 rounded-full"
					/>
					<div>
						<h1 className="text-xl font-bold mb-2">{profileName()}</h1>
						<ToggleButton
							isSenpai={isSenpai}
							inputs={inputs}
							setInputs={setInputs}
						/>
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
					{isSenpai ? (
						<SenpaiProfileSettingItems
							inputs={inputs}
							handleOnChange={handleOnChange}
						/>
					) : (
						<KohaiProfileSettingItems
							inputs={inputs}
							handleOnChange={handleOnChange}
						/>
					)}
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
