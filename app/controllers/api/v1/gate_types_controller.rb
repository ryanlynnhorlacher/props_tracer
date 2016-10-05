class Api::V1::GateTypesController < ApplicationController
  before_action :set_gate_type, only: [:show, :update, :destroy]
  before_action :set_material, only: [:index, :create]

  def index
    render json: material.gate_type
  end

  def show
  end
 
  def create
    @gate_type = @material.gate_types.new(gate_type_params)
    if @gate_type.save
      @gate_type 
    else
      render json: {errors: @gate_type.errors}, status: 401
    end
  end

  def update
    if @gate_type.update(gate_type_params)
      @material = Material.find(@gate_type.material_id)
    else
      render json: {errors: @gate_type.errors}, status: 401
    end
  end

  def destroy
    @gate_type.destroy
    render json: { message: 'Gate Deleted!' }
  end

  private
    def set_gate_type
      @gate_type = GateType.find(params[:id])
    end

    def set_material
      @material = Material.find(params[:material_id])
    end

    def gate_type_params
      params.require(:gate_type).permit(:gate_price, :width, :style)
    end
end
