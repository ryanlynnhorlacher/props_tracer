require 'rails_helper'

RSpec.describe Material, type: :model do
  describe 'validations' do
  	it { should validate_presence_of :name}
  	it { have_many :heights}
  	it { have_many :gate_types}
end
