import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserNinja, MdEmail, RiUser3Fill } from 'react-icons/all';

interface UserProps {
  name: string;
  publicEmail: string;
  profileImage: string;
  profile: {
    id: string;
    description: string;
    techStack: string[];
  };
  isSenpai: boolean;
}

const UserCard = ({
  name,
  publicEmail,
  profileImage,
  profile,
  isSenpai,
}: UserProps) => {
  // console.log(profile);
  // console.log(name);

  const profileNameDisplay = () => {
    if (name === '') {
      return isSenpai
        ? `Senpai#${profile.id.slice(0, 5)}`
        : `Kohai#${profile.id.slice(0, 5)}`;
    } else {
      return name;
    }
  };
  return (
    <Link to={`/profile/${isSenpai ? 'senpai' : 'kohai'}/${profile.id}`}>
      <div className="h-72 w-96 flex-initial bg-white rounded-lg p-5">
        <div className="flex justify-between items-start mb-5">
          <img
            src={profileImage}
            alt={`${name}'s image`}
            className="h-28 rounded-full mr-5"
          />
          <div className="mt-2 w-60">
            <h1 className="text-xl font-bold">{profileNameDisplay()}</h1>
            <div className="flex items-center gap-x-1">
              {isSenpai ? <FaUserNinja /> : <RiUser3Fill />}
              <p>{isSenpai ? 'Senpai' : 'Kohai'}</p>
            </div>
            <div className="flex items-center gap-x-1">
              <MdEmail />
              <p>{publicEmail ? publicEmail : 'Contact is not provided yet'}</p>
            </div>
          </div>
        </div>
        <div>
          {profile.techStack.map((tachStack) => (
            <span className="bg-tertiary_bg_color m-1 py-1 px-1.5 rounded-full">
              {tachStack}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default UserCard;
