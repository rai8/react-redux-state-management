import { DECREMENT, INCREMENT, RESET } from '../constants/buttonConstants'

export const increment = () => async dispatch => {
  dispatch({ type: INCREMENT })
}

export const decrement = () => async dispatch => {
  dispatch({ type: DECREMENT })
}

export const reset = () => async dispatch => {
  dispatch({ type: RESET })
}
