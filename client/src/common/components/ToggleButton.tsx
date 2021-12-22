import React, { useState, useEffect } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { deepPurple, indigo } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';
import IProfileSetting from '../../interfaces/profileSetting';
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { getUsers } from '../usersSlice';
import { getProfile } from '../myProfileSlice';

const ToggleButton: React.FunctionComponent<{
	isSenpai: undefined | boolean;
	inputs: IProfileSetting;
	setInputs: React.Dispatch<React.SetStateAction<IProfileSetting>>;
}> = ({ isSenpai, inputs, setInputs }) => {
	const myProfile = useAppSelector((state) => state.myProfile.myProfile);
	const dispatch = useAppDispatch();
	const mobileDevices = useMediaQuery('(max-width:425px)');

	const labelText = isSenpai
		? "I'm available for support"
		: "I'm looking for support";

	const [isChecked, setIsChecked] = useState<boolean>(false);

	useEffect(() => {
		myProfile.senpaiProfile &&
			myProfile.kohaiProfile &&
			setIsChecked(
				isSenpai
					? myProfile.senpaiProfile.isActive
					: myProfile.kohaiProfile.isActive
			);
	}, [isSenpai, myProfile]);

	const ToggleLabel = styled(FormControlLabel)(() => ({
		'& .MuiFormControlLabel-label': {
			fontSize: mobileDevices ? '0.65rem' : '1rem',
		},
	}));

	const SenpaiToggle = styled(Switch)(({ theme }) => ({
		'& .MuiSwitch-switchBase.Mui-checked': {
			color: deepPurple[500],
			'&:hover': {
				backgroundColor: alpha(
					deepPurple[500],
					theme.palette.action.hoverOpacity
				),
			},
		},
		'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
			backgroundColor: deepPurple[500],
		},
	}));

	const KohaiToggle = styled(Switch)(({ theme }) => ({
		'& .MuiSwitch-switchBase.Mui-checked': {
			color: indigo[900],
			'&:hover': {
				backgroundColor: alpha(indigo[900], theme.palette.action.hoverOpacity),
			},
		},
		'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
			backgroundColor: indigo[900],
		},
	}));

	const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const { checked } = e.target;
		const pathname = isSenpai
			? '/profile/setting/toggle/senpai'
			: '/profile/setting/toggle/kohai';

		setInputs({ ...inputs, isActive: checked });
		setIsChecked((prevState) => !prevState);
		try {
			await axios.put(
				`https://kaho-test-server.herokuapp.com${pathname}`,
				{
					isActive: checked,
				},
				{
					withCredentials: true,
				}
			);
		} catch (err: any) {
			if (err.response) {
				console.error(err.response.data.message);
			} else {
				console.error(err);
			}
		}

		dispatch(getUsers());
		dispatch(getProfile());
	};

	return (
		<FormGroup>
			<ToggleLabel
				control={
					isSenpai ? (
						<SenpaiToggle
							size={mobileDevices ? 'small' : 'medium'}
							checked={isChecked}
							onChange={handleOnChange}
						/>
					) : (
						<KohaiToggle
							size={mobileDevices ? 'small' : 'medium'}
							checked={isChecked}
							onChange={handleOnChange}
						/>
					)
				}
				label={labelText}
			/>
		</FormGroup>
	);
};

export default ToggleButton;
