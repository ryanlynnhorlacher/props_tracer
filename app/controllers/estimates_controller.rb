class EstimatesController < ApplicationController
  def index
  	render json: Estimate.all 
  end

  def show
  	render json: @estimate.id 
  end

  def create
  	estimate = Estimate.new(estimate_params)
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
end