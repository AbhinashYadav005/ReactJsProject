import { useState } from "react";
import axios from "axios";

function CreateBlog({ onBlogCreated }) {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    // Removed unused image state
    const [previewUrl, setPreviewUrl] = useState("");

    function handleImageChange(e) {
        const file = e.target.files[0];
        // setImage(file); // Removed unused image state

        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setPreviewUrl("");
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const formData = {
            title,
            content,
            image: previewUrl  // Saving base64 image (simplified for mock API)
        };

        const response = await axios.post(
            "https://687af3bbabb83744b7ee4a18.mockapi.io/blogs",
            formData
        );

        if (response.status === 201) {
            alert("Blog published!");
            setTitle("");
            setContent("");
            // setImage(null); // Removed unused image state
            setPreviewUrl("");
            onBlogCreated();  // Refresh blog list
        } else {
            alert("Failed to publish blog.");
        }
    }

    return (
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6 my-10">
            <h1 className="text-2xl font-bold text-center mb-4">Create Your Blog Post</h1>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    className="w-full border rounded-md px-4 py-2 mb-4"
                />

                <textarea
                    placeholder="Write your blog content here..."
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    rows="5"
                    className="w-full border rounded-md px-4 py-2 mb-4"
                />

                <label htmlFor="imageInput" className="block bg-gray-100 border border-dashed border-gray-400 rounded-md py-4 text-center cursor-pointer hover:bg-gray-200 mb-4">
                    📁 Choose Image From Computer
                </label>

                <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                />

                {previewUrl && (
                    <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full rounded-md mb-4"
                    />
                )}

                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-md"
                >
                    Publish Blog
                </button>
            </form>
        </div>
    );
}

export default CreateBlog;
