/** @format */

import React from 'react'
import BlogPostForm from '../../component/BlogPost/BlogPostForm'
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
        <div className="right">fam</div>
      </div>
    </div>
  )
}

export default HomePage
