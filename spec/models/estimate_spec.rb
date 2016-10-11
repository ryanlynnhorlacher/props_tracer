require 'rails_helper'

RSpec.describe Estimate, type: :model do
	describe 'validations' do
  	it { should validate_presence_of (:location) }
  	it { should validate_presence_of (:distance) }
  	it { should validate_presence_of (:final_price) }
  	it { should validate_presence_of (:fence_material) }
  	it { should validate_presence_of (:fence_height) }
  	it { should validate_presence_of (:gate_count) }
  	it { should belong_to (:customer) }
  end




 context " in database" do
 	  before(:each) do
 	  	@estimate = FactoryGirl.create(:estimate)
 	  end

		describe "location has been loaded" do
 			it "location is set" do
 			  expect(@estimate.location).to_not eq(nil)
 		end
 			end
 		describe "set teh distance" do
 			it "distance updated" do
 				expect(@estimate.distance).to_not eq(nil)
 			end
 		end
 	end
end
  