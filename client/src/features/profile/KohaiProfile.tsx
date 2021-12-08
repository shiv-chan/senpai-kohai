import React from 'react';
import { Link } from 'react-router-dom';
import { RiUser3Fill, MdEmail, HiPencil } from 'react-icons/all';
import { useAppSelector } from '../../app/hook';

const KohaiProfile = () => {
	const myProfile = useAppSelector((state) => state.myProfile.myProfile);

	const profileName = () => {
		return myProfile.name === ''
			? `Kohai#${myProfile.kohaiProfile.id.slice(0, 5)}`
			: myProfile.name;
	};

	const publicEmail = () => {
		return myProfile.publicEmail === ''
			? 'Contact is not provided yet'
			: myProfile.publicEmail;
	};

	return (
		<div className="bg-secondary_bg_color w-full min-h-screen pt-mobileHeaderHeight lg:pt-laptopHeaderHeight">
			<div className="container max-w-xl mx-auto py-paddingAroundtheContent px-6 sm:px-8 flex flex-col gap-y-6">
				<section className="flex flex-wrap gap-x-8 gap-y-4 relative">
					<img
						src={myProfile.profileImage}
						alt="profile"
						className="object-cover w-28 h-28 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full"
					/>
					<div className="flex flex-col justify-center">
						<h1 className="text-xl font-bold mb-3">{profileName()}</h1>
						<Link
							to="/profile/setting/kohai"
							className="flex items-center gap-x-1 absolute top-0	right-0 underline"
						>
							<HiPencil />
							Edit
						</Link>
						<article>
							<div className="flex items-center gap-x-2">
								<RiUser3Fill />
								<span>Kohai</span>
							</div>
							<div className="flex items-center gap-x-2">
								<MdEmail />
								<span>{publicEmail()}</span>
							</div>
						</article>
					</div>
				</section>
				<section className="flex flex-col gap-y-6">
					<article>
						<h2 className="font-bold mb-1">Skills</h2>
						<div className="bg-white rounded p-4 min-h-6">
							{Object.keys(myProfile).length !== 0 &&
								myProfile.kohaiProfile.techStack.map(
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
							{Object.keys(myProfile).length !== 0 &&
								myProfile.kohaiProfile.description}
						</div>
					</article>
				</section>
			</div>
		</div>
	);
};

export default KohaiProfile;
