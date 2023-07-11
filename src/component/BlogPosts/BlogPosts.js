/** @format */
import './BlogPosts.css'
import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'

const BlogPosts = () => {
  const [currentBlogPost, setCurrentBlogPost] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [blogOffset, setBlogOffset] = useState(0)
  const blogPostsPerPage = 8

  const [blogs, setBlogs] = useState([])
  const url = 'https://frontend-case-api.sbdev.nl/api/posts'
  const headers = {
    token: `${process.env.REACT_APP_KEY_API}`,
    'Content-Type': 'multipart/form-data',
  }

  useEffect(() => {
    async function fetchBlogData() {
      try {
        const response = await axios.get(url, { headers })
        console.log(response)
        setBlogs(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBlogData()
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const endOffset = blogOffset + blogPostsPerPage
    setCurrentBlogPost(blogs.slice(blogOffset, endOffset))
    setPageCount(Math.ceil(blogs.length / blogPostsPerPage))
  }, [blogOffset, blogs])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * blogPostsPerPage) % blogs.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setBlogOffset(newOffset)
    console.log(newOffset)
  }

  return (
    <>
      <div className="cms cms-blog-page">
        <div className="blog-page-container">
          <div className="blog-page-cards">
            {currentBlogPost.map((blogs) => {
              return (
                <div key={blogs.rank} className="blog-card">
                  <div className="top">
                    <img
                      src={`https://frontend-case-api.sbdev.nl/storage/${blogs.img_url}`}
                      alt=""
                    />
                  </div>
                  <div className="blog-bottom">
                    <h5 className="blog-page-title">{blogs.title}</h5>
                    <p>{blogs.content}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="sb-blog-page-container">
            <ReactPaginate
              breakLabel="..."
              nextLabel="Volgende pagina >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeClassName="active"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPosts
