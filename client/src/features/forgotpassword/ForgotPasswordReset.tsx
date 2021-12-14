import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import LeftPart from '../../common/components/LeftPart';
import IPasswords from '../../interfaces/passwords';
import { FaUnlockAlt } from 'react-icons/fa';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import ForgotPasswordInvalidUrl from './ForgotPasswordInvalidUrl';
import axios from 'axios';
const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[0-9])[a-zA-Z0-9~`! @#\$%\^&*()_\-\+=\{\[\}\]\|\\:;"'<,>\.\?/]{6,32}$/;

const ForgotPasswordReset: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [passwords, setPasswords] = useState<IPasswords>({
    password: '',
    confirmedPassword: '',
  });
  const [isUrlValid, setIsUrlValid] = useState<null | boolean>(null);
  const [urlErrorMessage, setUrlErrorMessage] = useState<string>('');
  const [arePasswordsDiff, setArePasswordDiff] = useState<boolean>(false);
  const [isPasswordWeak, setIsPasswordWeak] = useState<boolean>(false);
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
        `http://localhost:5000/forgotpassword/reset/${hasheduserid}`
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
    } else if (!PASSWORD_REGEX.test(passwords.password)) {
      setIsPasswordWeak(true);
      return;
    }
    try {
      const response = await axios.put(
        `http://localhost:5000/forgotpassword/reset/${hasheduserid}/send`,
        passwords
      );
      console.log(response.data.message);
      setArePasswordDiff((prevState) => prevState && false);
      setIsPasswordWeak((prevState) => prevState && false);
    } catch (error: any) {
      console.log(error);
      if (error.response) {
        console.error(error.response.data.message);
      } else {
        console.error(error);
      }
    }
    setPasswords({ password: '', confirmedPassword: '' });
    setIsVisible(false);
  };

  return (
    <>
      {isUrlValid === null ? null : isUrlValid === true ? (
        <main className="flex w-screen h-screen bg-primary_bg_color text-primary_title_color">
          <LeftPart />
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
                    type={isVisible ? 'text' : 'password'}
                    className="h-10 mb-12 w-full px-8"
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
                <div className="relative">
                  <input
                    type="password"
                    className="h-10 mb-12 w-full px-8"
                    onChange={handleOnChange}
                    value={passwords.confirmedPassword}
                    name="confirmedPassword"
                  />
                  <FaUnlockAlt className="absolute top-2.5 left-2 text-xl text-gray-300" />
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
                <button className="button mb-10" onClick={updatePassword}>
                  Create
                </button>
                <Link to="/login" className="flex-initial underline m-auto">
                  Back to login
                </Link>
              </form>
            </div>
          </section>
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
