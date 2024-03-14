
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Header from './Components/Header/Header'
import Bookmarks from './Components/Bookmarks/Bookmarks';
// import Bookmark from './Components/Bookmark/Bookmark';
function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id, time) => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('achire bhai achi', id);
    const remainingBookmarks = bookmarks.filter(Bookmark => Bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex lg:flex lg:max-w-7xl lg:mx-auto mx-[10%]'>
    <Blogs handleAddBookmarks={handleAddBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
    </div>
    </>
  )
}

export default App
