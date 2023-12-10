"use client";
import { UserFilters } from "@/constants/filters";
import React from "react";
import { Button } from "../ui/button";

const UserPageFilters = () => {
  const active = "new_users";
  return (
    <div className="mt-10 hidden flex-wrap gap-3 md:flex">
      {UserFilters.map((filter) => (
        <Button
          key={filter.value}
          onClick={() => {}}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === filter.value
              ? "bg-primary-100 text-primary-500"
              : "bg-light-800 text-light-500 dark:bg-dark-300 "
          }`}
        >
          {filter.name}
        </Button>
      ))}
    </div>
  );
};

export default UserPageFilters;
