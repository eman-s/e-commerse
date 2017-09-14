import React, {Component} from 'react'
import {Link} from 'react-router-dom'
let data = require('../StoreData.js')

export default class AllMiscellaneous extends Component{
  constructor(props){
    super(props)
    this.state={
      items:data.misc,
    }
  }
  render(){
    console.log(this.state.items);
    let miscData = this.state.items
    let miscItems = miscData.map((item) =>{
      return(
        <div key={item.name} className='miscItem'>
          <Link to={`/misc/${item._id}`}>{item.name}</Link>
        </div>
      )
    })
    return(
      <div className='miscItems'>
        {miscItems}
      </div>
    )
  }
}
