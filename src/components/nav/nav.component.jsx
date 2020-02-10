import React from 'react';
import './nav.styles.scss';

import Burger from '../burger/burger.component';
import NavLinks from '../nav-links/nav-links.component';
import Logo from '../logo/logo.component'

import {connect} from 'react-redux';

const Nav = ({burgerActive}) => {  

  return (
    <div className="nav">
      {
        burgerActive ? 
        (
         <>
            <Logo/>
            <Burger />
          </>
        )
        :
        (      
          <>
            <Logo/>
            <NavLinks />
          </>
        )
      }
    </div>
  )
}

const mapStateToProps = ({navBar}) => {
  return {
    burgerActive: navBar.burgerActive
  } 
}


export default connect(mapStateToProps)(Nav);