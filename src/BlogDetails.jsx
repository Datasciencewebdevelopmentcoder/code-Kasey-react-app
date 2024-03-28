import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const BlogDetails = () => {

    const {id} = useParams();
    const history = useHistory()
const { data:blog, error, isPending } = useFetch('https://ubiquitous-rotary-phone-x554744v7w6g3xq6-8000.app.github.dev/blogs/' + id)
const handleClick = () => {
    fetch('https://ubiquitous-rotary-phone-x554744v7w6g3xq6-8000.app.github.dev/blogs/'+blog.id, {
        method: 'DELETE'
    }).then(() => {
        history.push('/')
    })
}
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
            <button onClick={handleClick}>delete</button>
        </article>
    )}
    </div>
     );
}
 
export default BlogDetails;