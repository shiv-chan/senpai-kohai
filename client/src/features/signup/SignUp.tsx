import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LeftPart from '../../common/components/LeftPart';
import axios from 'axios';

const SignUp = () => {
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');

	const signUpWithEmailAndPassword = async (
		e: React.FormEvent<HTMLButtonElement>
	) => {
		e.preventDefault();
		try {
			console.log('clicked');
			const res = await axios.post(
				'http://localhost:5000/signup',
				{
					email,
					password,
				},
				{
					withCredentials: true,
				}
			);
			console.log(res.data.message);
			setEmail('');
			setPassword('');
		} catch (error: any) {
			if (error.response) {
				console.error(error.response.data.message);
			} else {
				console.error(`Error: ${error}`);
			}
		}
	};

	return (
		<div className="flex w-screen h-screen bg-primary_bg_color text-primary_title_color">
			<LeftPart />
			<section className="flex justify-center my-auto h-9/12 w-1/2">
				<div className="flex flex-col justify-end h-full w-7/12">
					<p className="flex-initial text-4xl mb-2">Create an Account</p>
					<p className="flex-initial mb-12">
						Already have an account?{' '}
						<Link to="/login" className="underline">
							Login
						</Link>
					</p>
					<form action="" className="flex flex-col">
						<label htmlFor="email" className="text-lg mb-2">
							Email Address
						</label>
						<input
							type="email"
							className="mb-8 h-10 text-xl"
							onChange={(e) => setEmail(e.target.value)}
							value={email}
						/>
						<label htmlFor="password" className="text-lg mb-2">
							Password
						</label>
						<input
							type="password"
							className="h-10 mb-12"
							onChange={(e) => setPassword(e.target.value)}
							value={password}
						/>
						<button
							className="button"
							onClick={(e) => signUpWithEmailAndPassword(e)}
						>
							Sign Up
						</button>
					</form>
				</div>
			</section>
		</div>
	);
};

export default SignUp;
