import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import BlogDetails from "./components/BlogDetails";

function SinglePage() {
  const data = useParams();
  console.log(data);
  const [blog, setBlog] = useState({});

  async function fetchSingleBlog() {
    const response = await axios.get(
      "https://687af3bbabb83744b7ee4a18.mockapi.io/blogs/" + data.id
    );
    console.log(response);
    if (response.status == 200) {
      setBlog(response.data);
    } else {
      alert("Something went wrong");
    }
  }

  useEffect(() => {
    fetchSingleBlog();
  }, []);

  const navigate = useNavigate();

  async function deleteBlog() {
    const response = await axios.delete(
      "https://687af3bbabb83744b7ee4a18.mockapi.io/blogs/" + data.id
    );
    console.log(response);
    if (response.status == 200) {
      navigate("/");
    } else {
      alert("Something went wrong");
    }
  }

  async function editBlog() {
    const response = await axios.put(
      "https://687af3bbabb83744b7ee4a18.mockapi.io/blogs/" + data.id
    );
    console.log(response);
    if (response.status == 200) {
      navigate(`/edit/${data.id}`);
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <>
      <Navbar />
      <BlogDetails key={blog.id} blog={blog} />
      <div className="hidden sm:flex justify-center m-10 gap-30">
        <a
          className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 cursor-pointer"
          onClick={deleteBlog}
        >
          Delete
        </a>
        <a
          className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 cursor-pointer"
          onClick={editBlog}
        >
          Edit
        </a>
      </div>
    </>
  );
}

export default SinglePage;
