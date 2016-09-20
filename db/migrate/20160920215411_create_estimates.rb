class CreateEstimates < ActiveRecord::Migration[5.0]
  def change
    create_table :estimates do |t|
      t.string :location, null: false
      t.float :distance, null: false
      t.float :final_price, null: false
      t.string :fence_material, null: false
      t.float :fence_height, null: false
      t.integer :gate_count, null: false
      t.belongs_to :customer

      t.timestamps
    end
  end
end
