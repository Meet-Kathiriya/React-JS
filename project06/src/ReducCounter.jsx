import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {decrement,increment} from './features/CounterSlice'


export default function ReducCounter() {

    const dispatch = useDispatch()

    const count = useSelector((state)=>{
        return state.counterKey.count
    })

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=> dispatch(increment())}>+</button>
      <button onClick={()=> dispatch(decrement())}>-</button>
    </div>
  )
}