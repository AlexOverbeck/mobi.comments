var AppDispatcher = new Flux.Dispatcher();
var FluxEmitter = new EventEmitter();

var CHANGE_EVENT = 'change';

AppDispatcher.handle = function(action) {
  console.log('Handling ' + action.actionType, action);
  this.dispatch(action);
};

var CommentStore = {
  init: function(comments) {
    this.comments = comments;
    this.canSumbit = false;
    this.registerStore();
    this.createSubscription();
  },

  registerStore: function() {
    this.dispatchToken = AppDispatcher.register(function(action) {
      switch(action.actionType) {
        case 'TOGGLE_SUBMITTABLE':
          this.toggleSubmittable(action.canSubmit, function() {
            FluxEmitter.emit(CHANGE_EVENT);
          });
          break;
        case 'CREATE_COMMENT':
          this.createComment(action.data, function() {
            FluxEmitter.emit(CHANGE_EVENT);
          });
          break;
        case 'ADD_COMMENT':
          this.addComment(action.data, function() {
            FluxEmitter.emit(CHANGE_EVENT);
          });
          break;
        default:
          // Do Nothing...
      }
    }.bind(this));
  },

  createSubscription: function() {
    App.cable.subscriptions.create('CommentsChannel', {
      connected: function() {
        CommentActions.toggleSubmittable(true);
      }.bind(this),

      disconnected: function() {
        CommentActions.toggleSubmittable(false);
      }.bind(this),

      received: function(data) {
        CommentActions.addComment(data);
      }
    });
  },

  toggleSubmittable: function(canSubmit, callback) {
    this.canSubmit = canSubmit;
    callback();
  },

  createComment: function(data, callback){
    $.post('/comments', { comment: data });
    callback();
  },

  addComment: function(data, callback){
    this.comments.unshift({
      id: data.id,
      author: data.author,
      avatar_hash: data.avatar_hash,
      content: data.content,
      created_at: data.created_at,
    });
    callback();
  },

  addChangeListener: function(callback) {
    FluxEmitter.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    FluxEmitter.removeListener(CHANGE_EVENT, callback);
  }
};
