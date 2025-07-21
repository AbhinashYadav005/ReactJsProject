import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from "axios";

function Search() {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

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
  }, []);

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <h1 className="text-4xl text-center m-10 md:text-6xl font-bold text-gray-900">
        Let's explore!
      </h1>

      <div className="flex justify-center mb-8">
        <input
          type="text"
          placeholder="Search blogs by title.."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-80 p-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
      </div>

      <div className="flex justify-between flex-wrap items-center mt-10 mb-10 gap-10">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog) => <Card key={blog.id} blog={blog} />)
        ) : (
          <p className="text-center text-gray-500 w-full">No blogs found.</p>
        )}
      </div>
    </>
  );
}

export default Search;
