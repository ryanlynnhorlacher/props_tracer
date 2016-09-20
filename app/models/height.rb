class Height < ApplicationRecord
	belongs_to :material
	validates_presence_of :price_per_foot, :name
end
