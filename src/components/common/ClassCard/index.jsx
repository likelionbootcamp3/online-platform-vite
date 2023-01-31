const ClassCard = ({ video }) => {
  return (
    <li>
      <img src={video.snippet.thumbnail.url} alt="" />
      <div>
        <h5 class="mt-4 mb-2 text-base font-semibold">{video.snippet.title}</h5>
        <p class="text-xs font-medium">{video.snippet.description}</p>
        <div class="my-2.5">
          <span class="text-sm font-semibold">
            {video.snippet.price.toLocaleString()} VND
          </span>
        </div>
      </div>
    </li>
  );
};

export default ClassCard;
