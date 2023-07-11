/** @format */
import './BlogPostForm.css'
import React, { useState } from 'react'
import axios from 'axios'
import camIcon from '../../assets/camera_icon.svg'

const BlogPostForm = () => {
  const [image, setImage] = useState('')
  const [data, setData] = useState({
    title: '',
    content: '',
    category_id: '',
  })

  const url = 'https://frontend-case-api.sbdev.nl/api/posts'
  const headers = {
    token: 'pj11daaQRz7zUIH56B9Z',
    'Content-Type': 'multipart/form-data',
  }

  function handle(e) {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  async function postBlog(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image)
    formData.append('title', data.title)
    formData.append('content', data.content)
    formData.append('category_id', data.category_id)

    try {
      const response = await axios.post(url, formData, { headers })
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="cms">
        <div className="blog-container">
          <form>
            <div className="form-group">
              <h2>Plaats een blog bericht</h2>
              <div className="form-group">
                <label htmlFor="inputBlogTitle">Berichtnaam</label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  placeholder="Geen title"
                  onChange={(e) => handle(e)}
                  value={data.title}
                />
              </div>
              <div className="form-group">
                <label htmlFor="blogCategorieSelect1">Categorie</label>
                <select
                  onChange={(e) => handle(e)}
                  value={data.category_id}
                  className="form-control"
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
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Header afbeelding</label>
                {/* upload */}
                <div className="input-group mb-3">
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="image"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                    {image.name}
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
                  placeholder="Geen title"
                  onChange={(e) => handle(e)}
                  value={data.content}></textarea>
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
