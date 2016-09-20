class CreateHeights < ActiveRecord::Migration[5.0]
  def change
    create_table :heights do |t|
      t.string :name, null: false
      t.float :price_per_foot, null: false
      t.belongs_to :material

      t.timestamps
    end
  end
end
