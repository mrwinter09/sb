/** @format */

import './Homepage.css'
import React from 'react'
import BlogPostForm from '../../component/BlogPostForm/BlogPostForm'
import BlogPostCard from '../../component/BlogPostCard/BlogPostCard'

const HomePage = () => {
  return (
    <div className="blog-post">
      <div className="container">
        <div className="left">
          <BlogPostForm />
        </div>
        <div className="right">
          <BlogPostCard />
        </div>
      </div>
    </div>
  )
}

export default HomePage
