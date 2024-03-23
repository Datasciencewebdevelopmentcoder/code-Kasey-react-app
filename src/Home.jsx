import { useState } from "react";
import BlogList from "./BlogList";
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
    const handleDelete = (id) => {
      const newBlogs = blogs.filter(blog => blog.id !== id)
      setBlogs(newBlogs) 
    }

    return ( <div className="home">
          <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
          
    </div> );
}
 
export default Home;


 
 