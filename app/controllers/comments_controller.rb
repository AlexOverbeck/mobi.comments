class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    if comment.save
      ActionCable.server.broadcast 'comments',
        id: comment.id,
        author: comment.author,
        content: comment.content

      head :ok
    end
  end

  def index
    @comments = Comment.all.reverse
  end

  private

  def comment_params
    params.require(:comment).permit(:author, :content)
  end
end
