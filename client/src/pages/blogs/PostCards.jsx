import React, { useEffect, useState } from "react";
import CardBlog from "./CardBlog";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/features/blogs/blogsSlice";

const PostCards = () => {
  const dispatch = useDispatch();
  const { blogs, isLoading, isError, error } = useSelector(
    (state) => state.blogs
  );
  // pagination
  const { tags, search } = useSelector((state) => state.filter);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchBlogs({ tags, search }));
  }, [dispatch, tags, search]);

  const blogPerPage = 5;
  const startIndex = (currentPage - 1) * blogPerPage;
  const endIndex = currentPage * blogPerPage;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const handlePageChange = (newPageNo) => {
    setCurrentPage(newPageNo);
  };

  // dispatch action to show blogs

  return (
    <div className="w-full lg:w-2/3">
      {!isError && !isLoading && blogs?.length > 0 ? (
        <div>
          {paginatedBlogs.map((blog, id) => (
            <CardBlog key={id} blog={blog} />
          ))}
          {/* {pagination} */}
          {
            <article>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-red-500 cursor-pointer text-white px-2 rounded-md"
              >
                Prev
              </button>
              <span className="mx-2">{currentPage}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="bg-indigo-500 cursor-pointer text-white px-2 rounded-md"
              >
                Next
              </button>
            </article>
          }
        </div>
      ) : (
        <p>No blog Found</p>
      )}
    </div>
  );
};

export default PostCards;
