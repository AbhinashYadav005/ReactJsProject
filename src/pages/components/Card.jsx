import { Link } from "react-router-dom";

function Card({ blog }) {
  return (
    <Link to={"/blog/" + blog.id} className="block max-w-md mx-auto">
      <div className="border rounded-2xl overflow-hidden shadow hover:shadow-xl transition-shadow bg-white">
        <img
          className="h-48 w-full object-cover"
          src={blog.image}
          alt={blog.title}
        />
        <div className="p-4">
          <h3 className="text-sm font-medium text-gray-500 mb-1">
            {blog.subtitle}
          </h3>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            {blog.title}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {blog.description}
          </p>
          <span className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700">
            Read More
          </span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
