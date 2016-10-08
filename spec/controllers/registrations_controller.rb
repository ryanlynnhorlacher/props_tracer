require 'rails_helper'

RSpec.describe RegistrationsController, type: :controller do

  describe "GET #get_user_info" do
      let(:user) { user: current_user }
    it "returns http success" do
      get :get_user_info
      expect(response).to have_http_status(:success)
    end

    it "returns current user info as JSON" do 
      get :user, format: :json
      parsed_response = JSON.parse(response.body)
      expect(parsed_response['user']).to_not be_nil
    end
  end

end