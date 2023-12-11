interface Props {
  tag: {
    _id: string;
    createdAt: Date;
    followers: string[];
    name: string;
    questions: string[];
  };
}

const TagCard = async ({ tag }: Props) => {
  const { name } = tag;

  return (
    <div className="shadow-light100_darknone w-full max-xs:min-w-full xs:w-[260px]">
      <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8">
        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">{name}</h3>
          <p className="body-regular text-dark500_light500 mt-2"></p>
        </div>

        <div className="mt-5"></div>
      </article>
    </div>
  );
};

export default TagCard;
