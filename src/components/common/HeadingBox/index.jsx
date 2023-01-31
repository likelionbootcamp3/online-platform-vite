const HeadingBox = ({ subheading, heading, description }) => {
  return (
    <div className="mt-[50px] mb-6 md:mt-10 lg:mb-10 lg:mt-[70px]">
      <h2 className="text-sm font-semibold text-amber-600 lg:text-base">
        {subheading}
      </h2>
      <h3 className="my-1 text-xl font-bold md:my-2 lg:text-[26px]">
        {heading}
      </h3>
      <p className="text-sm font-normal text-gray-500 lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default HeadingBox;
