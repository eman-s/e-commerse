import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import data from '../StoreData'

export default class AllVehicles extends Component{
  constructor(props){
    super(props)
    this.state={
      items:data.vehicles,
    }
  }
  render(){
    console.log(this.state.items);
    let vehicleData = this.state.items
    let vehicles = vehicleData.map((vehicle)=>{
      return(
        <div key={vehicle.name} className='vehicle'>
          <Link to={`/vehicles/${vehicle._id}`}>{vehicle.name}</Link>
        </div>
      )
    })
    return(
      <div className='allVehicles'>
        {vehicles}
      </div>
    )
  }
}
