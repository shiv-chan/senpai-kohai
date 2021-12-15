import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../../app/hook';
import UserCard from './UserCard';

const BrowsingPage = () => {
	const users = useAppSelector((state) => state.users.users);
	const myProfile = useAppSelector((state) => state.myProfile.myProfile);
	const [otherUsers, setOtherUsers] = useState<any>([]);
	const [senpaiProfiles, setSenpaiProfiles] = useState<any>([]);
	const [kohaiProfiles, setKohaiProfiles] = useState<any>([]);

	const createOtherUsersList = () => {
		const otherUsersList = users.filter(
			(user: any) => user._id !== myProfile._id
		);
		setOtherUsers(otherUsersList);
		console.log(otherUsersList);
	};

	const sortSenpai = () => {
		if (otherUsers.length) {
			const senpaiProfilesArr = otherUsers.map((user: any) => {
				const { _id, name, profileImage, publicEmail, senpaiProfile } = user;
				return {
					id: `s${_id}`,
					name,
					profileImage,
					publicEmail,
					profile: senpaiProfile,
					isSenapi: true,
				};
			});

			setSenpaiProfiles(senpaiProfilesArr);
		}
	};

	const sortKohai = () => {
		if (otherUsers.length) {
			const kohaiProfilesArr = otherUsers.map((user: any) => {
				const { name, profileImage, publicEmail, kohaiProfile } = user;
				return { name, profileImage, publicEmail, profile: kohaiProfile };
			});

			setKohaiProfiles(kohaiProfilesArr);
		}
	};

	useEffect(() => {
		if (users && myProfile) {
			createOtherUsersList();
		}
		sortSenpai();
		sortKohai();
	}, [users]);

	console.group('Senapi');
	console.log(senpaiProfiles);
	console.groupEnd();
	console.group('Kohai');
	console.log(kohaiProfiles);
	console.groupEnd();

	return (
		<>
			{otherUsers.length !== 0 && (
				<main className="bg-primary_bg_color mt-laptopHeaderHeight tablet_md_max:mt-mobileHeaderHeight px-14 py-16 w-full">
					<section className="relative mx-auto grid grid-cols-1 md:grid-cols-2 auto-rows-auto justify-items-center items-center gap-6">
						{otherUsers.map((user: any, index: number) => (
							<React.Fragment key={index}>
								<UserCard
									{...user}
									key={user.senpaiProfile.id}
									profile={user.senpaiProfile}
									isSenpai={true}
								/>
								<UserCard
									{...user}
									key={user.kohaiProfile.id}
									profile={user.kohaiProfile}
									isSenpai={false}
								/>
							</React.Fragment>
						))}
					</section>
				</main>
			)}
		</>
	);
};

export default BrowsingPage;
