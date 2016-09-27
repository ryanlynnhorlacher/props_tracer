class Api::V1::CustomersController < ApplicationController
	before_action :set_customer, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token
  protect_from_forgery with: :null_session

  def index
  	render json: Customer.all
  end

  def show
  end

  def create
  	customer = current_user.customers.new(customer_params)
  	if customer.save
  		render json: customer 
  	else
  		render json: {errors: customer.errors}, status: 401
  	end
  end

  def update
  	if @customer.update(customer_params)
      render json: @customer
    else
      render json: {errors: @customer.errors}, status: 401
    end
  end

  def destroy
  	@customer.destroy
  	render json: { message: 'Customer Deleted!' }
  end

  private
    def set_customer
      @customer = Customer.find(params[:id])
    end

    def customer_params
    	params.require(:customer).permit(:name, :email, :phone)
    end
end


# This is comment in the NewBranch.