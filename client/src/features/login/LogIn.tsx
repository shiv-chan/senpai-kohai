import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LeftPart from '../../common/components/LeftPart';
import ISingUpLogIn from '../../interfaces/signUpLogIn';
import axios from 'axios';
import { MdMail } from 'react-icons/md';
import { FaUnlockAlt } from 'react-icons/fa';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

const LogIn: React.FC = () => {
  const [inputs, setInputs] = useState<ISingUpLogIn>({
    email: '',
    password: '',
  });
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [errMsgFromServer, setErrMsgFromServer] = useState<string>('');
  const navigate = useNavigate();

  const handleLogInBtn = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      await axios
        .post('http://localhost:5000/login', inputs, {
          withCredentials: true,
        })
        .then((response) => {
          navigate('/board');
          console.log(response.data.message);
        });
    } catch (error: any) {
      console.log(error);
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
    setInputs({ ...inputs, [name]: value });
  };
  return (
    <main className="flex w-screen h-screen bg-primary_bg_color text-primary_title_color">
      <LeftPart />
      <section className="flex justify-center my-auto h-9/12 w-1/2 tablet_l_max:w-full ">
        <div className="flex flex-col justify-end h-full w-7/12 mobile_xl_max:w-9/12">
          <h2 className="flex-initial text-4xl mb-3 mobile_l_max:text-3xl">
            Login
          </h2>
          <div className="mb-12 flex mobile_m_max:flex-col">
            <p className="flex-initial mr-1 mobile_l_max:text-sm">
              Not registered yet?
            </p>
            <Link to="/signup" className="underline font-bold">
              Create an Account
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
                className="mb-8 h-10 text-xl w-full pl-8 rounded "
                onChange={handleOnChange}
                value={inputs.email}
                name="email"
              />
              <MdMail className="absolute top-2.5 left-2 text-xl text-gray-300" />
            </div>
            <label htmlFor="password" className="text-lg mb-2">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={isVisible ? 'text' : 'password'}
                className="h-10 mb-12 text-xl w-full px-8 rounded"
                onChange={handleOnChange}
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
            <div className="flex justify-between mobile_m_max:text-sm">
              <div className="mb-8">
                <input
                  id="checkbox"
                  type="checkbox"
                  className="mr-1 cursor-pointer"
                />
                <label htmlFor="checkbox">Remember me</label>
              </div>
              <Link to="/forgotpassword" className="underline font-bold">
                Forgot password?
              </Link>
            </div>
            <button className="button mb-2" onClick={handleLogInBtn}>
              Login
            </button>
            <p className="text-warning_color text-center">{errMsgFromServer}</p>
          </form>
          <p className="flex-initial mobile_l_max:text-sm pt-10">
            If you just wanna play around, you can login as a test user.
            <span className="block mt-2">
              Email Address:{' '}
              <span className="font-bold">peekanapp@mail.com</span>
            </span>
            <span className="block">
              Password: <span className="font-bold">Sk8erBoi</span>
            </span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default LogIn;
