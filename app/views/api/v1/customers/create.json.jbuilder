json.customer 
	json.name @customer.name
	json.email @customer.email
	json.phoneNumber @customer.phone_number
		json.estimate
			json.location @estimate.location
			json.distance @estimate.distance
			json.finalPrice @estimate.final_price
			json.fenceMaterial @estimate.fence_material
			json.fenceHeight @estimate.fence_height
			json.gateCount @estimate.gate_count
			json.customerID @estimate.customer_id