class CreateMovies < ActiveRecord::Migration[6.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.string :director
      t.string :leads
      t.integer :year
      t.string :rated
      t.string :format
      t.integer :length
      t.belongs_to :genre, null: false, foreign_key: true

      t.timestamps
    end
  end
end
