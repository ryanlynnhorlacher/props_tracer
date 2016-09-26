class CustomersController < ApplicationController
	before_action :set_customer, only: [:show, :update, :destroy]

  def index
  	render json: current_user.customers
  end

  def show
  	render json: @customer
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

  def destroy
  	@customer.destroy
  	render json: { message: 'Customer Deleted!' }
  end

  private
    def set_customer
      @customer = current_user.customers.find(params[:id])
    end

    def customer_params
    	params.require(:customer).permit(:name, :email, :phone)
    end
end


# This is comment in the NewBranch.