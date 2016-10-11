require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
  	it { should validate_presence_of :first_name}
  	it { should validate_presence_of :last_name}
  	it { should validate_presence_of :phone_number}
  	it { have_many :customers}
end



 context " in database" do
 	  before(:each) do
 	  	@user = FactoryGirl.create(:User)
 	  end

		describe "price updated" do
 			it "price is set" do
 			  expect(@user.first_name).to eq()
 			end
 		end

 		describe "width is set" do
 			it "width updated" do
 				expect(@user.last_name).to eq(nil)
 			end
 		end

 		describe "style recorded" do
 			it "style updated" do
 				expect(@user_phone_number).to_not eq(nil)
 			end
 		end
 		
 	end
end