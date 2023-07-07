/** @format */

import React, { useState } from 'react'
import axios from 'axios'
import './BlogPostForm.css'
import camIcon from '../../assets/camera_icon.svg'

const BlogPostForm = () => {
  // const urlPost = 'https://frontend-case-api.sbdev.nl/api/posts'
  const [data, setData] = useState({
    title: '',
    content: '',
    category_id: '',
    image: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    if (true) {
      console.log('true')
      postBlog()
    }
  }

  async function postBlog() {
    try {
      // eslint-disable-next-line
      const response = await axios.post(
        'https://frontend-case-api.sbdev.nl/api/posts',
        {
          headers: {
            'Content-Type': 'application/json',
            token: 'pj11daaQRz7zUIH56B9Z',
          },
          title: 'data.title',
          content: 'data.content',
          category_id: 'data.category_id',
          image: 'data.image',
        }
      )
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  return (
    <>
      <div className="cms">
        <div className="blog-container">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <h2>Plaats een blog bericht</h2>
              <div class="form-group">
                <label for="inputBlogTitle">Berichtnaam</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  placeholder="Geen title"
                  onChange={(e) => handle(e)}
                  value={data.title}
                />
              </div>
              <div class="form-group">
                <label for="blogCategorieSelect1">Categorie</label>
                <select
                  onChange={(e) => handle(e)}
                  value={data.category_id}
                  required
                  class="form-control"
                  id="category_id">
                  <option value="" disabled selected>
                    Geen categorie
                  </option>
                  <option value="1">Tech</option>
                  <option value="2">Nieuws</option>
                  <option value="3">Sport</option>
                  <option value="4">Lokaal</option>
                </select>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Header afbeelding</label>
                {/* upload */}
                <div class="input-group mb-3">
                  <div class="custom-file">
                    <input
                      type="file"
                      class="custom-file-input"
                      id="image"
                      readonly
                      onChange={(e) => handle(e)}
                      value={data.image}
                    />
                    <div className="check">
                      <img src={camIcon} alt="" />
                      <button className="sb-upload-button">Kies bestand</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <label for="blogTextarea">Bericht</label>
                <textarea
                  rows="9"
                  class="form-control"
                  id="content"
                  placeholder="Geen title"
                  onChange={(e) => handle(e)}
                  value={data.content}></textarea>
              </div>
            </div>
            <div class="sb-container">
              <button type="submit" class="btn btn-primary" id="sb-button">
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
