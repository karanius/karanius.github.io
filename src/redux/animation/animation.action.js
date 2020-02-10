import {AnimationActionTypes} from './animation.types';

export const setCharacterPositionLeft = state => {
  return{
    type: AnimationActionTypes.SET_CHARACTER_POSITION_LEFT,
    payload: state
  }
}

export const endSpeechBubbleAnimation = state => {
  return {
    type: AnimationActionTypes.END_SPEECH_BUBBLE_ANIMATION,
    payload: state
  }
}

export const startSpeechBubbleAnimation = state => {
  return{
    type: AnimationActionTypes.START_SPEECH_BUBBLE_ANIMATION,
    payload: state
  }
}

export const setCharacterDirectionAnimation = state => {
  return{
    type: AnimationActionTypes.SET_CHARACTER_DIRECTION_ANIMATION,
    payload: state
  }
}

export const startCharacterAnimation = state => {
  return{
    type: AnimationActionTypes.START_CHARACTER_ANIMATION,
    payload: state
  }
}

export const endCharacterAnimation = state => {
  return{
    type: AnimationActionTypes.END_CHARACTER_ANIMATION,
    payload: state
  }
}