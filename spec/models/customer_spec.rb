require 'rails_helper'

RSpec.describe Customer, type: :model do
	
	describe "validations" do
   it { should validate_presence_of (:name) }
	 it { should validate_presence_of :email}
	 it { should validate_presence_of :phone_number}
	 it { should have_many :estimate}
	 it { should belong_to :user }
	end

	context " in database" do
	  before(:each) do
	  	@customer = FactoryGirl.create(:customer)
	  end

		describe "email will send" do
			it "sets the email" do
			  expect(@customer.email).to_not eq(nil)
		end
			end
		describe "phone number will update" do
			it "sets the phone number" do
				expect(@customer.phone_number).to_not eq(nil)
			end
		end
	end
end
  



	

	

