require 'rails_helper'

RSpec.describe Height, type: :model do
  describe 'validations' do
  	it { should validate_presence_of (:name) } 
  	it { should validate_presence_of (:price_per_foot) } 
  	it { belongs_to (:material) }
end
