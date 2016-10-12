statuses = ['Not contacted', 'Making decision', 'Customer declined', 'Deal closed']
first_names = ['Ryan', 'Dean', 'Christian', 'Jordan', 'Lonnie', 'Jo', 'Anne', 'Brian', 'Justin']
last_names = ['Johnson', 'Smith', 'Andrews', 'White', 'Black', 'Cooper', 'Cobbler']
emails = ['ryan@ryan.com', 'dean@dean.com', 'christain@christian.com', 'jordan@jordan.com', 'jo@jo.com' ]
distances = [50, 60, 70, 80, 90, 100]
final_prices = [500, 600, 700, 800, 900, 1000]
fence_materials = ['Vinyl', 'Wood', 'Iron', 'Chain Link']
fence_heights = [4, 6, 8, 10]
prices_per_foot = [10, 15, 20]
gate_prices = [200, 300, 400]
widths = [5, 10, 15]
gate_styles = ['Single', 'Double']
phone_numbers = [1234567, 7654321, 2345678, 8765432]
users = User.all
addresses = ['123 Hobb St', '456 Park Place', '324 Tennessee Ave', '980 Duncan Lane']

user = User.create(first_name: 'Team', last_name: 'Login', email: 'proptracer@gmail.com', password: 'password')

5.times do
	customer = Customer.create(name: "#{first_names.sample} #{last_names.sample}", email: emails.sample,
		phone_number: phone_numbers.sample, user_id: users.sample[:id] )
	Estimate.create(location: addresses.sample,
		distance: distances.sample,
		final_price: final_prices.sample,
		fence_material: fence_materials.sample,
		fence_height: fence_heights.sample, gate_count: 1,
		customer_id: customer.id, 
		status: statuses.sample)
end

fence_materials.each do |fence|
	material = Material.create(name: fence)
	fence_heights.each do |height|
		fence_height = Height.create(name: height, price_per_foot: prices_per_foot.sample, material_id: material.id)
	end
	gate_styles.each do |style|
		gate = GateType.create(gate_price: gate_prices.sample, width: widths.sample, style: style, material_id: material.id)
	end
end
