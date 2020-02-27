import sys
print sys.path
import requests,os
res=requests.get('https://docs.google.com/spreadsheets/d/1LilaGvYkkaDPKehzbwJ-SpRGaU1xQV4O791uLD9sDfc/edit?ts=5ca1870b#gid=1835847794')
res.status_code
try:
	res.raise_for_status()
except:
	print("Bad res")	
playFile = open('GoogleSheet.txt', 'wb')
for chunk in res.iter_content(100000):
	playFile.write(chunk)
playFile.close()