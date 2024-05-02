headings = []

data_input = python reading a CSV

output_data = []

for all items in first line:
    headings.add()

#end up with headings = [name, age, face, hair]

for i in len(headings):
    output_data.add({headings[i]:restofdata[i]})

#end up with output_data = [{heading1:"1", heading2: "Alex"}, {heading1:"2", heading2:"Xingyi"}]

compare and on match add using output_data[i].update({data from second table})

if no match then output_data.add(data from table 2)

#end up with: [{t1h1:"1", t1h2: "Alex"}, {t1h1:"2", t1h2 "Xingyi", t2h2:"Yes"}, {t2h1: "57", t2h2: "No"}]

Write back to CSV:
all_headings = []
for all items in output_data:
    all_headings.add(item.keys())

#all_headings = [t1h1, t1h2, t2h1, t2h2]

final data = []
for i in len(output_data):
    list(output_data[i].values()) 
    
