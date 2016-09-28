class Customer < ApplicationRecord
	belongs_to :user
	has_many :estimates
	validates_presence_of :name, :email, :phone_number


	def self.return_customers(order, term, category)
		terms = Customer.term_category(term, category).order(order)
	end

	def self.term_category(term, category)
		if term.blank? == false && category.blank? == false
			category = category.downcase.underscore
			term = "%#{term}%"
			return where("#{category} LIKE ?", term)
		else
			return all 
		end
	end

	# Client.where("orders_count = ?", params[:orders])


	def self.order(order)
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


end
