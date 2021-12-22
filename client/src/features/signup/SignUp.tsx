import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LeftPart from '../../common/components/LeftPart';
import ISingUpLogIn from '../../interfaces/signUpLogIn';
import axios from 'axios';
import { MdMail } from 'react-icons/md';
import { FaUnlockAlt } from 'react-icons/fa';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import validator from 'validator';

const SignUp: React.FC = () => {
	const [inputs, setInputs] = useState<ISingUpLogIn>({
		email: '',
		password: '',
	});
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [isPasswordInvalid, setIsPasswordInvalid] = useState<boolean>(false);
	const [isEmailInvalid, setIsEmailInvalid] = useState<boolean>(false);
	const [errMsgFromServer, setErrMsgFromServer] = useState<string>('');
	const navigate = useNavigate();

	const checkPassword = (password: string) =>
		!validator.isStrongPassword(password, {
			minLength: 6,
			minLowercase: 1,
			minUppercase: 0,
			minNumbers: 1,
			minSymbols: 0,
		});

	const handleSignUpBtn = async (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		if (!validator.isEmail(inputs.email)) {
			setIsEmailInvalid(true);
			return;
		} else if (checkPassword(inputs.password)) {
			setIsPasswordInvalid(true);
			return;
		}
		try {
			await axios
				.post('https://kaho-test-server.herokuapp.com/signup', inputs, {
					withCredentials: true,
				})
				.then(async (response) => {
					await console.log(response.data.message);
					navigate('/board');
				});
		} catch (error: any) {
			if (error.response) {
				console.error(error.response.data.message);
				setErrMsgFromServer(error.response.data.message);
			} else {
				console.error(error);
				setErrMsgFromServer('Sorry, unexpected error occured');
			}
		}
	};

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		errMsgFromServer.length !== 0 && setErrMsgFromServer('');
		if (name === 'email') {
			setIsEmailInvalid((prevState) => prevState && !prevState);
		} else if (name === 'password') {
			setIsPasswordInvalid((prevState) => prevState && !prevState);
		}
		setInputs({ ...inputs, [name]: value });
	};

	const handleOnBlur = (e: React.FocusEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		e.preventDefault();
		if (name === 'email') {
			!validator.isEmail(value) && setIsEmailInvalid(true);
		} else if (name === 'password') {
			checkPassword(value) && setIsPasswordInvalid(true);
		}
	};

	return (
		<main className="flex w-screen h-screen bg-primary_bg_color text-primary_title_color">
			<LeftPart />
			<section className="flex justify-center my-auto h-9/12 w-1/2 tablet_l_max:w-full">
				<div className="flex flex-col justify-center h-full w-7/12 mobile_xl_max:w-9/12">
					<h2 className="flex-initial text-4xl mb-3 mobile_l_max:text-3xl">
						Create an Account
					</h2>
					<div className="mb-12 flex mobile_m_max:flex-col">
						<p className="flex-initial mr-1 mobile_l_max:text-sm">
							Already have an account?
						</p>
						<Link to="/login" className="underline font-bold">
							Login
						</Link>
					</div>
					<form action="" className="flex flex-col w-full">
						<label htmlFor="email" className="text-lg mb-2">
							Email Address
						</label>
						<div className="relative">
							<input
								id="email"
								type="email"
								className="h-10 text-xl w-full pl-8 rounded"
								onChange={handleOnChange}
								onBlur={handleOnBlur}
								value={inputs.email}
								name="email"
							/>
							<MdMail className="absolute top-2.5 left-2 text-xl text-gray-300" />
						</div>
						{isEmailInvalid ? (
							<p className="text-warning_color">
								Please input a valid email address
							</p>
						) : null}
						<label htmlFor="password" className="text-lg mb-2 mt-8">
							Password
						</label>
						<div className="relative">
							<input
								id="password"
								type={isVisible ? 'text' : 'password'}
								className="h-10 w-full text-xl px-8 rounded"
								onChange={handleOnChange}
								onBlur={handleOnBlur}
								value={inputs.password}
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
									isVisible ? 'hidden' : null,
								].join(' ')}
								onClick={() => setIsVisible((prevState) => !prevState)}
							/>
							<AiFillEye
								className={[
									'cursor-pointer',
									'absolute',
									'top-2',
									'right-2',
									'text-2xl',
									'text-gray-300',
									isVisible ? null : 'hidden',
								].join(' ')}
								onClick={() => setIsVisible((prevState) => !prevState)}
							/>
						</div>
						{isPasswordInvalid ? (
							<p className="text-warning_color">
								Your password has to be minimum 6 letters, at least one
								lowercase and one number
							</p>
						) : null}
						<button className="button mt-12 mb-2" onClick={handleSignUpBtn}>
							Sign Up
						</button>
						{errMsgFromServer.length !== 0 && (
							<p className="text-warning_color text-center">
								{errMsgFromServer}
							</p>
						)}
					</form>
					<p className="flex-initial mobile_l_max:text-sm pt-10">
						If you wanna just try it out, you can login as a test user. Please
						skip singning up and go to{' '}
						<Link to="/login" className="underline font-bold">
							Login
						</Link>
						.
					</p>
				</div>
			</section>
		</main>
	);
};

export default SignUp;
