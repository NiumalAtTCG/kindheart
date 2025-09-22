import React from "react";
import BlogCard from "./BlogCard"; // ✅ Import BlogCard
import Img1 from "../../assets/img1.jpg";
import Img2 from "../../assets/img2.jpg"; // ✅ Add file extension
import Img3 from "../../assets/img3.jpg";

const BlogData = [
  {
    img: Img1,
    title: `No one has ever become poor from giving.” 🞂 Anne Frank • 
    “The only way to do great work is to love what you do."`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Amet consectetur adipisicing elit.`,
    date: "April 22, 2024",
    writer: "John",
  },
  {
    img: Img2,
    title: `No one has ever become poor from giving.” 🞂 Anne Frank • 
    “The only way to do great work is to love what you do."`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Amet consectetur adipisicing elit.`,
    date: "April 22, 2024",
    writer: "John",
  },
  {
    img: Img3,
    title: `No one has ever become poor from giving.” 🞂 Anne Frank • 
    “The only way to do great work is to love what you do."`,
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
    Amet consectetur adipisicing elit.`,
    date: "April 22, 2022",
    writer: "John",
  },
];

const Blogs = () => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      <div className="container mx-auto py-8">
        <h1 className="mb-8 border-l-8 border-primary pl-3 text-center text-3xl font-bold">
          Our Latest Blogs
        </h1>

        {/* ✅ Grid layout for blogs */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {BlogData.map((blog, index) => (
            <BlogCard
              key={index}
              img={blog.img}
              title={blog.title} // ✅ Now passing title
              description={blog.description}
              date={blog.date}
              writer={blog.writer}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
