class Customer < ApplicationRecord
	belongs_to :user
	has_many :estimates
	validates_presence_of :name, :email, :phone_number


	def self.return_customers(order, term, category)
		if Customer.term_category(term, category).count > 0 
			Customer.term_category(term, category).order_by(order)
		else
			Customer.term_category(term, category)
		end
	end

	def self.term_category(term, category)
		if term.blank? == false
			term = "%#{term.downcase.strip}%"
			return Customer.set_category(category, term)
		else
			return all.limit(20) 
		end
	end

	def self.set_category(category, term)
		case category
		when 'Name', 'Choose Category'
			where("lower(name) LIKE ?", term).limit(20)
		when 'Fence material'
			joins(:estimates).where("lower(fence_material) LIKE ?", term).limit(20)
		when 'Address'
			joins(:estimates).where("lower(location) LIKE ?", term).limit(20)
		else
			all.limit(20)
		end
	end


	def self.order_by(order)
		case order
		when 'Newest to Oldest'
			order(created_at: :desc)
		when 'Oldest to Newest'
			order(created_at: :asc)
		when 'A-Z'
			order(:name)
		else 
			all.limit(20)
		end
	end


end
