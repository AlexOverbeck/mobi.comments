class CommentsController < ApplicationController
  before_filter :get_comments

  def index
    respond_to do |format|
      format.html
      format.json { render json: @comments }
    end
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      respond_to do |format|
        format.html { redirect_to comments_path }
        format.json { render json: @comments, each_serializer: CommentSerializer }
      end
    end
  end

  private
  def get_comments
    @comments = Comment.all.order('updated_at DESC')
  end

  def comment_params
    params.require(:comment).permit(:author, :content, :image_url)
  end
end
