import UserCard from "@/components/cards/UserCard";
import UserPageFilters from "@/components/home/UserFilters";
import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { UserFilters } from "@/constants/filters";
import { getUsers } from "@/lib/actions/user.action";
import React from "react";

const Community = async () => {
  const { users } = await getUsers({});
  console.log(users);

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">All Users</h1>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search by username"
          otherClasses="flex-1"
        />
        <Filter
          filters={UserFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <UserPageFilters />
      <div className="mt-12 flex flex-wrap gap-3">
        {users.map((user: any) => (
          <UserCard
            key={user._id}
            name={user.name}
            username={user.username}
            picture={user.picture}
          />
        ))}
      </div>
    </div>
  );
};

export default Community;
