// import { data } from "autoprefixer";
// import { data } from "autoprefixer";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types'

const Blogs = ({handleAddBookmarks}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('Blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            {/* <h1 className="text-2xl ">Blogs : {blogs.length}</h1> */}
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog}
                    handleAddBookmarks = {handleAddBookmarks}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmarks: PropTypes.func
}
export default Blogs;