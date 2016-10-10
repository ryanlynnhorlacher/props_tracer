require 'rails_helper'

RSpec.describe Api::V1::CustomersController, type: :controller do

  describe "GET #index" do
    before do
      @user = User.create(first_name: 'ryan', last_name: 'ryan', 
        email: 'ryan@ryan.com', password: 'password', role: 'admin')
      get :index, status: 'all', order: 'Newest to Oldest', category: 'name'
    end


    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it "sets the customers instance variable" do 
      5.times do 
        Customer.create(name: 'jon', email: 'jon@jon.com', 
          phone_number: 2345677, user_id: @user.id)
      end
      get :index
      expect(assigns(:customers).count).to eq(5)
    end

  end

  describe "GET #dashboard" do 
    before do 
      @user = User.create(first_name: 'ryan', last_name: 'ryan', 
        email: 'ryan@ryan.com', password: 'password', role: 'admin')
      get :dashboard, time: 30
    end

    it "returns http success" do 
      get :dashboard
      expect(response).to have_http_status(:success)
    end

    it "returns an arrray" do 
      
        expect(assigns(:stats).count).to eq(4)
    end

    # it "returns the correct number of estimates in array" do 
    #   5.times do 
    #     Customer.create(name: 'jon', email: 'jon@jon.com', 
    #       phone_number: 2345677, user_id: @user.id)
    #       2.times do 
    #         Estimate.create(location: 'ryan st', distance: 100, final_price: 450, 
    #           fence_material: 'wood', fence_height: 6, gate_count: 'double', 
    #           customer_id: Customer.all.sample.id, status: 'Deal closed')
    #       end
    #     end
    #     expect(assigns(:stats)).to eq(10)
    # end


  end



end
