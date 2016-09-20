class User < ApplicationRecord
	has_many :customers
	validates_presence_of :first_name, :last_name, :email
end
