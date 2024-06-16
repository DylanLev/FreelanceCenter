import React from 'react'
import "./Gig.scss"
import { Slider } from "infinite-react-carousel/lib";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">FREELANCECENTER: GRAPHICS & DESIGN</span>
          <h1>I will create ai generated art for you</h1>
          <div className="user">
            <img 
            className='pp'
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" 
            alt="" 
            />
            <span>Avihai Levy</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img 
            src="https://images.pexels.com/photos/16094047/pexels-photo-16094047/free-photo-of-homme-mains-ordinateur-portable-internet.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="" />
            <img 
            src="https://images.pexels.com/photos/16094047/pexels-photo-16094047/free-photo-of-homme-mains-ordinateur-portable-internet.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="" />
            <img src="https://images.pexels.com/photos/16094047/pexels-photo-16094047/free-photo-of-homme-mains-ordinateur-portable-internet.jpeg?auto=compress&cs=tinysrgb&w=600" 
            alt="" />
          </Slider>
          <h2>About this Gig</h2>
          <p>
            I use an AI program to create images based on text prompts.
            This means I can help you to create a vision you have through a textual description
            of your scene without requiring any reference images.
          </p>
          <div className="seller">
            <h2>About the Seller</h2>
            <div className="user">
              <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600" alt=""/>
            <div className="info">
              <span>Avishai Levy</span>
              <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
            <button>Contact Me</button>
            </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">Israel</span>
                </div>
                <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2023</span>
                </div>
                <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div>
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">English</span>
                </div>
              </div>
              <hr/>
              <p>
                My name is Avishai, I enjoy creating AI generated art in my spare time.
                I have a lot of experience using the AI program.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img 
                className='pp'
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="" 
                />
                <div className="info">
                  <span>Ben Azulai</span>
                  <div className="country">
                    <img 
                    src="/img/flag.png" 
                    alt=""
                    />
                    <span>Israel</span>
                  </div>
                </div>
              </div>
              <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
            <p>
              I just want to say that Avishai is very professional in his work. I work with him for 6 months 
              and he is one of the best in Israel in his craft.
              I recommend his services to everybody.
            </p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src="/img/like.png" alt="" />
              <span>Yes</span>
              <img src="/img/dislike.png" alt="" />
              <span>No</span>
            </div>
            </div>
            <hr/>
            </div>
            
        </div>
        <div className="right">
          <div className="price">
            <h3>1 AI generated image</h3>
            <h3>₪200 (NIS)</h3>
          </div>
          <p>I will create a unique high quality AI generated image based on a 
            description that you give me.
          </p>
          <div className="details">
            <div className="item">
            <img src="/img/clock.png" alt="" />
            <span>2 days Delivery</span>
            </div>
            <div className="item">
            <img src="/img/recycle.png" alt="" />
            <span>3 Revisions</span>
            </div>
            <div className="features">
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Prompt writing</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Artwork delivery</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Image upscaling</span>
              </div>
              <div className="item">
                <img src="/img/greencheck.png" alt="" />
                <span>Additional Design</span>
              </div>
            </div>
            <button>Continue</button>
          
          </div>
          
         
        </div>
      </div>
    </div>
   
  );
};

export default Gig;