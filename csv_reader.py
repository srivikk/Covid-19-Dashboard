import pymongo

import csv

myclient = pymongo.MongoClient("mongodb://localhost:27017/")

mydb = myclient["source_scrapped_data"]
mycol = mydb["covid_data"]

# myquery = { "Country,Other": "India" }

# myquery = { "Country,Other"}

# mydoc = mycol.find(myquery)

# for x in mydoc:
#   print(x)
# z = []
# for x in mycol.find({},{"Country,Other":1}):
#     print(x)
#     # z.append(x)
#     break

# y = []

dataset = mycol.find({},{"Country,Other":1})

# with open("iso3.csv", "r",encoding='Latin1') as csv_file:
#     csv_reader = csv.reader(csv_file, delimiter=',')
#csv_file = csv.reader(open('iso3.csv', "r",encoding='Latin1'), delimiter=",")

for data in dataset:
    csv_file = csv.reader(open('iso3.csv', "r",encoding='Latin1'), delimiter=",")
    for lines in csv_file:
        print(lines)
        print(data['Country,Other'])
        if lines[0].lower().strip() == data['Country,Other'].lower().strip():
            print("match")
            break
            # if x['Country,Other'] == lines[0]:
            #     break
            #     # mycol.update_many(x['Name'])
            #     # for i in x:
            #         # mycol.update_many(x['Name'])
            # else:
            #     print(lines)

            # print(data['Country,Other'])
        # y.append(lines)
        # print(lines[0])


# print(v)
# for i in v:
#     print(i)
#     break

# print(id(v))

# print()

# for i in range(2):
#     print(id(mycol.find({},{"Country,Other":1})))
#     select c from tables
#     print(id(v))
#     print("================")

# v = select c from tables
