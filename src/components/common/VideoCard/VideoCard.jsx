import React from "react";

const VideoCard = ({ video }) => {
  return (
    <li>
      <img src={video.snippet.thumbnail.url} alt="" />
      <div>
        <p class="mt-4 mb-2 text-base font-semibold">{video.snippet.title}</p>
        <span class="block text-xs font-medium">
          {video.snippet.description}
        </span>
        <div class="my-[10px] flex items-center">
          <div class="flex items-center">
            <span class="text-sm font-semibold">
              {video.snippet.price.toLocaleString()} VND
            </span>
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoCard;
