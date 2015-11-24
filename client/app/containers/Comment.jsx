import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import List from '../components/comments/List'
import * as CommentActions from '../actions/todos'


class CommentApp extends Component {
  render() {
    const { comments, actions } = this.props
    return (
      <div>
        <List comments={comments} />
      </div>
    )
  }
}

CommentApp.propTypes = {
  comments: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    comments: state.comments
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CommentsActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentApp)
