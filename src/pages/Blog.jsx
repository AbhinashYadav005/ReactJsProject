import { useEffect, useState } from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import axios from "axios"


function Blog(){
    const [blogs,setBlogs] = useState([])

  async function fetchBlogs(){
       const response = await axios.get("https://687af3bbabb83744b7ee4a18.mockapi.io/blogs")
       console.log(response.data)
       if(response.status == 200){
            setBlogs(response.data)
       } else{
             alert("Error aayoo !!!")
       }
    }

    useEffect(()=>{   // () is a callback function or anonymous function
       fetchBlogs()
    },[]) 

    return (
        <>
        <Navbar/>
        <h1 className="text-4xl text-center m-10 md:text-6xl font-bold text-gray-900">
            Let's explore!
        </h1>
       <div className="flex justify-between flex-wrap items-center mt-10 mb-10 gap-10">
    </div>
    <div className="flex justify-between flex-wrap items-center mt-10 mb-10 gap-10">
        {blogs.map(function(blog){
            return (
                <>
                <Card key={blog.id} blog={blog} />
                </>
            )
        })}
        </div>
       </>
    )
}

export default Blog