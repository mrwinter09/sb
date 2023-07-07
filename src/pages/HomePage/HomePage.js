/** @format */

import React from 'react'
import BlogPostForm from '../../component/BlogPostForm/BlogPostForm'
import BlogPostCard from '../../component/BlogPostCard/BlogPostCard'
import './Homepage.css'

const HomePage = () => {
  return (
    <div className="blog-post">
      <div className="container">
        {/* Left Side */}
        <div className="left">
          <BlogPostForm />
        </div>

        {/* Right Side */}
        <div className="right">
          <BlogPostCard />
        </div>
      </div>
    </div>
  )
}

export default HomePage
