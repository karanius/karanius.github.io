import {NavBarActionTypes} from './nav-bar.types';

export const setBurgerSate = state => ({
  type: NavBarActionTypes.SET_BURGER_STATE,
  payload: state
})

export const isBurgerOpen = state => ({
  type: NavBarActionTypes.IS_BURGER_OPEN,
  payload: state
})