import React from 'react'
import { Provider } from "react-redux";
import { store } from './App/Store';
import ApiRedux from './Components/ApiRedux';

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <ApiRedux/>
      </Provider>
    </div>
  )
}
