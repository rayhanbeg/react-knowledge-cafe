import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 lg:w-1/3 bg-gray-300 p-4 rounded-lg ml-8 mt-4">
            <h1 className='text-2xl pl-12 font-bold'>Bookmarked Blog: {bookmarks.length}</h1>
            {
               bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;