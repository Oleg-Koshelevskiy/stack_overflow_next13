import Image from "next/image";

interface UserProps {
  name: string;
  username: string;
  picture: string;
}

const UserCard = ({ name, username, picture }: UserProps) => {
  return (
    <div className="card-wrapper flex-center flex min-w-[300px] flex-col gap-4 rounded-[10px] p-9 sm:px-11">
      <Image
        src={picture}
        width={100}
        height={100}
        alt="avatar"
        className="rounded-full"
      />
      <div className="h3-bold text-dark200_light900">{name}</div>
      <div className="text-light400_light500">@{username}</div>
    </div>
  );
};

export default UserCard;
