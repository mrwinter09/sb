/** @format */

import './BlogPage.css'
import React from 'react'
import BlogPosts from '../../component/BlogPosts/BlogPosts'

const BlogPage = () => {
  return (
    <div className="blog-postpage">
      <div className="container">
        <BlogPosts />
      </div>
    </div>
  )
}

export default BlogPage
