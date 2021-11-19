import React, { useState } from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { alpha, styled } from '@mui/material/styles';
import { deepPurple, indigo } from '@mui/material/colors';
import useMediaQuery from '@mui/material/useMediaQuery';
import axios from 'axios';

const ToggleButton: React.FunctionComponent<{ isSenpai: undefined | boolean }> =
	({ isSenpai }) => {
		const mobileDevices = useMediaQuery('(max-width:425px)');

		const labelText = isSenpai
			? "I'm available for support"
			: "I'm looking for support";

		const [isChecked, setIsChecked] = useState(true);

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
					backgroundColor: alpha(
						indigo[900],
						theme.palette.action.hoverOpacity
					),
				},
			},
			'& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
				backgroundColor: indigo[900],
			},
		}));

		const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
			const { checked } = e.target;
			const pathname = isSenpai ? '/profile/senpai' : '/profile/kohai';

			setIsChecked((prevState) => !prevState);
			try {
				const response = await axios.put(`http://localhost:5000${pathname}`, {
					isActive: checked,
				});
				console.log(response);
			} catch (err: any) {
				console.error(err.response.data.message);
			}
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
