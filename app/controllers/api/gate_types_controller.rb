class GateTypesController < ApplicationController
  before_action :set_gatetype, only: [:show, :update, :destroy]

  def index
    render json: material.gate_type
  end

  def show
    render json: @gatetype
  end

  def create
    customer = material.gate_type.new(gate_type_params)
    if gate_type.save
      render json: gate_type 
    else
      render json: {errors: gate_type.errors}, status: 401
    end
  end

  def update
    if @gate_type.update(gate_type_params)
      render json: @gate_type
    else
      render json: {errors: @gate_type.errors}, status: 401
  end

  def destroy
    @gate_type.destroy
    render json: { message: 'Gate Deleted!' }
  end

  private
    def set_gate_type
      @gate_type = material.gate_type.find(params[:id])
    end

    def gate_type_params
      params.require(:gate_type).permit(:gate_price, :name)
    end
end
