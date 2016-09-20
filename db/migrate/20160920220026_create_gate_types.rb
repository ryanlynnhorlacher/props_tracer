class CreateGateTypes < ActiveRecord::Migration[5.0]
  def change
    create_table :gate_types do |t|
      t.float :gate_price
      t.integer :width
      t.string :style
      t.belongs_to :material

      t.timestamps
    end
  end
end
