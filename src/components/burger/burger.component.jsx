import React from 'react';
import './burger.styles.scss'

import {connect} from 'react-redux'; 

import {isBurgerOpen} from '../../redux/nav-bar/nav-bar.actions'

class Burger extends React.Component {

  componentDidMount(){
    const burgerButton = document.getElementById("burger-button");
    
    burgerButton.addEventListener('click', (e)=>{
      const {burgerOpen , isBurgerOpen} = this.props
      if (burgerOpen === null ) {
        isBurgerOpen(true)
      } else if (burgerOpen === true ){
        isBurgerOpen(null)
      }
    })
  }


  render(){
    return (
      <div id="burger-button" className={`burger`}>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
        <div className="burger-line"></div>
      </div>
    )
  }
}


const mapStateToProps = ({navBar}) => {
  return{
    burgerOpen: navBar.burgerOpen
  }
}

const mapDispatchToProps = dispatch => ({
  isBurgerOpen: state => dispatch(isBurgerOpen(state))
})


export default connect(mapStateToProps,mapDispatchToProps)(Burger);