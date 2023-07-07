/** @format */

import React from 'react'

import './BlogPostForm.css'
import camIcon from '../../assets/camera_icon.svg'

const BlogPostForm = () => {
  return (
    <>
      <div className="cms">
        <div className="blog-container">
          <form>
            <div class="form-group">
              <h2>Plaats een blog bericht</h2>
              <div class="form-group">
                <label for="inputBlogBerichtnaam">Berichtnaam</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputBlogBerichtnaam"
                  placeholder="Geen title"
                />
              </div>
              <div class="form-group">
                <label for="blogCategorieSelect1">Categorie</label>
                <select required class="form-control" id="blogCategorieSelect1">
                  <option value="" disabled selected>
                    Geen categorie
                  </option>
                  <option value="1">Gadgets</option>
                  <option value="2">Smartphone</option>
                  <option value="3">Laptop</option>
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
                      id="exampleInputEmail1"
                      aria-describedby="uploadImgBtn"
                      accept=".jpg,.jpeg, .png,"
                      title="foo"
                    />
                    <div className="check">
                      <img src={camIcon} />
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
                  id="blogTextarea"
                  placeholder="Geen title"></textarea>
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
