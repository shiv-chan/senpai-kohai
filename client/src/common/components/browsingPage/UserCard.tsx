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

	const handleLike = (e: React.MouseEvent<SVGAElement>) => {
		e.preventDefault();
		setIsLiked((prevState) => !prevState);
		e.stopPropagation();
	};

	return (
		<Link
			to={`/profile/${isSenpai ? 'senpai' : 'kohai'}/${profile.id}`}
			className="z-0 w-full h-full"
		>
			<div className="w-full h-full flex flex-col bg-white hover:bg-gray-50 rounded-lg p-5 z-0 relative">
				{isLiked ? (
					<RiHeart3Fill
						className="text-2xl mobile_l_max:text-xl z-30 text-favorite_color absolute top-4 right-4"
						onClick={handleLike}
					/>
				) : (
					<RiHeart3Line
						className="text-2xl mobile_l_max:text-xl z-30 hover:text-favorite_color absolute top-4 right-4"
						onClick={handleLike}
					/>
				)}
				<div className="w-full flex flex-wrap mb-7 mb-l-max:mb-2 gap-5">
					<img
						src={profileImage}
						alt={name}
						className="object-cover w-28 h-28 rounded-full mobile_l_max:h-16 mobile_l_max:w-16"
					/>
					<div className="mt-2 min-w-max">
						<div className="flex items-center justify-between mb-1">
							<h1 className="text-xl font-bold mobile_l_max:text-base">
								{profileNameDisplay()}
							</h1>
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
				<div className="flex flex-wrap">
					{profile.techStack.slice(0, 5).map((techStack) => (
						<span
							key={techStack}
							className="bg-tertiary_bg_color m-1 px-1.5 rounded-full mobile_l_max:text-xs"
						>
							{techStack}
						</span>
					))}
					{profile.techStack.length > 5 && (
						<span className="mobile_l_max:text-xs self-center">
							{' '}
							...and more
						</span>
					)}
				</div>
			</div>
		</Link>
	);
};

export default UserCard;
