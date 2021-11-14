import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserNinja, MdEmail, HiPencil } from 'react-icons/all';

const skillsSampleData: string[] = [
	'JavaScript',
	'React',
	'Frontend',
	'Python',
	'Product Design',
];
const descriptionSampleData =
	"Hi 👋\n\nI'm Jane!\n\nI can support you, my Kohai in the following ways.\n- Code review\n- Mock interview\n\nPlease feel free to email me!";

const SenpaiProfile = () => {
	console.log(descriptionSampleData);
	return (
		// TODO: adjust margin-top based on the height of the header
		<div className="bg-primary_bg_color w-screen min-h-screen mt-mobileHeaderHeight lg:mt-laptopHeaderHeight">
			<div className="container max-w-xl mx-auto py-paddingAroundtheContent px-6 sm:px-8 flex flex-col gap-y-6">
				<section className="flex gap-x-8 relative">
					<img
						src="https://dummyimage.com/300x300/ededed/d4d4d4.png"
						alt="dummy-profile"
						className="w-1/3 h-1/3 rounded-full"
					/>
					<div className="flex flex-col justify-center">
						<h1 className="text-xl font-bold mb-3">Jane Doe</h1>
						<Link
							to="/profile/setting/senpai"
							className="flex items-center gap-x-1 absolute top-0	right-0 underline"
						>
							<HiPencil />
							Edit
						</Link>
						<article>
							<div className="flex items-center gap-x-2">
								<FaUserNinja />
								<span>Senpai</span>
							</div>
							<div className="flex items-center gap-x-2">
								<MdEmail />
								<span>janed@mail.com</span>
							</div>
						</article>
					</div>
				</section>
				<section className="flex flex-col gap-y-6">
					<article>
						<h2 className="font-bold mb-1">Skills</h2>
						<div className="bg-white rounded p-4 min-h-6">
							{skillsSampleData.map((skill) => (
								<div className="inline-block mx-1 my-2 px-2 rounded-full bg-tertiary_bg_color">
									{skill}
								</div>
							))}
						</div>
					</article>
					<article>
						<h2 className="font-bold mb-1">Description</h2>
						<div className="whitespace-pre-line bg-white rounded p-4 min-h-12">
							{descriptionSampleData}
						</div>
					</article>
				</section>
			</div>
		</div>
	);
};

export default SenpaiProfile;
