const HeadingBox = ({ subheading, heading, description }) => {
  return (
    <div className="mb-6 max-w-[90%] md:max-w-[65%] lg:mb-10 lg:max-w-[60%]">
      <h2 className="text-sm font-semibold text-amber-600 lg:text-base">
        {subheading}
      </h2>
      <h3 className="my-1 text-xl font-bold lg:my-2 lg:text-[1.625rem]">
        {heading}
      </h3>
      <p className="text-sm font-normal text-gray-500 lg:text-base">
        {description}
      </p>
    </div>
  );
};

export default HeadingBox;
