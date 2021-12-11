import React, { useState, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import IProfileSetting from '../../../interfaces/profileSetting';
import SenpaiProfileSettingItems from './SenpaiProfileSettingItems';
import KohaiProfileSettingItems from './KohaiProfileSettingItems';
import axios from 'axios';
import ToggleButton from '../../../common/components/ToggleButton';
import { useAppSelector, useAppDispatch } from '../../../app/hook';
import { getUsers } from '../../../common/usersSlice';
import { getProfile } from '../../../common/myProfileSlice';
import { BiInfoCircle } from 'react-icons/bi';
import LoadingScreen from '../../../common/components/LoadingScreen';
var sha1 = require('sha-1');

const ProfileSetting: React.FunctionComponent<{ props?: any }> = () => {
	const myProfile = useAppSelector((state) => state.myProfile.myProfile);
	const dispatch = useAppDispatch();
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
	const [imageFile, setImageFile] = useState<FileList | null>(null);
	const [fileUrl, setFileUrl] = useState('');
	const [errorMessage, setErrorMessage] = useState<string | null>(null);
	const [hasOverlay, setHasOverlay] = useState<boolean>(false);
	const [imageId, setImageId] = useState(null);

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
			setImageId(myProfile.profileImageId);
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
		} else if (name === 'image') {
			const files = (e.target as HTMLInputElement).files;
			setImageFile(files);
			const imageUrl = files && URL.createObjectURL(files[0]);
			imageUrl && setFileUrl(imageUrl);
		} else {
			setInputs({ ...inputs, [name]: value });
		}
	};

	const handleSubmitBtn = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		setHasOverlay(true);

		try {
			if (imageFile) {
				const timestamp = Date.now();
				const formDataDestroy = new FormData();
				imageId && formDataDestroy.append('public_id', imageId);
				formDataDestroy.append(
					'api_key',
					`${process.env.REACT_APP_CLOUDINARY_API_KEY}`
				);
				formDataDestroy.append('timestamp', timestamp.toString());
				formDataDestroy.append(
					'signature',
					sha1(
						`public_id=${imageId}&timestamp=${timestamp}${process.env.REACT_APP_CLOUDINARY_API_SECRET}`
					)
				);

				const formDataUpload = new FormData();
				imageFile && formDataUpload.append('file', imageFile[0]);
				formDataUpload.append('upload_preset', 'SenpaiKohai');

				imageId &&
					(await axios.post(
						`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/destroy`,
						formDataDestroy
					));

				const res = await axios.post(
					`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUD_NAME}/image/upload`,
					formDataUpload
				);

				console.log(res);

				await axios.put(
					`http://localhost:5000${pathname}`,
					{
						...inputs,
						profileImage: res.data.secure_url,
						profileImageId: res.data.public_id,
					},
					{
						withCredentials: true,
					}
				);
			} else {
				await axios.put(
					`http://localhost:5000${pathname}`,
					{ ...inputs, profileImage: myProfile.profileImage },
					{
						withCredentials: true,
					}
				);
			}

			await dispatch(getProfile());
			await dispatch(getUsers());

			setHasOverlay(false);

			if (isSenpai) {
				navigate('/profile/senpai');
			} else {
				navigate('/profile/kohai');
			}
		} catch (err: any) {
			if (err.response) {
				console.error(err.response.data);
				if (err.response.data.message === 'Please enter a valid email') {
					setErrorMessage(err.response.data.message);
				} else {
					setErrorMessage('Something went wrong...Please try again');
				}
			} else {
				setErrorMessage('Something went wrong...Please try again');
				console.error(err);
			}
			setHasOverlay(false);
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
		<>
			{hasOverlay ? <LoadingScreen text="Uploading" /> : null}
			<div
				className={`${bgColor()} w-screen min-h-screen pt-mobileHeaderHeight lg:pt-laptopHeaderHeight`}
			>
				<div className="container max-w-xl mx-auto py-paddingAroundtheContent px-6 sm:px-8 flex flex-col gap-y-6">
					<section className="flex gap-x-8 items-center">
						<img
							src={fileUrl ? fileUrl : myProfile.profileImage}
							alt="profile"
							className="object-cover w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full"
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
							<label htmlFor="name" className="font-bold nline-block">
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
							<label htmlFor="image" className="font-bold inline-block">
								Profile Picture
							</label>
							<br />
							<input
								type="file"
								id="image"
								name="image"
								accept="image/*"
								onChange={handleOnChange}
							/>
							<div className="text-sm">
								<p className="leading-snug">
									The pre-set picture is generated by{' '}
									<a
										href="https://getavataaars.com/"
										target="_blank"
										rel="noreferrer noopener"
										className="font-semibold hover:text-white underline"
									>
										avataaars generator
									</a>
								</p>
							</div>
						</article>
						<article>
							<label htmlFor="email" className="font-bold inline-block">
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
							{errorMessage === 'Please enter a valid email' ? (
								<p className="text-red-500">
									<BiInfoCircle className="inline" />
									{errorMessage}
								</p>
							) : null}
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
							<label htmlFor="description" className="font-bold inline-block">
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
					<div>
						{errorMessage && errorMessage !== 'Please enter a valid email' ? (
							<p className="text-red-500 mb-4">
								<BiInfoCircle className="inline" />
								{errorMessage}
							</p>
						) : null}
						<button
							className="bg-primary_title_color w-48 px-4 py-2 text-white rounded cursor-pointer"
							onClick={handleSubmitBtn}
						>
							Update Profile
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default ProfileSetting;
