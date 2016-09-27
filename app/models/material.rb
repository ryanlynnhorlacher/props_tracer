class Material < ApplicationRecord
	has_many :heights
	has_many :gate_types
	validates_presence_of :name
end
