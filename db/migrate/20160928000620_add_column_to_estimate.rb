class AddColumnToEstimate < ActiveRecord::Migration[5.0]
  def change
    add_column :estimates, :status, :string
  end
end
