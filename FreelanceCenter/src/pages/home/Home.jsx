import React from 'react'
import "./Home.scss"
import Slide from '../../components/slide/Slide'
import CatCard from '../../components/catCard/CatCard'
import {cards} from "../../data"
const Home = () => {
  return (
    <div className="home">
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card}/>
        ))}
      </Slide>
    </div>
  )
}

export default Home