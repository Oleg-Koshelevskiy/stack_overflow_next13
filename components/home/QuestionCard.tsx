import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Image from "next/image";

const QuestionCard = () => {
  return (
    <div className="card-wrapper rounded-[10px] p-9 sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
            35 days ago
          </span>
          <Link href="/">
            <h3 className="sm:h3-semibold base-semibold text-dark200_light900 line-clamp-1 flex-1">
              Header for card
            </h3>
          </Link>
        </div>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {/* render list */}
        <RenderTag key={1} _id={1} name={"React"} />
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Link href={"/"} className="flex-center gap-1">
          <Image
            className="invert-colors rounded-full object-contain"
            src="/assets/icons/avatar.svg"
            alt="user avatar"
            width={16}
            height={16}
          />
          <p className="body-medium text-dark400_light700 flex items-center gap-1">
            User{" "}
            <span className="small-regular line-clamp-1 max-sm:hidden">
              {" "}
              • asked 35 days ago
            </span>
          </p>
        </Link>
        <div className="flex items-center gap-3 max-sm:flex-wrap max-sm:justify-start">
          <div className="flex-center flex-wrap gap-1">
            <Image
              src="/assets/icons/like.svg"
              width={16}
              height={16}
              alt="like icon"
            />
            <p className="small-medium text-dark400_light800 flex items-center gap-1">
              22<span className="small-regular line-clamp-1">Votes</span>
            </p>
          </div>
          <div className="flex-center flex-wrap gap-1">
            <Image
              src="/assets/icons/message.svg"
              width={16}
              height={16}
              alt="message icon"
            />
            <p className="small-medium text-dark400_light800 flex items-center gap-1">
              13<span className="small-regular line-clamp-1">Answers</span>
            </p>
          </div>
          <div className="flex-center flex-wrap gap-1">
            <Image
              src="/assets/icons/eye.svg"
              width={16}
              height={16}
              alt="eye icon"
            />
            <p className="small-medium text-dark400_light800 flex items-center gap-1">
              1.2K<span className="small-regular line-clamp-1">Views</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
