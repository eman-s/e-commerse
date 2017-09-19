import React, {Component} from 'react'


export default class Home extends Component {
  render(){
    let homeBackground = {
      "backgroundImage": "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://d2fzf9bbqh0om5.cloudfront.net/images/7332/original/post_apocalyptic_fashion_dressing_for_the_end_of_the_world.jpg?1501633718)",
      'padding':'5cm',
    }
    let textColor = {
      'color':'white'
    }
    return(
      <div style={homeBackground} className='homePage'>
        <section style={textColor}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </section>
      </div>
    )
  }
}
