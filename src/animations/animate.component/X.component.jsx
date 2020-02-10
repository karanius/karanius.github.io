import React from 'react';
import Character from '../assets.component/character/character.component';
import './X.style.css'

import SpeachBubble from '../assets.component/speech-bubble/speech-bubble.component';
import {connect} from 'react-redux';
import {startCharacterAnimation, setCharacterPositionLeft, startSpeechBubbleAnimation , setCharacterDirectionAnimation } from '../../redux/animation/animation.action';

class X extends React.Component {
  constructor(){
    super()

    this.state ={
      pageCenterX: window.innerWidth/2,
      pageBottomY: window.innerHeight-200,
      stage: 1,
    }
  }

  componentDidMount(){
    const {stage} = this.state
    //character's "pre" stage
    if (stage === 1){
      this.props.setCharacterDirectionAnimation('right')
    }
    window.addEventListener('resize', e=>{
      this.setState({
        pageCenterX: window.innerWidth/2,
        pageBottomY: window.innerHeight-200
      })
    })
    this.animate(stage)
  }

  animate = (stage) => {
    //other stages are for later - just focus on stage 1
    if (stage === 1 ){
      // move to the middle of the screen
        this.moveToMiddle();
      } else if (stage === 2) {
        //do some pre talk moves // for later
      }   
  }


  moveToMiddle = async () => {

    const { startCharacterAnimation, setCharacterDirectionAnimation} = this.props;

    return new Promise((resolve,reject)=>{

      let reqID;
      
      const steps = (timestamp) =>{
        if (this.props.characterIsActive){
          if (this.props.characterLeft < this.state.pageCenterX + 30){
            this.props.setCharacterPositionLeft(this.props.characterLeft + 5)
            setTimeout(()=>{requestAnimationFrame(steps)},80);
          }else{
            setCharacterDirectionAnimation('stand')
            cancelAnimationFrame(reqID)
            this.props.startSpeechBubbleAnimation(true);
            resolve();
          }
        } else {
          this.props.setCharacterPositionLeft(-50)
          cancelAnimationFrame(reqID)
          resolve();
        }
      }

      startCharacterAnimation(true)
      reqID = requestAnimationFrame(steps)
      
    })
  }

  render(){
    const { pageBottomY , stage} = this.state;
    const {speechBubbleIsActive , characterLeft} = this.props;

    return(
      <div className="x-container">

        {
          speechBubbleIsActive ? 
          <SpeachBubble left={characterLeft} stage={stage}  /> : 
          null
        }


        <div className='character-position' style={{
          top: `${pageBottomY}px`,
          left: `${characterLeft}px`,
          position: 'absolute'
        }}>
          <Character />
        </div>

        </div>

    )
  }

}


const mapStateToProps = ({ animation })=> {
  return {
    speechBubbleIsActive: animation.speechBubbleIsActive,
    characterIsActive: animation.characterIsActive,
    characterDirection: animation.characterDirection,
    characterLeft: animation.characterLeft
  }
}

const mapDispatchToProps = dispatch => {
  return{
    startSpeechBubbleAnimation: state => dispatch(startSpeechBubbleAnimation(state)),
    setCharacterDirectionAnimation: state => dispatch(setCharacterDirectionAnimation(state)),
    setCharacterPositionLeft: state => dispatch(setCharacterPositionLeft(state)),
    startCharacterAnimation: state => dispatch(startCharacterAnimation(state))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(X);
