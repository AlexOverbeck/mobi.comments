var CommentActions = {
  toggleSubmittable: function(canSubmit) {
    AppDispatcher.handle({
      actionType: 'TOGGLE_SUBMITTABLE',
      canSubmit: canSubmit
    });
  },

  createComment: function(data) {
    AppDispatcher.handle({
      actionType: 'CREATE_COMMENT',
      data: data
    });
  },

  addComment: function(data) {
    AppDispatcher.handle({
      actionType: 'ADD_COMMENT',
      data: data
    });
  }
};
