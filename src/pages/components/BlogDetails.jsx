function BlogDetails({ blog }) {
  return (
    <>
      {/* Blog post with featured image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Blog post header */}
          <div className="py-8">
            <h1 className="text-3xl font-bold mb-2">{blog.title}</h1>
            <p className="text-gray-500 text-sm">
              Published on <time dateTime="2022-04-05">April 5, 2022</time>
            </p>
          </div>
          {/* Featured image */}
          <img
            src={blog.image}
            alt="Featured image"
            className="w-full h-auto mb-8"
          />
          {/* Blog post content */}
          <div className="prose prose-sm sm:prose lg:prose-lg xl:prose-xl mx-auto">
            <p>{blog.description}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogDetails;
