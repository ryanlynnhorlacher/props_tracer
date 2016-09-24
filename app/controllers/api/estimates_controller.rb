class EstimatesController < ApplicationController
 before_action :set_customer, only: [:show, :update, :destroy]

  def index
  	render json: customers.estimates
  end

  def show
  	render json: @estimate
  end

  def create
  	estimate = customer.estimate.new(estimate_params)
  	if estimate.save
  		render json: estimate 
  	else
  		render json: {errors: estimate.errors}, status: 401
  	end
  end

  def update
  	if @estimate.update(estimate_params)
      render json: @estimate
    else
      render json: {errors: @estimate.errors}, status: 401
  end
  def destroy
  	@customer.destroy
  	render json: { message: 'Estimate Removed!' }
  end

  private
    def set_estimate
      @estimate = current_customer.estimate.find(params[:id])
    end

    def estimate_params
    	params.require(:estimate).permit(:location, :distance, 
    												:final_price, :fence_material, :fence_hight, :gate_count)
    end
end