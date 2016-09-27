10.times do
	user = User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name,
	email: Faker::Internet.email, password: 'password',
	phone_number: Faker::PhoneNumber.cell_phone, role: 'Salesman')

	5.times do
		customer = Customer.create(name: Faker::Name.name, email: Faker::Internet.email,
		phone_number: Faker::PhoneNumber.cell_phone, user_id: user.id )

		3.times do
			Estimate.create(location: Faker::Address.street_address,
			distance: Faker::Number.number(3),
			final_price: Faker::Number.number(4),
			fence_material: ['Vinyl', 'Wood', 'Iron', 'Chain Link'].sample,
			fence_height: [4, 6, 8, 10].sample, gate_count: [0, 1, 2, 3].sample,
			customer_id: customer.id)
		end
	end
end

['Vinyl', 'Wood', 'Iron', 'Chain Link'].each do |fence|
	material = Material.create(name: fence)
	['4', '6', '8', '10'].each do |height|
		fence_height = Height.create(name: height, price_per_foot: [10,20,30].sample, material_id: material.id)
	end
end
