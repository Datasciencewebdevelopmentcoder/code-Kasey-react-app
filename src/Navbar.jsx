const Navbar = function () {
    return (
        <nav className="navbar">
        <h1>The Blog Dojo</h1>
        <div className="links">
        <a href="/">Home</a>
        <a href="create" style={{
            color: "white",
            backgroundColor: "blue",
            borderRadius: '8px'
        }}> New Blog</a>
        </div>
        </nav>
    );
}
export default Navbar
