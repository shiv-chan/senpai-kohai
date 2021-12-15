import React from 'react';
import { useAppSelector } from '../../../app/hook';
import UserCard from './UserCard';

const BrowsingPage = () => {
  const users = useAppSelector((state) => state.users.users);
  // const authorization = useAppSelector((state) => state.authorization);
  console.log(users);

  return (
    <>
      {users && (
        <main className="bg-primary_bg_color flex flex-row flex-wrap justify-center gap-6 mt-laptopHeaderHeight px-40 pt-16">
          {users.map((user: any, index: number) => (
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
