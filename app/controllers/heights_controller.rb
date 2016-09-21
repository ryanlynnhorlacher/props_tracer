class HeightsController < ApplicationController
  def index
  	render json: Height_types.all.order(created_at: :desc)
  end

  def show
  	render json: @height_types.id 
  end

  def create
  	height_types = Height_types.new(estimate_params)
  	if height_types.save
  		render json: height 
  	else
  		render json: {errors: height.errors}, status: 401
  	end!
  end

  def update
  	if @height.update(height_params)
      render json: @height
    else
      render json: {errors: @height.errors}, status: 401
  end
end