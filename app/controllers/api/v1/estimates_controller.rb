class Api::V1::EstimatesController < ApplicationController
 before_action :set_customer, only: [:index, :create]
 before_action :set_estimate, only: [:show, :update, :destroy]

  def index
  	render json: @customer.estimates
  end

  def show
  	render json: @estimate
  end

  def create
  	estimate = @customer.estimates.new(estimate_params)
  	if estimate.save
  		render json: estimate 
  	else
  		render json: {errors: estimate.errors}, status: 401
  	end
  end

  def update
  	if @estimate.update(estimate_params)
      @estimate
    else
      render json: {errors: @estimate.errors}, status: 401
    end
  end
  
  def destroy
  	@estimate.destroy
  	render json: { message: 'Estimate Removed!' }
  end

  private
    def set_estimate
      @estimate = Estimate.find(params[:id])
    end

    def set_customer
      @customer = Customer.find(params[:customer_id])
    end

    def estimate_params
    	params.require(:estimate).permit(:location, :distance, 
    												:final_price, :fence_material, :fence_height, :gate_count, :status)
    end
end