import {AnimationActionTypes} from './animation.types';

const INITAL_STATE = {
  speechBubbleIsActive: null,

  //below is for CHARACTER
  characterIsActive: null,
  characterDirection: 'right',
  characterLeft: -50
}

const animationReducer = (state = INITAL_STATE , action) => {
  switch (action.type){
    case AnimationActionTypes.SET_CHARACTER_POSITION_LEFT:
      return{
        ...state,
        characterLeft: action.payload
      }
    case AnimationActionTypes.END_SPEECH_BUBBLE_ANIMATION:
      return {
        ...state,
        speechBubbleIsActive: action.payload        
      }
    case AnimationActionTypes.START_SPEECH_BUBBLE_ANIMATION:
      return{
        ...state,
        speechBubbleIsActive: action.payload
      }
    case AnimationActionTypes.SET_CHARACTER_DIRECTION_ANIMATION:
      return{
        ...state,
        characterDirection: action.payload
      }
    case AnimationActionTypes.START_CHARACTER_ANIMATION:
      return{
        ...state,
        characterIsActive: action.payload
      }
    case AnimationActionTypes.END_CHARACTER_ANIMATION:
      return{
        ...state,
        characterIsActive: null
      }

    default:
      return state
  }
}

export default animationReducer;