import BlogList from "./BlogList";
import useFetch from "./useFetch";
const link = 'https://ubiquitous-rotary-phone-x554744v7w6g3xq6-8000.app.github.dev/blogs'
const message = ' run [npx json-server data/db.json --port 8000 in new terminal] and runset port to public temporary'

const Home = () => {
  const { error, isPending, data } = useFetch(link)

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
      { data && <BlogList blogs={data} /> }
    </div>
  );
}
export default Home