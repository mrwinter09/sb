/** @format */

import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import './BlogPosts.css'

const BlogPosts = () => {
  const url =
    'https://frontend-case-api.sbdev.nl/api/posts?page=1&perPage=100&sortBy=title&sortDirection=desc&searchPhrase=test ber&categoryId=1&token=pj11daaQRz7zUIH56B9Z'
  const [blogs, setBlogs] = useState([])

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'application/json',
          token: 'pj11daaQRz7zUIH56B9Z',
        },
      })
      .then((response) => {
        setBlogs(response.data.data)
        console.log(response.data.data)
      })
      .catch((error) => {
        console.log(error)
      })
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
                    <img src={blogs.img_url} alt="" />
                  </div>
                  <div className="blog-bottom">
                    <h5 className="blog-page-title">{blogs.title}</h5>
                    <p>{blogs.content}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div class="sb-blog-page-container">
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
