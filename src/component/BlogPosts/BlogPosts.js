/** @format */

import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import axios from 'axios'
import './BlogPosts.css'

const BlogPosts = () => {
  const url = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=100'
  const [coins, setCoins] = useState([])

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

  const [currentItems, setCurrentItems] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [itemOffset, setItemOffset] = useState(0)

  const itemsPerPage = 8

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage
    console.log(`Loading items from ${itemOffset} to ${endOffset}`)
    setCurrentItems(coins.slice(itemOffset, endOffset))
    setPageCount(Math.ceil(coins.length / itemsPerPage))
  }, [itemOffset, coins])

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % coins.length
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    )
    setItemOffset(newOffset)
  }

  return (
    <>
      <div className="cms cms-blog-page">
        <div className="blog-page-container">
          <div className="blog-page-cards">
            {currentItems.map((coins) => {
              return (
                <div key={coins.rank} className="blog-card">
                  <div className="top">
                    <img src={coins.icon} alt="" />
                  </div>
                  <div className="blog-bottom">
                    <h5 className="blog-page-title">Heading</h5>
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
          <div class="sb-blog-page-container">
            <ReactPaginate
              breakLabel="..."
              nextLabel="Volgende pagina >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeClassName="active"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogPosts
