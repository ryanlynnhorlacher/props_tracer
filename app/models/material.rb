class Material < ApplicationRecord
	has_many :heights
	has_many :gates
	validates_presence_of :name
end
