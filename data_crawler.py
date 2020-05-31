from bs4 import BeautifulSoup
import requests
import csv
import json
import pymongo
from pymongo import MongoClient
import re

url = 'https://www.worldometers.info/coronavirus/'

response = requests.get(url)

content = BeautifulSoup(response.content,"html.parser")

covid_table_head = content.find("table",attrs={"id":"main_table_countries_today"})

covid_table_head_data = covid_table_head.thead.find_all("tr")

covid_table_row_data = covid_table_head.tbody.find_all("tr")

ttable = covid_table_head_data

datas = []
# for table in covid_table_head_data:
headings = []
for th in ttable[0].find_all("th"):
    headings.append(th.text.replace('\n',' ').strip())

for table1 in covid_table_row_data:
    t_row={}
    for tr,th in zip(table1.find_all("td"),headings):
        t_row[th] = tr.text.replace('\n','').strip()
    datas.append(t_row)
    for data in datas:
        for key, value in data.items():
            if key == "TotalRecovered":
                if value == "NA":
                    data[key] = "0"
                elif not value:
                    data[key] = "0"
                else:
                    data[key] = re.sub('[^A-Za-z0-9]+', '', value)
            elif key == "TotalDeaths":
                if not value:
                    data[key] = "0"
                else:
                    data[key] = re.sub('[^A-Za-z0-9]+', '', value)
            else:
                value = re.sub('[^A-Za-z0-9]+', '', value)
                data[key] = value
    # print(datas)
    # for data in datas:
    #     print(data)


#Original code        
for data in datas:
    csv_file = csv.reader(open('iso3.csv', "r",encoding='Latin1'), delimiter=",")
    for line in csv_file:
        if line[0].lower().strip() == data['Country,Other'].lower().strip():
            data['ISO3'] = line[1]


#use of seek:: moves the pointer to the start of file again
# csv_file = csv.reader(open('iso3.csv', "r",encoding='Latin1'), delimiter=",")
# for data in datas:  
#     for line in csv_file:
#         if line[0].lower().strip() == data['Country,Other'].lower().strip():
#             data['ISO3'] = line[1]
#     csv_file.seek(0)

# csv_file = open('iso3.csv', "r",encoding='Latin1')
# reader = csv.reader(csv_file,delimiter=",")
# for data in datas:  
#     for line in csv_file:
#         if line[0].lower().strip() == data['Country,Other'].lower().strip():
#             data['ISO3'] = line[1]
#     csv_file.seek(0)


conn = MongoClient('localhost',27017)

db = conn['source_scrapped_data']

collection = db['covid_data']

for data in datas:
    # print(data)
    collection.insert_one(data)
    # print(data)

# posts.insert_many(datas)