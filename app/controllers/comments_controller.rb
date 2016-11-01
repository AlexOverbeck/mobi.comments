class CommentsController < ApplicationController
  def index
    render component: 'HelloWorld'
  end
end
