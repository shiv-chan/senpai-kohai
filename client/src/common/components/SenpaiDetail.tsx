import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hook';
import { FaUserNinja, MdEmail } from 'react-icons/all';
import { ISenpai } from '../../interfaces/profile';

const SenpaiDetail = () => {
	const { id } = useParams();
	const users = useAppSelector((state) => state.users.users);
	const [targetUser, setTargetUser] = useState<ISenpai | null>(null);

	useEffect(() => {
		if (users)
			setTargetUser(
				users.find(
					(user: { senpaiProfile: { id: string | undefined } }) =>
						user.senpaiProfile.id === id
				)
			);
	}, [users, id]);

	const profileNameDisplay = () => {
		return targetUser?.name === ''
			? `Senpai#${targetUser?.senpaiProfile.id.slice(0, 5)}`
			: targetUser?.name;
	};

	const publicEmailDisplay = () => {
		return !targetUser?.publicEmail
			? 'Contact is not provided yet'
			: targetUser?.publicEmail;
	};

	return (
		<div className="bg-primary_bg_color w-full min-h-screen pt-mobileHeaderHeight lg:pt-laptopHeaderHeight">
			<div className="container max-w-xl mx-auto py-paddingAroundtheContent px-6 sm:px-8 flex flex-col gap-y-6">
				<section className="flex flex-wrap gap-x-8 gap-y-4 relative">
					<img
						src={targetUser?.profileImage}
						alt="profile"
						className="object-cover w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full"
					/>
					<div className="flex flex-col justify-center">
						<h1 className="text-xl font-bold mb-3">{profileNameDisplay()}</h1>
						<article>
							<div className="flex items-center gap-x-2">
								<FaUserNinja />
								<span>Senpai</span>
							</div>
							<div className="flex items-center gap-x-2">
								<MdEmail />
								<span>{publicEmailDisplay()}</span>
							</div>
						</article>
					</div>
				</section>
				<section className="flex flex-col gap-y-6">
					<article>
						<h2 className="font-bold mb-1">Skills</h2>
						<div className="bg-white rounded p-4 min-h-6">
							{targetUser?.senpaiProfile.techStack.map(
								(skill: String, index: Number) => (
									<div
										key={`${index}`}
										className="inline-block mx-1 my-2 px-2 rounded-full bg-tertiary_bg_color"
									>
										{skill}
									</div>
								)
							)}
						</div>
					</article>
					<article>
						<h2 className="font-bold mb-1">Description</h2>
						<div className="whitespace-pre-line bg-white rounded p-4 min-h-12">
							{targetUser?.senpaiProfile.description}
						</div>
					</article>
				</section>
			</div>
		</div>
	);
};

export default SenpaiDetail;
