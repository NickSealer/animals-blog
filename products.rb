# Calcular el precio total de todos los productos, incluyendo impuestos.
# Mostrar el precio total redondeado a dos decimales.
require 'json'
products = JSON.parse(File.read('./products.json'))
total_price = products.map{ |p| p['price'] + p['tax_rate'] }.sum

puts sprintf('%.2f',total_price)

