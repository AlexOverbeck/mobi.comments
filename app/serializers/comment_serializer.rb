class CommentSerializer < ActiveModel::Serializer
  include ActionView::Helpers::DateHelper
  attributes :id, :author, :content, :image_url, :details

  def details
    time_ago_in_words(object.updated_at)
  end
end
