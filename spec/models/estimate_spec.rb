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
end
