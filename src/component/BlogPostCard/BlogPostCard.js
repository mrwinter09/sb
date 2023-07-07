/** @format */

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './BlogPostCard.css'

const BlogPostCard = () => {
  const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=4'
  const [coins, setCoins] = useState(null)

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data.coins)
        console.log(response.data.coins)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  if (!coins) return null

  console.log(coins)

  return (
    <>
      <div className="cms cms-blogpost">
        <div className="blog-container">
          <div className="blog-cards">
            {coins.map((coins) => {
              return (
                <div key={coins.rank} className="card">
                  <div className="top">
                    <img src={coins.icon} alt="" />
                  </div>
                  <div className="bottom">
                    <h5 className="blog-title">Heading</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus quis nunc at mauris rhoncus maximus ut id
                      tellus.fffddddddddddddddddddddddd
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
          <div class="sb-blog-container">
            <Link to="/blogpage">
              <button type="submit" class="btn btn-primary" id="sb-button">
                Laad meer
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPostCard
