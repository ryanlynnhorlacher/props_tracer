require 'rails_helper'

RSpec.describe Material, type: :model do
  describe 'validations' do
  	it { should validate_presence_of :name}
  	it { have_many :heights}
  	it { have_many :gate_types}
end



 		describe "name recorded" do
 			it "name updated" do
 				expect(@material.name).to_not eq(nil)
 			end
 		end


 context " in database" do
 	  before(:each) do
 	  	@material = FactoryGirl.create(:Material)
 	  end

		describe "Height updated" do
 			it "price is set" do
 			  expect(@material.heights).to eq(nil)
 			end
 		end

 		describe "gate type is set" do
 			it "gate type updated" do
 				expect(@material.gate_types).to eq(nil)
 			end
 		end


 	end
end