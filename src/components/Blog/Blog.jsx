import PropTypes from 'prop-types';
import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({blog, handleAddBookmarks}) => {
   const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog
    return (
        <div className='mb-20 mt-4'>
            <img className='w-full mb-8' src={cover} alt={`cover picture of the title ${title}`} />
            
            <div className='flex justify-between '>
                <div className='flex gap-4'>
                     <img className='w-14 rounded-full' src={author_img} alt="" />
                <div>
                     <h4 className='text-xl font-semibold'> {author}</h4>
                     <h4 className='text-xl'>{posted_date}</h4>
                     
                </div>
                </div>
                <div className='flex items-center'>
                <span>{reading_time} min read</span>
                <button onClick={() => handleAddBookmarks(blog)} className='pl-3 text-2xl'><IoBookmarksOutline /></button>
                </div>
            </div>
            <h2 className='text-4xl mb-4 mt-4'>title: {title}</h2>
            <div>
                <h4>{hashtags}</h4>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddBookmarks: PropTypes.func
}
export default Blog;