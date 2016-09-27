class Api::V1::HeightsController < ApplicationController
  before_action :set_height, only: [:show, :update, :destroy]
  before_action :set_material, only: [:index, :create]

  def index
    render json: material.height
  end

  def show
    render json: @height
  end

  def create
    customer = material.height.new(height_params)
    if height.save
      render json: height
    else
      render json: {errors: height_type.errors}, status: 401
    end
  end

  def update
    if @height.update(height_params)
      render json: @height
    else
      render json: {errors: @height.errors}, status: 401
  end

  def destroy
    @height.destroy
    render json: { message: 'Height Deleted!' }
  end

  private
    def set_height
      @height = Height.find(params[:id])
    end

    def set_material
      @material = Material.find(params[:material_id])
    end

    def height_params
      params.require(:height).permit(:price_per_foot, :name)
    end
end