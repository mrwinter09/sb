/** @format */

import React from 'react'
import './BlogPostForm.css'

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
                {/* <input
                  type="email"
                  class="form-control"
                  id="blogCategorieSelect1"
                  placeholder="Geen categorie"
                /> */}
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Header afbeelding</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Geen title"
                />
              </div>
              <div class="form-group">
                <label for="blogTextarea">Bericht</label>
                <input
                  type="email"
                  class="form-control"
                  id="blogTextarea"
                  placeholder="Geen title"
                />
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
          {/* <form
          action="https://getform.io/f/f9c1847d-cbc0-4a5b-8810-e3eadf58cbb2"
          method="POST">
          <h2>Plaats een blog bericht</h2>

          <div className="submit-container">
            <div className="input-container">
              <input
                type="number"
                name="amount"
                placeholder="Amount To Stake (in ETH)"
              />
            </div>
          </div>
        </form> */}
        </div>
      </div>
    </>
  )
}

export default BlogPostForm
