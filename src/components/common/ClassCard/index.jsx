const ClassCard = ({ video, type }) => {
  const isHome = type === "home";

  if (isHome) {
    //
  }

  return (
    <li>
      <img src={video.snippet.thumbnail.url} alt="" />
      <div>
        <h3 className="mt-3 text-base font-semibold md:mt-2.5 md:text-xl lg:mt-4">
          {video.snippet.title}
        </h3>
        <p className="text-xs font-medium">{video.snippet.description}</p>
        <div className="my-2.5">
          <span className="text-sm font-semibold">
            {video.snippet.price.toLocaleString()} VND
          </span>
        </div>
      </div>
    </li>
  );
};

export default ClassCard;
