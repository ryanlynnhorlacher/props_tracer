class GateTypesController < ApplicationController
  def index
  	render json: Gate_types.all.order(created_at: :desc)
  end

  def show
  	render json: @gate_types.id 
  end

  def create
  	gate_types = Gate_types.new(estimate_params)
  	if gate_types.save
  		render json: estimate 
  	else
  		render json: {errors: estimate.errors}, status: 401
  	end!
  end

  def update
  	if @estimate.update(estimate_params)
      render json: @estimate
    else
      render json: {errors: @estimate.errors}, status: 401
  end
end

	private 
	params.require(:gate).permit(:name, :complete)
	end
end
