const HeadingBox = ({ subheading, heading, description }) => {
  return (
    <div>
      <p>{subheading}</p>
      <p className="mb-1 text-sm font-semibold text-yellow-500">{heading}</p>
      <h2 className="text-xl font-bold">{description}</h2>
    </div>
  );
};

export default HeadingBox;
