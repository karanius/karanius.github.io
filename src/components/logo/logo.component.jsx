import React from 'react';
import './logo.styles.scss'
import {Link} from 'react-router-dom';


class Logo extends React.Component {
  
  componentDidMount(){
    const logo = document.querySelector('.nav-logo');

    logo.addEventListener('mouseenter', e=>{
      this.fireworks('enter');
    })
    
    logo.addEventListener('mouseleave', e=>{
      this.fireworks('leave')
    })
    
  }

  fireworks = (msg) => {
    //fireworks code goes here
    console.log(msg)
  }

  render(){
    return (
      <Link className="nav-logo" to='/'>
      DEV KAVIAN 
      </Link>
    )
  }
}

export default (Logo);