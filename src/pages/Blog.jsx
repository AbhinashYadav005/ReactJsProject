import Card from "./components/Card"
import Navbar from "./components/Navbar"

function Blog(){
    return (
        <>
        <Navbar/>
        <h1 className="text-4xl text-center m-10 md:text-6xl font-bold text-gray-900">
            Let's explore!
        </h1>
       <div className="flex justify-between flex-wrap items-center mt-10 mb-10 gap-10">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
       </>
    )
}

export default Blog