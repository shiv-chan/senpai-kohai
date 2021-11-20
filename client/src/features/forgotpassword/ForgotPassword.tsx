import React from 'react';
import { Link } from 'react-router-dom';
import LeftPart from '../../common/components/LeftPart';
import { MdMail } from 'react-icons/md';

const ForgotPassword = () => {
	// add the function in the future?
	return (
		<div className='flex w-screen h-screen bg-primary_bg_color text-primary_title_color'>
			<LeftPart />
			<section className='flex justify-center my-auto h-9/12 w-1/2 tablet_l_max:w-full'>
				<div className='flex flex-col justify-center h-full w-7/12 mobile_xl_max:w-9/12'>
					<p className='flex-initial text-4xl mb-12 mobile_l_max:text-3xl'>
						Forgot password?
					</p>
					<form action='' className='flex flex-col w-full'>
						<label htmlFor='email' className='text-lg mb-2'>
							Email Address
						</label>
						<div className='relative'>
							<input type='email' className='mb-8 h-10 text-xl w-full pl-8' />
							<MdMail className='absolute top-2.5 left-2 text-xl text-gray-300' />
						</div>
						<Link to='/forgotpassword/message'>
							<button className='button mb-10 w-full'>Send</button>
						</Link>
						<Link to='/login' className='flex-initial underline m-auto'>
							Back to login
						</Link>
					</form>
				</div>
			</section>
		</div>
	);
};

export default ForgotPassword;
