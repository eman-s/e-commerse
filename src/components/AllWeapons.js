import React, {Component} from 'react'
import {Link} from 'react-router-dom'
let data = require('../StoreData.js')


export default class AllWeapons extends Component{
  constructor(props){
    super(props)
    this.state={
      items:data.weapons,
    }
  }
  render(){
    let weaponsData = this.state.items
    let weapons = weaponsData.map((weapon)=>{
      return(
        <div key={weapon.name} className='weapon'>
          <Link to={`/weapons/${weapon._id}`}>{weapon.name}</Link>
        </div>
      )
    })
    return(
      <div className='allWeapons'>
        {weapons}
      </div>
    )
  }
}
