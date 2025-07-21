import { useEffect, useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from "axios";

function Home() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchBlogs() {
    setLoading(true);  // Ensures spinner shows on reload/navigation
    try {
      const response = await axios.get(
        "https://687af3bbabb83744b7ee4a18.mockapi.io/blogs"
      );
      if (response.status === 200) {
        setBlogs(response.data);
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      alert("Failed to fetch blogs.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchBlogs();
  }, []);  // Runs when page reloads or component mounts

  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-screen bg-white">
          <div className="animate-spin rounded-full h-20 w-20 border-t-4 border-blue-500"></div>
        </div>
      ) : (
        <>
         <Navbar />
          <section className="relative flex items-center justify-center min-h-screen px-6 text-center">
            <div className="absolute inset-0 bg-custom-radial" />
            <div className="relative z-10 max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900">
                Welcome to Abhinash Blog
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                It's more than just blogging. Let's blog each other.
              </p>
              <a
                href="/search"
                className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
              >
                What's new?
              </a>
            </div>
          </section>

          <div className="flex justify-between flex-wrap items-center mt-10 mb-10 gap-10">
            {blogs.map((blog) => (
              <Card key={blog.id} blog={blog} />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Home;