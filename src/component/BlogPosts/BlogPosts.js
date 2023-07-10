/** @format */

import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import './BlogPosts.css'

const BlogPosts = () => {
  const [blogs, setBlogs] = useState([])
  const url = 'https://frontend-case-api.sbdev.nl/api/posts'
  const headers = {
    token: 'pj11daaQRz7zUIH56B9Z',
    'Content-Type': 'multipart/form-data',
  }

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await axios.get(url, { headers })
        console.log(response)
        setBlogs(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBlog()
  }, [])

  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  const itemsPerPage = 8

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(blogs.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(blogs.length / itemsPerPage))
  }, [itemOffset, blogs])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  console.log(currentItems)

  return (
    <>
      <div className="cms cms-blog-page">
        <div className="blog-page-container">
          <div className="blog-page-cards">
            {currentItems.map((blogs) => {
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
