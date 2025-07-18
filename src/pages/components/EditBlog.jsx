

function EditBlog(){
    return (
        <>
          <div className="bg-white p-8 overflow-auto mt-16 h-screen">
            <h2 className="text-2xl mb-4">Blog List</h2>
            {/* Classes Table */}
            <div className="relative overflow-auto">
              <div className="overflow-x-auto rounded-lg">
                <table className="min-w-full bg-white border mb-20">
                  <thead>
                    <tr className="bg-[#2B4DC994] text-center text-xs md:text-sm font-thin text-white">
                      <th className="p-0">
                        <span className="block py-2 px-3 border-r border-gray-300">ID</span>
                      </th>
                      <th className="p-0">
                        <span className="block py-2 px-3 border-r border-gray-300">Blog Name</span>
                      </th>
                      <th className="p-4 text-xs md:text-sm">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b text-xs md:text-sm text-center text-gray-800">
                      <td className="p-2 md:p-4">01</td>
                      <td className="p-2 md:p-4">Blog 1</td>
                      <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                          <a href="/blog/inside-edit">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm cursor-pointer">Edit</button>
                        </a>
                        <a href="/delete">
                        <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm cursor-pointer">Delete</button>
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b text-xs md:text-sm text-center text-gray-800">
                      <td className="p-2 md:p-4">02</td>
                      <td className="p-2 md:p-4">Blog 2</td>
                      <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                      <a href="/blog/inside-edit">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm cursor-pointer">Edit</button>
                        </a>
                        <a href="/delete">
                        <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm cursor-pointer">Delete</button>
                        </a>
                      </td>
                    </tr>
                    <tr className="border-b text-xs md:text-sm text-center text-gray-800">
                      <td className="p-2 md:p-4">03</td>
                      <td className="p-2 md:p-4">Blog 3</td>
                      <td className="relative p-2 md:p-4 flex justify-center space-x-2">
                      <a href="/blog/inside-edit">
                        <button className="bg-blue-500 text-white px-3 py-1 rounded-md text-xs md:text-sm cursor-pointer">Edit</button>
                        </a>
                        <a href="/delete">
                        <button className="bg-red-500 text-white px-3 py-1 rounded-md text-xs md:text-sm cursor-pointer">Delete</button>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

        </>
    )
}

export default EditBlog