import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();

const { data:blog, error, isPending } = useFetch('https://ubiquitous-rotary-phone-x554744v7w6g3xq6-8000.app.github.dev/blogs/' + id)

    return (
         <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
    {blog &&  (
        <article>
            <h2>{blog.title}</h2>
            <p>wrriten by {blog.author}</p>
            <div>
            <p>{blog.body}</p>
            </div>
            
        </article>
    )}
    </div>
     );
}
 
export default BlogDetails;