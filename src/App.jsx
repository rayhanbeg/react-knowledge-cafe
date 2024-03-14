
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Header from './components/Header/Header'
import Bookmarks from './components/Bookmarks/Bookmarks';
function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }

  return (
    <>
    <Header></Header>
    <div className='md:flex lg:flex max-w-7xl mx-auto'>
    <Blogs handleAddBookmarks={handleAddBookmarks}></Blogs>
    <Bookmarks bookmarks={bookmarks} ></Bookmarks>
    </div>
    </>
  )
}

export default App
