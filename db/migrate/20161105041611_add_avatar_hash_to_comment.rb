class AddAvatarHashToComment < ActiveRecord::Migration[5.0]
  def change
    add_column :comments, :avatar_hash, :string
  end
end
