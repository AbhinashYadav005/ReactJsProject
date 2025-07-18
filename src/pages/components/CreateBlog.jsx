

function CreateBlog(){
    return(
        <>
            <div>
            <meta charSet="UTF-8" />
            <title>Create Blog Post</title>
            <style dangerouslySetInnerHTML={{__html: "\n    body {\n      font-family: Arial, sans-serif;\n      background: #f9f9f9;\n      margin: 0;\n      padding: 0;\n    }\n\n    .container {\n      max-width: 700px;\n      margin: 50px auto;\n      background: #fff;\n      padding: 30px;\n      border-radius: 15px;\n      box-shadow: 0 5px 20px rgba(0,0,0,0.1);\n    }\n\n    h1 {\n      text-align: center;\n      font-size: 24px;\n      margin-bottom: 20px;\n      color: #333;\n    }\n\n    input[type=\"text\"], textarea {\n      width: 100%;\n      padding: 15px;\n      margin: 10px 0;\n      border: 1px solid #ddd;\n      border-radius: 10px;\n      font-size: 16px;\n    }\n\n    textarea {\n      min-height: 200px;\n    }\n\n    .upload-box {\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      background-color: #f0f0f0;\n      border: 2px dashed #ccc;\n      border-radius: 10px;\n      padding: 20px;\n      text-align: center;\n      font-size: 16px;\n      color: #555;\n      cursor: pointer;\n      margin: 15px 0;\n      transition: background-color 0.3s;\n    }\n\n    .upload-box:hover {\n      background-color: #e8e8e8;\n    }\n\n    input[type=\"file\"] {\n      display: none;\n    }\n\n    button {\n      background-color: #4CAF50;\n      color: white;\n      padding: 15px 20px;\n      border: none;\n      border-radius: 10px;\n      font-size: 16px;\n      cursor: pointer;\n      width: 100%;\n    }\n\n    button:hover {\n      background-color: #45a049;\n    }\n\n    img {\n      max-width: 100%;\n      margin-top: 15px;\n      border-radius: 10px;\n    }\n\n    .preview {\n      display: none;\n    }\n  " }} />
            <div className="container">
                <h1>Create Your Blog Post</h1>
                <form id="blogForm">
                <input type="text" id="title" placeholder="Blog Title" required />
                <textarea id="content" placeholder="Write your blog content here..." required defaultValue={""} />
                <label htmlFor="imageInput" className="upload-box">
                    📁 Choose Image From Computer
                </label>
                <input type="file" id="imageInput" accept="image/*" />
                <img id="imagePreview" className="preview" />
                <button type="submit">Publish Blog</button>
                </form>
            </div>
            </div>


        </>
    )
}

export default CreateBlog