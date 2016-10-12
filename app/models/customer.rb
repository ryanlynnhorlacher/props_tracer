class Customer < ApplicationRecord
	belongs_to :user
	has_many :estimates
	validates_presence_of :name, :email, :phone_number

	def self.dashboard_stats(time)
		date = Time.now - time.to_i * 86400
		stats = []
		['Not contacted', 'Making decision', 'Customer declined', 'Deal closed'].each do |s|
			stats << Customer.joins('INNER JOIN estimates e ON e.customer_id = customers.id')
			.where('e.status = ? AND e.updated_at > ?', s, date).count('customers.name')
		end
		stats
	end


	def self.return_customers(order, term, category, status, offset)
		if term.blank?
			all.set_order(order).set_status(status).set_limit.offset(offset)
		else
			Customer.inner_join(category, status, term).set_order(order).set_limit.offset(offset)
		end
	end

	def self.set_limit
		limit(20)
	end


	def self.set_order(order)
		case order
		when 'Oldest to Newest'
			order(created_at: :asc)
		when 'A-Z'
			order(:name)
		else 
			order(created_at: :desc)
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