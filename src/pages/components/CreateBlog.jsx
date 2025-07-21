import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function CreateBlog(){

  const [title, setTitle] = useState("")
  const [subtitle, setSubtitle] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState("")
  const navigate = useNavigate()

  async function postToBackEnd(e){
    e.preventDefault()
    
    const newBlog = {
      title,
      subtitle,
      description,
      image
    }

    await axios.post("https://687af3bbabb83744b7ee4a18.mockapi.io/blogs",
      newBlog
    )
    navigate("/")
  }

  return(
    <>
      <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Create New Blog</h2>
      <form onSubmit={postToBackEnd} className="space-y-4">
      <input onChange={(e) => setTitle(e.target.value)}
        type="text"
        placeholder="Title"
        className="w-full p-2 border rounded"
        required
        />

        <input type="text"
          placeholder="Subtitle"
          className="w-full p-2 border rounded"
          onChange={(e) => setSubtitle(e.target.value)}
          required /> 
        
        <textarea 
          className="w-full p-2 border rounded"
          rows="5"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          required />

        <input type="text"
          className="w-full p-2 border rounded"
          placeholder="Image URL"
          onChange={(e) => setImage(e.target.value)}
           />

        <button type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 cursor-pointer">
          Post Blog
        </button>
        </form>
        </div>
    </>


  )
}

export default CreateBlog