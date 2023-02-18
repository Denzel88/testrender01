import React from 'react'
import Card from '../components/Card';
import { Characters } from '../models/Character'

const WomenScreen = () => {
    const womens = Characters.filter((character) => character.type === "m");
    return (
      <div className='container mt-3'>
        <h1>Men Screen</h1>
        <hr/>
        <div className='row'>
          {womens.map((women) => (
          <Card key={women.id} {...women}/>))}
        </div>
      </div>
    )
  }

export default WomenScreen