import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Todo from '../containers/Todo'
import configureStore from '../store/configureStore'

const store = configureStore()

const TodoApp = props => {
  return (
    <Provider store={store}>
      <Todo />
    </Provider>
  )
}

export default TodoApp
