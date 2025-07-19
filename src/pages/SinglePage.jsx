import Description from "./components/Description";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function SinglePage(){
    const { id } = useParams()
    const [blogs, setBlogs] = useState([])

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
    },[id]) 

    if(!blogs) return <div>Loading...</div>

    return (
        <>
        <Navbar />
        {blogs.map(function(blog){
            return (
                <Description key={blog.id} blog={blog} />

            )
        })}
        </>
    )
}

export default SinglePage