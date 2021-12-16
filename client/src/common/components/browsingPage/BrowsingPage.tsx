import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../../app/hook';
import UserCard from './UserCard';

const BrowsingPage = () => {
  const users = useAppSelector((state) => state.users.users);
  const myProfile = useAppSelector((state) => state.myProfile.myProfile);
  const [otherProfiles, setOtherProfiles] = useState<any>([]);

  const sortSenpaiOrKohai = (otherProfiles: any, isSenpai: boolean) => {
    let sortedProfilesArr = [];
    if (otherProfiles.length !== 0) {
      sortedProfilesArr = otherProfiles.map((user: any) => {
        const {
          _id,
          name,
          profileImage,
          publicEmail,
          senpaiProfile,
          kohaiProfile,
        } = user;
        return isSenpai
          ? {
              id: `s-${_id}`,
              name,
              profileImage,
              publicEmail,
              profile: senpaiProfile,
              isSenpai: true,
            }
          : {
              id: `k-${_id}`,
              name,
              profileImage,
              publicEmail,
              profile: kohaiProfile,
              isSenpai: false,
            };
      });
    }
    return sortedProfilesArr;
  };

  const createOtherProfilesList = () => {
    const otherProfilesList = users.filter(
      (user: any) => user._id !== myProfile._id
    );
    console.log(otherProfilesList);
    const senpaiProfiles: any = sortSenpaiOrKohai(otherProfilesList, true);
    const kohaiProfiles: any = sortSenpaiOrKohai(otherProfilesList, false);
    console.log(senpaiProfiles);
    console.log(kohaiProfiles);
    setOtherProfiles([...senpaiProfiles, ...kohaiProfiles]);
  };

  useEffect(() => {
    if (users && myProfile) createOtherProfilesList();
  }, [users]);

  return (
    <>
      {otherProfiles.length !== 0 && (
        <main className="bg-primary_bg_color mt-laptopHeaderHeight tablet_md_max:mt-mobileHeaderHeight px-14 py-16 w-full">
          <section className="relative mx-auto grid grid-cols-1 md:grid-cols-2 auto-rows-auto justify-items-center items-center gap-6">
            {otherProfiles.map((user: any) => (
              <UserCard {...user} key={user.id} profile={user.profile} />
            ))}
          </section>
        </main>
      )}
    </>
  );
};

export default BrowsingPage;
