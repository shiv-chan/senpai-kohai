export default interface IUserProps {
  id: string;
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
