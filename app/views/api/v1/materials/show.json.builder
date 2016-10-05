json.material @material do |material|
  json.id material.id
  json.material material.name
  json.heights material.heights do |height|
    json.name height.name
    json.pricePerFoot height.price_per_foot
    json.id height.id
    json.materialId height.material_id
  end
  json.gateTypes material.gate_types do |gate|
    json.price gate.gate_price
    json.width gate.width
    json.style gate.style
    json.id gate.id
    json.materialId gate.material_id
  end
end
 