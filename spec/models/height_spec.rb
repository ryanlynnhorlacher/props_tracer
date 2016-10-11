require 'rails_helper'

RSpec.describe Height, type: :model do
  describe 'validations' do
  	it { should validate_presence_of (:name) } 
  	it { should validate_presence_of (:price_per_foot) } 
  	it { belong_to (:material) }
end




context " in database" do
 	  before(:each) do
 	  	@height = FactoryGirl.create(:height)
 	  end

		describe "your name" do
 			it "name is set" do
 			  expect(@height.name).to_not eq(nil)
 			end
 		end

 		describe "price per foot shown" do
 			it "price_per_foot updated" do
 				expect(@height.price_per_foot).to_not eq(nil)
 			end
 		end

 	end
end