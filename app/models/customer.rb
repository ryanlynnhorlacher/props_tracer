class Customer < ApplicationRecord
	belongs_to :user
	has_many :estimates
	validates_presence_of :name, :email, :phone_number
end
