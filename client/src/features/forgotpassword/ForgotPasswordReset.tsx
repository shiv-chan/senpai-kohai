import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import LeftPart from '../../common/components/LeftPart';
import IPasswords from '../../interfaces/passwords';
import { FaUnlockAlt } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import ForgotPasswordInvalidUrl from './ForgotPasswordInvalidUrl';
import axios from 'axios';
import validator from 'validator';
import ForgotPasswordResetSuccess from './ForgotPasswordResetSuccess';

const ForgotPasswordReset: React.FC = () => {
	const [isPwVisible, setIsPwVisible] = useState<boolean>(false);
	const [isConfirmedPwVisible, setIsConfirmedPwVisible] = useState(false);
	const [passwords, setPasswords] = useState<IPasswords>({
		password: '',
		confirmedPassword: '',
	});
	const [isUrlValid, setIsUrlValid] = useState<null | boolean>(null);
	const [urlErrorMessage, setUrlErrorMessage] = useState<string>('');
	const [arePasswordsDiff, setArePasswordDiff] = useState<boolean>(false);
	const [isPasswordWeak, setIsPasswordWeak] = useState<boolean>(false);
	const [isPasswordSent, setIsPasswordSent] = useState<boolean>(false);
	const { hasheduserid } = useParams();

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setArePasswordDiff((prevState) => prevState && false);
		setIsPasswordWeak((prevState) => prevState && false);
		const { name, value } = e.target;
		setPasswords({ ...passwords, [name]: value });
	};

	const verifyUrl = async () => {
		try {
			console.log('verifying');
			const response = await axios.get(
				`https://senpai-kohai-backend.herokuapp.com/forgotpassword/reset/${hasheduserid}`
			);
			console.log(response.data.message);
			setIsUrlValid(true);
		} catch (error: any) {
			if (error.response) {
				console.error(error.response.data.message);
				setUrlErrorMessage(error.response.data.message);
			} else {
				console.error(error);
			}
			setIsUrlValid(false);
		}
	};

	useEffect(() => {
		verifyUrl();
	}, []);

	const updatePassword = async (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		// some functions
		if (passwords.password !== passwords.confirmedPassword) {
			setArePasswordDiff(true);
			return;
		} else if (
			!validator.isStrongPassword(passwords.password, {
				minLength: 6,
				minLowercase: 1,
				minUppercase: 0,
				minNumbers: 1,
				minSymbols: 0,
			})
		) {
			setIsPasswordWeak(true);
			return;
		}
		try {
			const response = await axios.put(
				`https://senpai-kohai-backend.herokuapp.com/forgotpassword/reset/${hasheduserid}/send`,
				passwords
			);
			console.log(response.data.message);
			setArePasswordDiff((prevState) => prevState && false);
			setIsPasswordWeak((prevState) => prevState && false);
			setIsPasswordSent(true);
		} catch (error: any) {
			if (error.response) {
				console.error(error.response.data.message);
			} else {
				console.error(error);
			}
		}
		setPasswords({ password: '', confirmedPassword: '' });
		setIsPwVisible(false);
		setIsConfirmedPwVisible(false);
	};

	return (
		<>
			{isUrlValid === null ? null : isUrlValid === true ? (
				<main className="flex w-screen h-screen bg-primary_bg_color text-primary_title_color">
					<LeftPart />
					{!isPasswordSent ? (
						<section className="flex justify-center my-auto h-9/12 w-1/2 tablet_l_max:w-full ">
							<div className="flex flex-col justify-end h-full w-7/12 mobile_xl_max:w-9/12">
								<p className="flex-initial mb-8 mobile_m_max:text-2xl mobile_m:text-3xl tablet_s:text-4xl">
									Create new password
								</p>
								<form action="" className="flex flex-col w-full">
									<label htmlFor="password" className="text-lg mb-2">
										Password
									</label>
									<div className="relative">
										<input
											id="password"
											type={isPwVisible ? 'text' : 'password'}
											className="h-10 mb-12 w-full text-xl px-8 rounded"
											onChange={handleOnChange}
											value={passwords.password}
											name="password"
										/>
										<FaUnlockAlt className="absolute top-2.5 left-2 text-xl text-gray-300" />
										<AiFillEyeInvisible
											className={[
												'cursor-pointer',
												'absolute',
												'top-2',
												'right-2',
												'text-2xl',
												'text-gray-300',
												isPwVisible ? 'hidden' : null,
											].join(' ')}
											onClick={() => setIsPwVisible((prevState) => !prevState)}
										/>
										<AiFillEye
											className={[
												'cursor-pointer',
												'absolute',
												'top-2',
												'right-2',
												'text-2xl',
												'text-gray-300',
												isPwVisible ? null : 'hidden',
											].join(' ')}
											onClick={() => setIsPwVisible((prevState) => !prevState)}
										/>
									</div>
									<div className="relative">
										<input
											type={isConfirmedPwVisible ? 'text' : 'password'}
											className="h-10 w-full text-xl px-8 rounded"
											onChange={handleOnChange}
											value={passwords.confirmedPassword}
											name="confirmedPassword"
										/>
										<FaUnlockAlt className="absolute top-2.5 left-2 text-xl text-gray-300" />
										<AiFillEyeInvisible
											className={[
												'cursor-pointer',
												'absolute',
												'top-2',
												'right-2',
												'text-2xl',
												'text-gray-300',
												isConfirmedPwVisible ? 'hidden' : null,
											].join(' ')}
											onClick={() =>
												setIsConfirmedPwVisible((prevState) => !prevState)
											}
										/>
										<AiFillEye
											className={[
												'cursor-pointer',
												'absolute',
												'top-2',
												'right-2',
												'text-2xl',
												'text-gray-300',
												isConfirmedPwVisible ? null : 'hidden',
											].join(' ')}
											onClick={() =>
												setIsConfirmedPwVisible((prevState) => !prevState)
											}
										/>
									</div>
									{arePasswordsDiff && (
										<p className="text-warning_color">
											Please set the same passwords on both input fields
										</p>
									)}
									{isPasswordWeak && (
										<p className="text-warning_color">
											Your password has to be minimum 6 letters, at least one
											lowercase and one number
										</p>
									)}
									<button className="button my-10" onClick={updatePassword}>
										Create
									</button>
									<Link to="/login" className="flex-initial underline m-auto">
										Back to login
									</Link>
								</form>
							</div>
						</section>
					) : (
						<ForgotPasswordResetSuccess />
					)}
				</main>
			) : (
				urlErrorMessage !== '' && (
					<ForgotPasswordInvalidUrl errorMessage={urlErrorMessage} />
				)
			)}
		</>
	);
};

export default ForgotPasswordReset;
