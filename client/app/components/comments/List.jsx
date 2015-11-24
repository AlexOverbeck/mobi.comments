import React, { Component, PropTypes } from 'react'
import { SHOW_ALL } from '../../constants/CommentFilters'

const TODO_FILTERS = {
  [SHOW_ALL]: () => true
}

class List extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = { filter: SHOW_ALL }
  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])

    return (
      <div className='comment-list'>
        {commentNodes}
      </div>
    )
  }
}

List.propTypes = {
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

export default List
