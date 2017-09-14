import React, {Component} from 'react'


export default class Home extends Component {
  render(){
    let homeBackground = {
      'backgroundImage':'url("https://d2fzf9bbqh0om5.cloudfront.net/images/7332/original/post_apocalyptic_fashion_dressing_for_the_end_of_the_world.jpg?1501633718")',
      'padding':'5cm'
    }
    return(
      <div style={homeBackground} className='homePage'>
      </div>
    )
  }
}
