class Customer < ApplicationRecord
	belongs_to :user
	has_many :estimates
	validates_presence_of :name, :email, :phone_number



	def self.return_customers(order, term, category, status)
		if term.blank?
			all.set_order(order).set_status(status).set_limit
		else
		Customer.inner_join(category, status, term).set_order(order).set_limit
		end
	end

	def self.set_limit
		limit(50)
	end


	def self.set_order(order)
		case order
		when 'Newest to Oldest'
			order(created_at: :desc)
		when 'Oldest to Newest'
			order(created_at: :asc)
		when 'A-Z'
			order(:name)
		else 
			all
		end
	end

	def self.inner_join(category, status, term)
		term = "%#{term.downcase.strip}%"
		if category != 'name' && status != 'All'
			joins(:estimates).where("lower(#{category}) LIKE ? AND status = ?", term, status) 
		elsif category == 'name' && status != 'All'
			joins(:estimates).where("status = ?", status).where("lower(#{category}) LIKE ?", term)
		elsif category != 'name' && status == 'All' 
			joins(:estimates).where("lower(#{category}) LIKE ?", term)
		elsif category == 'name' && status == 'All'
			where("lower(#{category}) LIKE ?", term)
		end
	end

	def self.set_status(status = 'All')
		if status == 'All' || status == nil
			all 
		else
			joins(:estimates).where("status = ?", status)
		end
	end

end