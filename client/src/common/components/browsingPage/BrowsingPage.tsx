import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../../app/hook';
import UserCard from './UserCard';

const BrowsingPage = () => {
  const users = useAppSelector((state) => state.users.users);
  const myProfile = useAppSelector((state) => state.myProfile.myProfile);
  const [otherUsers, setOtherUsers] = useState([]);

  const createOtherUsersList = () => {
    const otherUsersList = users.filter(
      (user: any) => user._id !== myProfile._id
    );
    setOtherUsers(otherUsersList);
    console.log(otherUsersList);
  };

  useEffect(() => {
    if (users && myProfile) createOtherUsersList();
  }, [users]);

  return (
    <>
      {otherUsers.length !== 0 && (
        <main className="bg-primary_bg_color flex flex-row flex-wrap justify-center items-center  mt-laptopHeaderHeight tablet_md_max:mt-mobileHeaderHeight px-14 py-16 w-full gap-6">
          {otherUsers.map((user: any) => (
            <>
              <UserCard
                {...user}
                key={user.senpaiProfile.id}
                profile={user.senpaiProfile}
                isSenpai={true}
              />
              <UserCard
                {...user}
                key={user.kohaiProfile.id}
                profile={user.kohaiProfile}
                isSenpai={false}
              />
            </>
          ))}
        </main>
      )}
    </>
  );
};

export default BrowsingPage;
