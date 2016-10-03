class Api::V1::UsersController < ApplicationController
  before_action :set_user, only: :update

  def update
    if @user.update(user_params) 
      render json: @user
     else
       render json: {errors: @user.errors.full_messages}, status: :unprocessible_entity
     end
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:first_name, :last_name, :phone_number, :role)
  end
end
