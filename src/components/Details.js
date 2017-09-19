import React, {Component} from 'react'
import data from '../StoreData'

class View extends Component {
  render(){
    let item = this.props.details
    const inStock = item.in_stock
    return(
      <div className='itemDescription'>
        <h1>{item.name}</h1>
        <p style={{fontFamily: 'Raleway', color:'green'}}>{item.price} {item.unit}</p>
        <p style={{fontFamily: 'Raleway', color:'yellow'}}>{inStock ? 'IN STOCK' : 'UNAVAILABLE'}</p>
        <img className='productImage' src={item.image_url} alt={item.name}/>
      </div>
    )
  }
}

export default class Details extends Component {
  constructor(props){
    super(props)
    this.state={
      'details':{},
      'endpoint':''
    }
  }



    componentDidMount(){
      let {endpoint} = this.props.match.params
      let {id} = this.props.match.params
      let details = data[endpoint].find(obj => obj._id === parseInt(id, 0))
        this.setState({
          'details':details,
          'endpoint':endpoint
        })
        console.log(data[endpoint]);
        console.log(details);

    }

  render(){
    console.log(this.state.details);
    return(
      <div>
        <View details={this.state.details} endpoint={this.state.endpoint} />
      </div>
    )
  }
}
