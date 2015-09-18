json.array! @comments do |comment|
  json.content do
    json.header comment.author
    json.body comment.content
  end
  json.image_url comment.image_url
  json.details time_ago_in_words(comment.created_at)
end
