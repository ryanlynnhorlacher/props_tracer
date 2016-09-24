class RegistrationsController < Devise::RegistrationsController
	respond_to :json
	skip_before_action :verify_authenticity_token

	def get_user_info
		render json: current_user
	end

	private
		def sign_up_params
			params.require(:user).permit(:first_name, :last_name, :email, :password, :phone_number, :role)
		end

		def update_params
			params.require(:user).permit(:first_name, :last_name, :email, :current_password, :password, :phone_number, :role)
		end
end