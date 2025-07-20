import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    const response = await axios.get(
      "https://687af3bbabb83744b7ee4a18.mockapi.io/blogs"
    );
    console.log(response.data);
    if (response.status == 200) {
      setBlogs(response.data);
    } else {
      alert("Error aayoo !!!");
    }
  }

  useEffect(() => {
    // () is a callback function or anonymous function
    fetchBlogs();
  }, []); //dependency array

  return (
    <>
      <Navbar />

      <div>
        <section className="relative flex items-center justify-center min-h-screen px-6 text-center">
          {/* Radial Gradient Background */}
          <div className="absolute inset-0 bg-custom-radial" />
          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
              Welcome to Abhinash Blog
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              It's more than just blogging. Let's blog each other.
            </p>
            <a
              href="/blog"
              className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
            >
              What's new?
            </a>
          </div>
        </section>
      </div>

      <div className="flex justify-between flex-wrap items-center mt-10 mb-10 gap-10">
        {blogs.map(function (blog) {
          return (
            <>
              <Card key={blog.id} blog={blog} />
            </>
          );
        })}
      </div>
    </>
  );
}
export default Home;
