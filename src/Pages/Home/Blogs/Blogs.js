//imported file
import React from "react";
import useAuth from "../../../hooks/useAuth";
import Blog from "../Blog/Blog";

//Blogs component
const Blogs = () => {
  //destructuring Blogs data
  const { dataContext } = useAuth();
  const { blogsData } = dataContext;
  return (
    <div className=" container mx-auto my-5">
      <h1 className="d-none d-md-block fw-bold text-center ms-md-4 p-md-2  mt-5 mb-3">
        Blog Posts
        <span className="gradient-txt"> .</span>
      </h1>

      <h1
        style={{ fontSize: "2.5rem" }}
        className="d-block d-md-none fw-bold text-center ms-md-4 p-md-2  mt-5 mb-3"
      >
        Blog Posts
        <span className="gradient-txt"> .</span>
      </h1>
      <p className="text-center w-75 mx-auto mb-5">
        One inspiring story is worth traveling. Discover more about local food,
        tradition and history. Read the stories that make you want to travel.
      </p>
      {blogsData?.length <= 0 ? (
        <div className="text-center">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
          {blogsData?.map((blogData) => (
            <Blog key={blogData?._id} blogData={blogData}></Blog>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
