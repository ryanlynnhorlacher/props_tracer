require 'rails_helper'

RSpec.describe Estimate, type: :model do
	describe 'validations' do 
		it { should validate_presence_of :gate_price}
		it { should validate_presence_of :width}
		it { should validate_presence_of :style}	
		it { should validate_presence_of :gate_price}
		it { should belongs_to :material}
		it { should have_many :material}
end
