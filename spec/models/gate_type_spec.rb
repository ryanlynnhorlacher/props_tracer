require 'rails_helper'

RSpec.describe GateType, type: :model do
	describe 'validations' do 
		it { should validate_presence_of :gate_price}
		it { should belong_to :material}
	end


 context " in database" do
 	  before(:each) do
 	  	@gate_type = FactoryGirl.create(:GateType)
 	  end

		describe "price updated" do
 			it "price is set" do
 			  expect(@gate_type.gate_price).to eq(1.5)
 			end
 		end

 		describe "width is set" do
 			it "width updated" do
 				expect(@gate_type.width).to eq(1)
 			end
 		end

 		describe "style recorded" do
 			it "style updated" do
 				expect(@gate_type.style).to_not eq(nil)
 			end
 		end

 	end
end