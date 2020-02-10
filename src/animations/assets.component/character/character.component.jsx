import React from 'react';
import './character.styles.css'

import {connect} from 'react-redux';


class Character extends React.Component {

  render(){

    const {characterDirection} = this.props;
    return(
      <div className="character" >
        <img className='pixelArt shadow' alt="shadow" src={require("../../sprites/shadow.png")} ></img>
        <img className={`pixelArt character-sprite-sheet ${characterDirection}`} alt='charX' src={require("../../sprites/character.png")} />
      </div>
    )
  }

}

const mapStateToProps = ({animation}) => {
  return{
    characterDirection: animation.characterDirection,
  }
}

export default connect(mapStateToProps,null)(Character);