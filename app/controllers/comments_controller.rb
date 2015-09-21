class CommentsController < ApplicationController
  before_filter :find_comment, only: :update

  def index
    @comments = Comment.all.order('updated_at DESC')
    @comment = Comment.new
    respond_to do |format|
      format.html
      format.json { render json: @comments }
    end
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      respond_to do |format|
        format.html { render :index }
        format.json { render json: { success: @comment } }
      end
    end
  end

  def update
    if @comment.update_attributes(comment_params)
      respond_to do |format|
        format.html { render :index }
        format.json { render json: { success: @comment } }
      end
    end
  end

  private
  def find_comment
    @comment = Comment.find params[:id]
  end

  def comment_params
    params.require(:comment).permit(:author, :content)
  end
end
