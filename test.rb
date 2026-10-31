def minimal_number_of_packages(items, available_large_packages, available_small_packages)
  total_packages = 0
  large_packages = items / 5
  missing_items = items % 5
  
  # total_packages = large_packages += 1 if missing_items <= 5
  total_packages = large_packages += missing_items if missing_items >= 1
  
  return -1 if ((available_large_packages * 5) + available_small_packages) < items
  total_packages
end

puts minimal_number_of_packages(16, 2, 5)
































































# FILES OWNER
# def group_by_owners(files)
#   new_hash = {}
#   temp_values = []

#   files.values.uniq.each { |f| new_hash[f] = [] }
#   files.each do |k, v|
#     new_hash[v].push(k)
#   end

#   new_hash
# end


# files = {
#   'Input.txt' => 'Randy',
#   'Code.py' => 'Stan',
#   'Output.txt' => 'Randy'
# }

# puts group_by_owners(files)

# MERGE NAMES
# def unique_names(names1, names2)
#   return (names1 + names2).uniq
# end

# names1 = ["Ava", "Emma", "Olivia"]
# names2 = ["Olivia", "Sophia", "Emma"]
# puts(unique_names(names1, names2))

# STUDENT RECORDS
# def filter(students, *filters)
#   students.select do |s|
#     filters.all? { |filter| filter.call(s) }
#   end
# end

# students = [
#   { name: 'Thomas Edison', gpa: 3.45 },
#   { name: 'Grace Hopper', gpa: 3.99 },
#   { name: 'Leonardo DaVinci', gpa: 2.78 }
# ]

# honor_roll = ->(record) { record[:gpa] > 3.0 }

# honor_roll_members = filter(students, honor_roll)
# puts honor_roll_members # it should print
# # {:name=>"Thomas Edison", :gpa=>3.45} 
# # {:name=>"Grace Hopper", :gpa=>3.99}