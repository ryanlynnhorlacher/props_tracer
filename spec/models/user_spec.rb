require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validations' do
  	it { should validate_presence_of :first_name}
  	it { should validate_presence_of :last_name}
  	it { should validate_presence_of :phone_number}
  	it { have_many :customers}
end
