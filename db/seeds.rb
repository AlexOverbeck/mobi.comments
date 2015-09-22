# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
5000.times do
  comment_params = {
    content: Faker::Lorem.paragraph(rand(3..10)),
    image_url: "http://lorempixel.com/200/200/?#{rand(1..9000)}"
  }
  Comment.where(author: Faker::Name.name).first_or_create comment_params
end
