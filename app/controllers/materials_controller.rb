class MaterialsController < ApplicationController
 def index
  	render json: Material_types.all.order(created_at: :desc)
  end

  def show
  	render json: @material_types.id 
  end

  def create
  	material_types = Material_types.new(material_params)
  	if material_types.save
  		render json: material 
  	else
  		render json: {errors: material.errors}, status: 401
  	end!
  end

  def update
  	if @material.update(material_params)
      render json: @material
    else
      render json: {errors: @material.errors}, status: 401
  end
end
