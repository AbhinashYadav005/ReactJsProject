import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function CreateBlog() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("");
  const [imageOption, setImageOption] = useState("url");

  const navigate = useNavigate();

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result); // store base64 string
      };
      reader.readAsDataURL(file);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!title || !content || !image) {
      alert("All fields are required.");
      return;
    }

    const newBlog = {
      title,
      content,
      image
    };

    try {
      await axios.post(
        "https://687af3bbabb83744b7ee4a18.mockapi.io/blogs",
        newBlog
      );
      navigate("/"); // Redirect after creation
    } catch (error) {
      alert("Failed to create blog.");
    }
  }

  return (
    <>
      <div className="max-w-xl mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-2 border rounded"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          <textarea
            className="w-full p-2 border rounded"
            rows="5"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
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
                Upload From Device
              </label>
            </div>

            {imageOption === "url" ? (
              <input
                className="w-full p-2 border rounded"
                type="text"
                placeholder="Image URL"
                value={image}
                onChange={(e) => setImage(e.target.value)}
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
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer"
          >
            Create Blog
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateBlog;