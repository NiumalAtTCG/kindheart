import React from "react";

const BlogCard = ({ img, title, description, date, writer }) => {
  return (
    <div className="p-4 rounded-2xl shadow-lg transition-all duration-500 hover:shadow-xl dark:bg-slate-950 dark:text-white">
      <div className="overflow-hidden rounded-xl">
        <img
          src={img}
          alt="blog"
          className="mx-auto h-[250px] w-full object-cover transition duration-700 hover:skew-x-2 hover:scale-110"
        />
      </div>

      {/* Date + Writer */}
      <div className="flex justify-between pt-2 text-slate-600 text-sm dark:text-slate-400">
        <p>{date}</p>
        <p className="line-clamp-1">by {writer}</p>
      </div>

      {/* Title + Description */}
      <div className="mt-2">
        <h2 className="line-clamp-1 font-semibold text-lg">{title}</h2>
        <p className="line-clamp-2 text-sm text-slate-700 dark:text-slate-300">
          {description}
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
