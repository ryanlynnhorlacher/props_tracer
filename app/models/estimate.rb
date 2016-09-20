class Estimate < ApplicationRecord
	belongs_to :customer
	validates_presence_of   :location, :distance, :final_price, :fence_material, 
							:fence_height, :gate_count
end
