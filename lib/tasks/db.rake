namespace :db do

  desc "Recreate the database from scratch"
  task :refresh => %w(do_not_run_in_production! db:drop db:create db:migrate db:mock db:test:prepare)

	task :do_not_run_in_production! do
    if Rails.env.production?
      raise "You don't want to run this in production. Trust me. I'm a doctor."
    end
  end

  desc "Kind of like db:seed, but for non-production data"
  task :mock => [:environment] do |t|
    5.times do
      comment_params = {
        content: Faker::Lorem.paragraph(rand(3..10)),
        image_url: "http://lorempixel.com/200/200/?#{rand(1..9000)}"
      }
      Comment.where(author: Faker::Name.name).first_or_create comment_params
    end
  end


end
