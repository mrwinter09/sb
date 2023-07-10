/** @format */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './BlogPostCard.css'

const BlogPostCard = () => {
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
        console.log(response.data.data)
        setBlogs(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBlog()
  }, [])

  return (
    <>
      <div className="cms cms-blogpost">
        <div className="blog-container">
          <div className="blog-cards">
            {blogs.map((blogs) => {
              return (
                <div key={blogs.rank} className="card">
                  <div className="top">
                    <img
                      src={`https://frontend-case-api.sbdev.nl/storage/${blogs.img_url}`}
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <h5 className="blog-title">{blogs.title}</h5>
                    <p>{blogs.content}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="sb-blog-container">
            <Link to="/blogpage">
              <button type="submit" className="btn btn-primary" id="sb-button">
                Laad meer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPostCard
