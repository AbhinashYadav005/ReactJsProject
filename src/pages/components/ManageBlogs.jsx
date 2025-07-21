import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function ManageBlogs() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  async function fetchBlogs() {
    try {
      const response = await axios.get(
        "https://687af3bbabb83744b7ee4a18.mockapi.io/blogs"
      );
      if (response.status === 200) {
        setBlogs(response.data);
      } else {
        alert("Failed to load blogs");
      }
    } catch (error) {
      alert("Error fetching blogs");
    }
  }

  async function deleteBlog(id) {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (!confirmDelete) return;

    try {
      await axios.delete(
        `https://687af3bbabb83744b7ee4a18.mockapi.io/blogs/${id}`
      );
      setBlogs(blogs.filter((blog) => blog.id !== id));
    } catch (error) {
      alert("Failed to delete blog");
    }
  }

  function editBlog(id) {
    navigate(`/edit/${id}`); // Navigate to EditBlog page with blog ID
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <>
    <Navbar />
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6 text-center">Manage Blogs</h2>

      {blogs.length === 0 ? (
        <p className="text-center text-gray-500">No blogs found.</p>
      ) : (
        blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow p-4 mb-4 flex items-center justify-between"
          >
            <div>
              <h3 className="font-semibold text-lg">{blog.title}</h3>
              <p className="text-sm text-gray-500">{blog.subtitle}</p>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => editBlog(blog.id)}
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer"
              >
                Edit
              </button>

              <button
                onClick={() => deleteBlog(blog.id)}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
    </>
  );
}

export default ManageBlogs;