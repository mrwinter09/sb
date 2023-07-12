/** @format */

import './Homepage.css'
import React from 'react'
import BlogPostForm from '../../component/BlogPostForm/BlogPostForm'
import BlogPostCard from '../../component/BlogPostCard/BlogPostCard'

const HomePage = () => {
  return (
    <main className="blog-post">
      <div className="container">
        <aside className="left">
          <BlogPostForm />
        </aside>
        <article className="right">
          <BlogPostCard />
        </article>
      </div>
    </main>
  )
}

export default HomePage
