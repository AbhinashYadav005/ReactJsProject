

import Card from "./components/Card"
import Navbar from "./components/Navbar"

function Home(){
    return(
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
            <a href="/blog" className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition">
            What's new?
            </a>
        </div>
        </section>
    </div>

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
export default Home

