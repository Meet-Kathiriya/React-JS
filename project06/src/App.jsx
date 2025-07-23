import React from 'react'
import ReducCounter from './ReducCounter'
import { Provider } from 'react-redux'
import { store } from './app/Store'
import { TodoSlice } from './features/TodoSlice'

export default function App() {
  return (
    <>
      <Provider store={store}>
        {/* <ReducCounter /> */}
        <TodoSlice/>
      </Provider>
    </>
  )
}