import React, { useState } from 'react';

const ContactButton: React.FunctionComponent<{
	name: string | undefined;
	publicEmail: string | undefined;
}> = ({ name, publicEmail }) => {
	const [copyMessage, setCopyMessage] = useState<string | null>(null);

	const handleContactBtnClick = () => {
		const email = publicEmail;
		if (email) {
			navigator.clipboard
				.writeText(email)
				.then(() => {
					setCopyMessage(`${name}'s contact is copied!`);
					setTimeout(() => setCopyMessage(null), 3000);
				})
				.catch((err) => {
					setCopyMessage(`Something went wrong...Please try again`);
					setTimeout(() => setCopyMessage(null), 3000);
					console.error(err);
				});
		} else {
			setCopyMessage(`Sorry...the contact is not provided yet.`);
			setTimeout(() => setCopyMessage(null), 3000);
		}
	};

	return (
		<div className="flex flex-col items-center">
			<button
				className="bg-primary_title_color self-center my-2 px-6 py-2 text-white rounded-full cursor-pointer inline-block text-sm md:text-base"
				onClick={handleContactBtnClick}
			>
				Contact {name}
			</button>
			<span className="text-primary_title_color text-sm md:text-base">
				{copyMessage}
			</span>
		</div>
	);
};

export default ContactButton;
