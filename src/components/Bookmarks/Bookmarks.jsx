import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readingTime}) => {
    return (
        <div className="md:w-1/3 lg:w-1/3 bg-[#1111110D] p-4 rounded-lg lg:ml-8 mt-4 mb-4 md:mb-0 lg:mb-0">
             <div className='m-3'>
            <h3 className='bg-[#6047EC1A] text-[#6047EC] rounded-lg p-4 font-bold text-xl md:text-2xl lg:text-2xl'>Spent time on read :{readingTime}</h3>
        </div>
            <h1 className='text-xl md:text-2xl lg:text-2xl ml-6 font-bold'>Bookmarked Blog: {bookmarks.length}</h1>
            {
               bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks;