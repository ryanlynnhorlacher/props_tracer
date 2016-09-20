class GateType < ApplicationRecord
	belongs_to :material
	validates_presence_of :gate_price, :name
end
