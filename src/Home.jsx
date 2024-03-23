import { useEffect, useState } from "react";
import BlogList from "./BlogList";
const link = 'https://ubiquitous-rotary-phone-x554744v7w6g3xq6-8000.app.github.dev/blogs'
const message = 'set port to public temporary'
const Home = () => {
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    fetch(link)
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBlogs(data);
      })
  }, [])

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
}
 
export default Home;