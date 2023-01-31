const ClassCard = ({ video }) => {
  return (
    <li>
      <img src={video.snippet.thumbnail.url} alt="" />
      <div>
        <h5 className="mt-4 mb-2 text-base font-semibold">
          {video.snippet.title}
        </h5>
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
