import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditBlog() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageOption, setImageOption] = useState("url");

  useEffect(() => {
    async function fetchBlog() {
      const response = await axios.get(`https://687af3bbabb83744b7ee4a18.mockapi.io/blogs/${id}`);
      const blog = response.data;
      setTitle(blog.title);
      setSubtitle(blog.subtitle || ""); // Safe load
      setDescription(blog.description);
      setImage(blog.image);
    }
    fetchBlog();
  }, [id]);

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await axios.put(`https://687af3bbabb83744b7ee4a18.mockapi.io/blogs/${id}`, {
      title,
      subtitle,  // Include subtitle in update
      description,
      image,
    });
    navigate(`/`);
  }

  return (
    <>
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            className="w-full p-2 border rounded"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Blog Title"
            required
          />

          <input
            className="w-full p-2 border rounded"
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
            placeholder="Blog Subtitle"
          />

          <textarea
            className="w-full p-2 border rounded"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Blog Content"
            rows="5"
            required
          ></textarea>

          <div>
            <label className="font-medium block mb-2">Image Source:</label>
            <div className="flex items-center space-x-4 mb-4">
              <label>
                <input
                  type="radio"
                  value="url"
                  checked={imageOption === "url"}
                  onChange={() => setImageOption("url")}
                />{" "}
                Use Image URL
              </label>
              <label>
                <input
                  type="radio"
                  value="file"
                  checked={imageOption === "file"}
                  onChange={() => setImageOption("file")}
                />{" "}
                Upload From Computer
              </label>
            </div>

            {imageOption === "url" ? (
              <input
                className="w-full p-2 border rounded"
                type="text"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                placeholder="Image URL"
              />
            ) : (
              <input
                className="w-full p-2 border rounded"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />
            )}

            {image && (
              <img
                src={image}
                alt="Selected"
                className="w-full h-auto rounded mt-4"
              />
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 cursor-pointer"
          >
            Update Blog
          </button>
        </form>
      </div>
    </>
  );
}

export default EditBlog;