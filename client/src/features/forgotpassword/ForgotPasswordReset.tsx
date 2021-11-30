import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftPart from '../../common/components/LeftPart';
import IPasswords from '../../interfaces/passwords';
import { FaUnlockAlt } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const ForgotPasswordReset = () => {
	const [isVisible, setIsVisible] = useState<boolean>(false);
	const [passwords, setPasswords] = useState<IPasswords>({
		password: '',
		confirmedPassword: '',
	});

	const createNewPassword = (e: React.FormEvent<HTMLButtonElement>) => {
		e.preventDefault();
		// some functions
		setPasswords({ password: '', confirmedPassword: '' });
		setIsVisible(false);
	};

	return (
		<main className='flex w-screen h-screen bg-primary_bg_color text-primary_title_color'>
			<LeftPart />
			<section className='flex justify-center my-auto h-9/12 w-1/2 tablet_l_max:w-full '>
				<div className='flex flex-col justify-end h-full w-7/12 mobile_xl_max:w-9/12'>
					<p className='flex-initial mb-8 mobile_m_max:text-2xl mobile_m:text-3xl tablet_s:text-4xl'>
						Create new password
					</p>
					<form action='' className='flex flex-col w-full'>
						<label htmlFor='password' className='text-lg mb-2'>
							Password
						</label>
						<div className='relative'>
							<input
								type={isVisible ? 'text' : 'password'}
								className='h-10 mb-12 w-full px-8'
								onChange={(e) =>
									setPasswords({ ...passwords, password: e.target.value })
								}
								value={passwords.password}
							/>
							<FaUnlockAlt className='absolute top-2.5 left-2 text-xl text-gray-300' />
							<AiFillEyeInvisible
								className={[
									'cursor-pointer',
									'absolute',
									'top-2',
									'left-custom_left',
									'mobile_l_max:left-mb_custom_left',
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
									'left-custom_left',
									'mobile_l_max:left-mb_custom_left',
									'text-2xl',
									'text-gray-300',
									isVisible ? null : 'hidden',
								].join(' ')}
								onClick={() => setIsVisible((prevState) => !prevState)}
							/>
						</div>
						<div className='relative'>
							<input
								type='password'
								className='h-10 mb-12 w-full px-8'
								onChange={(e) =>
									setPasswords({
										...passwords,
										confirmedPassword: e.target.value,
									})
								}
								value={passwords.confirmedPassword}
							/>
							<FaUnlockAlt className='absolute top-2.5 left-2 text-xl text-gray-300' />
						</div>
						<button
							className='button mb-10'
							onClick={(e) => createNewPassword(e)}
						>
							Create
						</button>
						<Link to='/login' className='flex-initial underline m-auto'>
							Back to login
						</Link>
					</form>
				</div>
			</section>
		</main>
	);
};

export default ForgotPasswordReset;