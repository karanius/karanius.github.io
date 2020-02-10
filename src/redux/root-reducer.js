import { combineReducers } from 'redux';
import navBarReducer from './nav-bar/nav-bar.reducer';
import animationReducer from './animation/animation.reducer'

export default combineReducers({
  navBar :  navBarReducer,
  animation: animationReducer
})