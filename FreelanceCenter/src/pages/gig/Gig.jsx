import React from 'react'
import "./Gig.scss"

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FREELANCECENTER: GRAPHICS & DESIGN</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img src="" alt="" />
            <span>Avihai Levy</span>
            <div className="stars">
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <img src="./img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  )
}

export default Gig