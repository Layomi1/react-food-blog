import React from "react";
import { Link } from "react-router-dom";

const CardBlog = ({ blog }) => {
  const {
    title,
    tags,
    id,
    author,
    authorPic,
    content,
    image,
    published_date,
    reading_time,
  } = blog;

  return (
    <Link to={`/blogs/${id}`} className="rounded w-full lg:flex mb-10">
      <div
        className="h-48 lg:w-48 flex-none bg-cover text-center overflow-hidden opacity-75"
        style={{
          backgroundImage: `url(${image})`,
        }}
        title="diet is very important"
      ></div>
      <div className="bg-white rounded px-4 flex flex-col justify-between leading-normal">
        <div>
          <div className="mt-3 md:mt-0 text-gray-700 font-bold text-2xl mb-2">
            {title}
          </div>
          <p className="text-gray-700 text-base">{content}</p>
          <p className="text-sm italic py-1 text-gray-700">
            Tags:
            {tags.map((tag, ind) => (
              <span key={ind} className="mx-1 underline">
                {tag}
              </span>
            ))}
          </p>
        </div>
        <div className="flex mt-3">
          <img
            src={authorPic}
            alt={`Author: ${author}`}
            className="h-10 w-10 rounded-full mr-2 object-cover"
          />
          <div>
            <p className="font-semibold text-gray-700 text-sm capitalize">
              {author}
            </p>
            <p className="text-gray-600 text-xs"> {published_date} </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardBlog;
