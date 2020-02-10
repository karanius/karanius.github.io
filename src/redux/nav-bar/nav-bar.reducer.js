import {NavBarActionTypes} from './nav-bar.types';

const INITIAL_STATE = {
  burgerActive: null,
  burgerOpen: null
}

const navBarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case NavBarActionTypes.SET_BURGER_STATE:
      return {
        ...state,
        burgerActive: action.payload
      };
      case NavBarActionTypes.IS_BURGER_OPEN:
        return {
          ...state,
          burgerOpen: action.payload
        }
    default:
      return state;

  }
}

export default navBarReducer;