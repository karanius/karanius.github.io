import React from 'react'
import Nav from '../nav/nav.component'
import DropNav from '../drop-nav/drop-nav.component'
import './nav-bar.styles.scss'


import {connect} from 'react-redux';

import {setBurgerSate} from '../../redux/nav-bar/nav-bar.actions.js'

class NavBar extends React.Component {

  componentDidMount(){
    const {setBurgerSate} = this.props;
    
    if (window.innerWidth <= 550) {
      setBurgerSate( true )
    }

    window.addEventListener('resize', (e)=>{
      if (e.target.innerWidth >= 550) {
        setBurgerSate( null )

      } else {
        setBurgerSate( true )
      }
    })
  }

  render(){
    const {burgerActive} = this.props;
    return (
        <div id='navHeighAnchor'>
          <Nav />
          {
            burgerActive ?
            <DropNav />
            :
            null
          }
        </div>
    )  
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setBurgerSate: state => dispatch(setBurgerSate(state))
  }
}

const mapStateToProps = ({navBar}) => {
  return {
    burgerActive : navBar.burgerActive
  }
}



export default  connect(mapStateToProps,mapDispatchToProps)(NavBar);