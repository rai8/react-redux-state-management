import React from 'react'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, reset } from '../actions/buttonActions'

const Counter = () => {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)
  // console.log(count)
  const incrementHandler = () => {
    dispatch(increment())
  }
  const decrementHandler = () => {
    dispatch(decrement())
  }
  const resetHandler = () => {
    dispatch(reset())
  }
  return (
    <div>
      <div className='App'>
        <div className='count'>
          <p className='primary'>{count}</p>
        </div>
        <div className='actions'>
          <button className='primary' onClick={decrementHandler}>
            DECREMENT
          </button>
          <button className='primary' onClick={resetHandler}>
            RESET
          </button>
          <button className='primary' onClick={incrementHandler}>
            INCREMENT
          </button>
        </div>
      </div>
    </div>
  )
}

export default Counter
