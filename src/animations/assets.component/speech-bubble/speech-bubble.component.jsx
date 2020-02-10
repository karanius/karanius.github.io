import React from 'react';
import './speech-bubble.styles.scss';
import Typer from '../Typer/Typer.component';

import {connect} from 'react-redux';
import {endSpeechBubbleAnimation } from '../../../redux/animation/animation.action';

class SpeechBubble extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      stage: this.props.stage,
      steps1: ['Hi! 👋' , 2000 , 'My name is Kavian 😊' , 4000 ,  ' and I do the "dev" thing! ❤️' , 4000 , 'give me the job! 🤗' , 3000 ,  "btw, welcome to my website! 🙌" , 3000 , 'Hope you 👍 it!' , 3000 , "I 🛠️ it myself!! ...using the ⚛️ library" , 3000 , "I love ⚛️" , 4000 , "Please check out the rest of my website." , 5000 ],
    }
  }
  
  componentDidMount(){
    this.adjusterFunction()

  }

  adjusterFunction = () => {
    const {speechBubbleIsActive , endSpeechBubbleAnimation} = this.props;
    if (speechBubbleIsActive){
      let reqI;
   
      const adjust = () => {
        console.log('running')
        if (speechBubbleIsActive && document.querySelector('.character-position')){
            document.querySelector('.show').style.top = `${document.querySelector('.character-position').offsetTop - 100}px`;
            document.querySelector('.show').style.left =  `${document.querySelector('.character-position').offsetLeft - 200}px`;
            setTimeout(()=>{requestAnimationFrame(adjust)},500)
        } else {
          cancelAnimationFrame(reqI);
          endSpeechBubbleAnimation(null)
        }
      }

      reqI = requestAnimationFrame(adjust)
    } else {
      console.log('speechBubbleIs NOT Active')
    }
  }


  render(){
    
    const { stage , steps1} = this.state;
    const {speechBubbleIsActive} = this.props;

    if (stage === 1) {
      return (

          <div className={`${speechBubbleIsActive ? 'show' : null}`} >

            <div className="speech-bubble" >
              <div className="msg-itself" style={{}}> 
                <Typer steps={steps1} /> 
              </div>
            </div>

          </div>

      )
    }
  }
}


const mapStateToProps = ({animation}) => {
  return{
    speechBubbleIsActive: animation.speechBubbleIsActive,
    bubbleTailIsActive: animation.bubbleTailIsActive,
  }
} 

const mapDispatchToProps = dispatch => {
  return{
    endSpeechBubbleAnimation: state => dispatch(endSpeechBubbleAnimation(state)),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SpeechBubble);