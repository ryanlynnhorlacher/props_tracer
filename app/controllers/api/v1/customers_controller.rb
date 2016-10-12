class Api::V1::CustomersController < ApplicationController
	before_action :set_customer, only: [:show, :update, :destroy]
  skip_before_action :verify_authenticity_token
  protect_from_forgery with: :null_session

  def index
<<<<<<< HEAD
    customers = Customer.return_customers( params[:order], params[:searchTerm], 
      params[:category], params[:status], params[:offset] )
=======
    customers = Customer.return_customers(params[:order], params[:searchTerm], params[:category], params[:status])
>>>>>>> cdee99e2710293daa39c75a1050be8d62e7cee79
    render json: customers
  end
  
  # Parameters {"order"=>"order", "searchTerm"=>"term", 
  # 
  #   "category"=>"cat", "controller"=>"api/v1/customers", "action"=>"index"}
  def dashboard
    @stats = Customer.dashboard_stats(params[:time])
    render json: @stats
  end

  def create
  	@customer = User.first.customers.new(customer_params)
  	if @customer.save
  		 @estimate = @customer.estimates.new(estimate_params)
       if @estimate.save
        render :create
      else
        render json: {errors: @estimate.errors}, status: 401
      end
  	else
  		render json: {errors: @customer.errors}, status: 401
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

    def estimate_params
      params.require(:estimate).permit(:location, :distance, 
        :final_price, :fence_material, :fence_height, :gate_count, :status)
    end

    def customer_params
    	params.require(:customer).permit(:name, :email, :phone_number)
    end
end
