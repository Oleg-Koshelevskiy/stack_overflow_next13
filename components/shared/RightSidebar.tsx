import { popularTags, topQuestions } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar text-dark200_light900 sticky right-0 top-0 flex h-screen flex-col justify-start gap-6 overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden xl:w-[330px]">
      <div className="text-dark200_light900">
        <h3 className="h3-bold">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {topQuestions.map((item) => {
            return (
              <Link
                href={item.link}
                key={item.id}
                className="flex items-center justify-between gap-2"
              >
                <div className="body-medium text-dark500_light700">
                  {item.content}
                </div>

                <Image
                  src="/assets/icons/chevron-right.svg"
                  width={20}
                  height={20}
                  alt="right arrow"
                />
              </Link>
            );
          })}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((item) => {
            return (
              <div key={item.id} className="flex justify-between">
                <Link
                  href={item.link}
                  className="flex items-center justify-between gap-2"
                >
                  <div className="text-dark500_light700 subtle-medium btn-secondary rounded-lg px-3 py-2 font-semibold uppercase">
                    {item.tag}
                  </div>
                </Link>
                <div className="small-medium text-dark500_light700">
                  {item.count}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
