import React, { Component, PropTypes } from 'react';
import CommentList from '../components/CommentList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Immutable from 'immutable';
import * as commentActions from '../actions/comments';

function select(state) {
  // Which part of the Redux global state does our component want to receive as props?
  return { commentsStore: state.commentsStore };
}

class Comments extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    // This corresponds to the value used in function select above.
    commentsStore: PropTypes.instanceOf(Immutable.Map).isRequired,
  }

  render() {
    const { dispatch, commentsStore } = this.props;
    const actions = bindActionCreators(commentActions, dispatch);
    return (
      <CommentList {...{commentsStore, actions}} />
    );
  }
}

export default connect(select)(Comments);
