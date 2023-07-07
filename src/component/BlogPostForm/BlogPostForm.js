/** @format */

// import React, { useState } from 'react'
import axios from 'axios'
import './BlogPostForm.css'
import camIcon from '../../assets/camera_icon.svg'

const BlogPostForm = () => {
  const url = 'https://frontend-case-api.sbdev.nl/api/posts'

  const postData = {
    title: 'Example Title',
    content: 'Example Content',
    category_id: 1,
    image: 'images/g7TQoPqaPIXtN715RNsJ3NWYf38Dt1UyvSaZEvUC.jpg',
  }

  const headers = {
    token: 'pj11daaQRz7zUIH56B9Z',
    'Content-Type': 'application/json',
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (true) {
      console.log('true')
      postBlog()
    }
  }

  async function postBlog() {
    axios
      .post(url, postData, { headers })
      .then((response) => {
        console.log('Response:', response.data)
      })
      .catch((error) => {
        console.error('Error:', error.message)
      })
  }

  return (
    <>
      <div className="cms">
        <div className="blog-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <h2>Plaats een blog bericht</h2>
              <div className="form-group">
                <label htmlFor="inputBlogTitle">Berichtnaam</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Geen title"
                />
              </div>
              <div className="form-group">
                <label htmlFor="blogCategorieSelect1">Categorie</label>
                <select required className="form-control" id="category_id">
                  <option value="" disabled selected>
                    Geen categorie
                  </option>
                  <option value="1">Tech</option>
                  <option value="2">Nieuws</option>
                  <option value="3">Sport</option>
                  <option value="4">Lokaal</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Header afbeelding</label>
                {/* upload */}
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="image"
                    />
                    <div className="check">
                      <img src={camIcon} alt="" />
                      <button className="sb-upload-button">Kies bestand</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="blogTextarea">Bericht</label>
                <textarea
                  rows="9"
                  className="form-control"
                  id="content"
                  placeholder="Geen title"></textarea>
              </div>
            </div>
            <div className="sb-container">
              <button
                onClick={postBlog}
                type="submit"
                className="btn btn-primary"
                id="sb-button">
                Bericht aanmaken
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default BlogPostForm
