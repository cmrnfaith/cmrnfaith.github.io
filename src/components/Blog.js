import React from "react";
import ProjectBlog from "./ProjectBlog";
const Blog = ({ blog }) => {
  console.log(blog);
  return (
    <section className="container">
      <h2 className="top-title">Project Blogs</h2>
      <hr></hr>
      {blog ? (
        <ProjectBlog blog={blog} />
      ) : (
        <div>
          <p>This page is coming soon...</p>
          <p></p>
          <p>Please Stay Tuned!</p>
        </div>
      )}
    </section>
  );
};

export default Blog;
