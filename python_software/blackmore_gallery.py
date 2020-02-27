import pyautogui, time, pyperclip, os

def pluFun():
	global plu
	dummy = input("Please copy plu and then enter something")
	plu = pyperclip.paste()

def descriptionFun():
	global description
	dummy = input("Please copy description and then enter something")
	description = pyperclip.paste()	

def createDataFun():
	global current_plu_data, plu, current_description_data, description, plu_link_concat
	current_description_data1=""
	for x in range(len(plu)):	
		if plu[x]=="\n":
			temp_plu=""
			for y in range(len(plu)):
				if y<=x:
					continue
				else:
					temp_plu=temp_plu+plu[y]
			plu=temp_plu	
			break
		current_plu_data = current_plu_data + plu[x]

	for x in range(len(description)):	
		if description[x]=="\n":
			temp_description=""
			for y in range(len(description)):
				if y<=x:
					continue
				else:
					temp_description=temp_description+description[y]
			description=temp_description	
			break
		current_description_data =current_description_data + description[x]		

	for x in range(len(current_description_data)):
		tempx=-(x+1)
		print(tempx)
		if current_description_data[tempx]=="/":
			for y in range(len(current_description_data)):
				if y<(len(current_description_data)-x):
					continue
				else:
					current_description_data1=current_description_data1+current_description_data[y]
			break			
		
	plu_link_concat = plu_link_concat+ 'wget  -P '+ current_plu_data +'_galleryimages "'+current_description_data+'"'+"""
mv """+current_plu_data+'_galleryimages/'+current_description_data1+' '+current_plu_data+'_galleryimages/'+current_plu_data+""".01.prod.jpg
"""



plu=""
current_plu_data = ""
description = ""
current_description_data = ""
plu_link_concat = ""

pluFun()
descriptionFun()
for x in range(70):
	createDataFun()
	current_plu_data = ""
	current_description_data = ""

pyperclip.copy(plu_link_concat)	