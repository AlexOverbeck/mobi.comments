class CommentsController < ApplicationController
  def create
    comment = Comment.new(comment_params)
    avatar_string = comment.email.presence || Time.now.to_s
    comment.avatar_hash = Digest::MD5.hexdigest(avatar_string)
    if comment.save
      ActionCable.server.broadcast 'comments',
        id: comment.id,
        author: comment.author,
        content: comment.content,
        avatar_hash: comment.avatar_hash,
        created_at: comment.created_at

      head :ok
    end
  end

  def index
    @comments = Comment.order('created_at DESC')
  end

  private

  def comment_params
    params.require(:comment).permit(:author, :content, :email)
  end
end
