import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
        const [ isPending, setIsPending] = useState(false);
        const [title, setTitle] = useState('');
        const  [body, setBody] = useState('');
        const [author, setAuthor] = useState('mario');
        const history = useHistory();
        const handleSubmit = (e) => {
                e.preventDefault()
                const blog = {title, body, author}
                setIsPending(true);
               fetch('https://ubiquitous-rotary-phone-x554744v7w6g3xq6-8000.app.github.dev/blogs', {
                method: 'POST', 
                headers: {'content-Type': "application/json"},
                body: JSON.stringify(blog)
               }).then(() => {
                console.log('new blog added')
                setIsPending(false)
                history.push('/')
               })
               
        }
    return (
        <div className="create">
<h2>Add a new blog</h2>
<form onSubmit={handleSubmit}>
        <label > Blog Title</label>
        <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)}/>
        <label > Blog body</label>
        <textarea required value={body} onChange={(e) => setBody(e.target.value)} ></textarea>
        <label > Blog Author</label>
        <select value= {author} onChange={(e) => setAuthor(e.target.value)}> <option value="mario">Mario</option>
        <option value="Yoshi">Yoshi</option></select>
       {!isPending && <button>Add Blog</button>}
       {isPending && <button disabled>Adding Blog</button>}
</form>
        </div>
        );
}
 
export default Create;