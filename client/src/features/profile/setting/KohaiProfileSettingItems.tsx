import React from 'react';
import IProfileSetting from '../../../interfaces/profileSetting';

const KohaiProfileSettingItems: React.FunctionComponent<{
	inputs: IProfileSetting;
	handleOnChange: any;
}> = ({ inputs, handleOnChange }) => {
	return (
		<article>
			<label htmlFor="tech-stack" className="font-bold inline-block">
				<p>*What skills do you have or are you interested in?</p>
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
	);
};

export default KohaiProfileSettingItems;
