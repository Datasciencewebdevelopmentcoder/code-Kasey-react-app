import { useState } from "react";
const Home = () => {
    const [blogs , setBlogs] = useState([
        {
            id: 1,
            title: "Introduction to JavaScript",
            body: "JavaScript is a popular programming language used for web development.",
            author: "John Doe"
          },
          {
            id: 2,
            title: "Advanced JavaScript Techniques",
            body: "Learn about closures, promises, and other advanced JavaScript concepts.",
            author: "Jane Smith"
          },
          {
            id: 3,
            title: "JavaScript Frameworks Comparison",
            body: "Compare popular JavaScript frameworks like React, Angular, and Vue.",
            author: "Michael Johnson"
          }
    ])
    return ( <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <p> written by {blog.author}</p>
                
                </div>
            ))}
    </div> );
}
 
export default Home;


 
 