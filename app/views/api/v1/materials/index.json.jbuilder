
json.materials @materials do |material|
  json.material material.name
  json.heights material.heights do |height|
    json.name height.name
    json.pricePerFoot height.price_per_foot
    json.materialId height.material_id
  end
  json.gateTypes material.gate_types do |gate|
    json.price gate.gate_price
    json.width gate.width
    json.style gate.style
    json.materialId gate.material_id
  end
end
