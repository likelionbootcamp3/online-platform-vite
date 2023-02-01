import "./index.css";

const ClassCard = ({ video, type }) => {
  const isHome = type === "home";

  if (isHome) {
    if (video.id > 5) {
      return (video = null);
    }
  }

  return (
    <li className="cursor-pointer ">
      <div className="overflow-hidden rounded md:rounded-lg">
        <img
          src={video.snippet.thumbnail.url}
          alt=""
          className="w-full  transition duration-300 hover:scale-110"
        />
      </div>

      <div>
        <h3 className="mt-3 h-12 text-base font-semibold leading-6 line-clamp-2 md:mt-2.5 md:h-14 md:text-xl lg:mt-4">
          {video.snippet.title}
        </h3>
        <p className="mt-2 h-10 text-xs font-normal leading-5 text-gray-500 line-clamp-2 md:text-sm">
          {video.snippet.description}
        </p>
        <div className="my-2.5 md:my-2 ">
          <span className="text-sm font-semibold md:text-base">
            {video.snippet.price.toLocaleString()} VND
          </span>
        </div>
      </div>
    </li>
  );
};

export default ClassCard;
