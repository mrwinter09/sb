/** @format */
import './BlogPostCard.css'
import React, { useState, useEffect } from 'react'
import { slice } from 'lodash'
import axios from 'axios'

const BlogPostCard = () => {
  const [blogs, setBlogs] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [index, setIndex] = useState(4)
  const initialPosts = slice(blogs, 0, index)

  const url = 'https://frontend-case-api.sbdev.nl/api/posts'
  const headers = {
    token: `${process.env.REACT_APP_KEY_API}`,
    'Content-Type': 'multipart/form-data',
  }

  useEffect(() => {
    async function fetchBlog() {
      try {
        const response = await axios.get(url, { headers })
        setBlogs(response.data.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchBlog()
    // eslint-disable-next-line
  }, [])

  const loadMore = () => {
    setIndex(index + 4)
    if (index >= blogs.length) {
      setIsCompleted(true)
    } else {
      setIsCompleted(false)
    }
  }

  return (
    <>
      <div className="cms cms-blogpost">
        <div className="blog-container">
          <h2 className="visually-hidden">Blog Posts</h2>
          <div className="blog-cards">
            {initialPosts.map((blogs) => {
              return (
                <div key={blogs.id} className="card">
                  <div className="top">
                    <img
                      src={`https://frontend-case-api.sbdev.nl/storage/${blogs.img_url}`}
                      alt=""
                    />
                  </div>
                  <div className="bottom">
                    <h3 className="blog-title">{blogs.title}</h3>
                    <p>{blogs.content}</p>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="sb-blog-container">
            {isCompleted ? (
              <button
                onClick={loadMore}
                type="button"
                className="btn btn-primary disabled"
                id="sb-button">
                That's It
              </button>
            ) : (
              <button
                onClick={loadMore}
                type="button"
                className="btn btn-primary"
                id="sb-button">
                Laad meer
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPostCard
