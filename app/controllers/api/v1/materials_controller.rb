class Api::V1::MaterialsController < ApplicationController
before_action :set_material, only: [:show, :update, :destroy]
skip_before_action :verify_authenticity_token
protect_from_forgery with: :null_session

  def index
    @materials = Material.all
  end

  def show
  end

  def create
    @material = Material.new(material_params)
    if @material.save
      @material
    else
      render json: {errors: material.errors}, status: 401
    end
  end
 
  def update
    if @material.update(material_params)
    else
      render json: {errors: @material.errors}, status: 401
    end
  end

  def destroy
    @material.destroy
    render json: { message: 'Material Deleted!' }
  end

  private
    def set_material
      @material = Material.find(params[:id])
    end

    def material_params
      params.require(:material).permit(:name)
    end
end
