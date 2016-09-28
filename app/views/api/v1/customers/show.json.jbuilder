json.customer do
	json.id @customer.id
	json.name @customer.name
	json.email @customer.email

	json.estimates @customer.estimates do |estimate|
		json.id estimate.id
		json.location estimate.location
		json.distance estimate.distance
		json.finalPrice estimate.final_price
		json.fenceMaterial estimate.fence_material
		json.fenceHeight estimate.fence_height
		json.gateCount estimate.gate_count
		json.dateSubmitted estimate.created_at
		json.status estimate.status

	end
end



