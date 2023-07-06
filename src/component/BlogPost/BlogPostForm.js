/** @format */

import React from 'react'
import './BlogPostForm.css'

const BlogPostForm = () => {
  return (
    <>
      <div className="cms">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
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
    </>
  )
}

export default BlogPostForm
