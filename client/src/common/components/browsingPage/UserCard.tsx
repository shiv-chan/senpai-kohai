import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IUserProps from '../../../interfaces/browsing';
import {
	FaUserNinja,
	MdEmail,
	RiUser3Fill,
	RiHeart3Line,
	RiHeart3Fill,
} from 'react-icons/all';

const UserCard = ({
	name,
	publicEmail,
	profileImage,
	profile,
	isSenpai,
}: IUserProps) => {
	const [isLiked, setIsLiked] = useState<boolean>(false);

	const profileNameDisplay = () => {
		if (name === '') {
			return isSenpai
				? `Senpai#${profile.id.slice(0, 5)}`
				: `Kohai#${profile.id.slice(0, 5)}`;
		} else {
			return name;
		}
	};
	return (
		<Link
			to={`/profile/${isSenpai ? 'senpai' : 'kohai'}/${profile.id}`}
			className="z-0 w-full h-full"
		>
			<div className="w-full h-full flex-initial bg-white hover:bg-gray-50 rounded-lg p-5 z-0">
				<div className="flex justify-between items-start mb-7 mb-l-max:mb-2">
					<img
						src={profileImage}
						alt={`${name}'s image`}
						className="h-28 rounded-full mr-5 mobile_l_max:h-20"
					/>
					<div className="mt-2 w-60 mobile_l_max:w-50">
						<div className="flex items-center justify-between mb-1">
							<h1 className="text-xl font-bold mobile_l_max:text-base">
								{profileNameDisplay()}
							</h1>
							{isLiked ? (
								<RiHeart3Fill
									className="text-2xl mobile_l_max:text-xl z-30 text-favorite_color"
									onClick={() => setIsLiked((prevState) => !prevState)}
								/>
							) : (
								<RiHeart3Line
									className="text-2xl mobile_l_max:text-xl z-30"
									onClick={() => setIsLiked((prevState) => !prevState)}
								/>
							)}
						</div>
						<div className="flex items-center gap-x-1 text-sm mobile_l_max:text-xs">
							{isSenpai ? <FaUserNinja /> : <RiUser3Fill />}
							<p>{isSenpai ? 'Senpai' : 'Kohai'}</p>
						</div>
						<div className="flex items-center gap-x-1 text-sm mobile_l_max:text-xs">
							<MdEmail />
							<p>{publicEmail ? publicEmail : 'Contact is not provided yet'}</p>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap items-center">
					{profile.techStack.slice(0, 5).map((techStack) => (
						<span
							key={techStack}
							className="bg-tertiary_bg_color m-1 px-1.5 rounded-full mobile_l_max:text-xs"
						>
							{techStack}
						</span>
					))}
					{profile.techStack.length > 5 ? <span> and more</span> : null}
				</div>
			</div>
		</Link>
	);
};

export default UserCard;
