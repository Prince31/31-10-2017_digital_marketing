import pyautogui, time, pyperclip, os

def pluFun():
	global plu
	dummy = input("Please copy plu and then enter something")
	plu = pyperclip.paste()

def descriptionFun():
	global description
	dummy = input("Please copy description and then enter something")
	description = pyperclip.paste()

def weightFun():
	global weight
	dummy = input("Please copy weight and then enter something")
	weight = pyperclip.paste()

def createDataFun():
	global current_plu_data, plu, current_description_data, description, current_weight_data, weight
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

	for x in range(len(weight)):	
		if weight[x]=="\n":
			temp_weight=""
			for y in range(len(weight)):
				if y<=x:
					continue
				else:
					temp_weight=temp_weight+weight[y]
			weight=temp_weight
			break
		current_weight_data =current_weight_data + weight[x]

def createFolderFileFun():
	global current_plu_data
	directory = "/home/princesethi/Desktop/webami/"+current_plu_data
	file_upper = "/home/princesethi/Desktop/webami/"+current_plu_data+"/"+current_plu_data+"_upper.html"
	file_lower = "/home/princesethi/Desktop/webami/"+current_plu_data+"/"+current_plu_data+"_lower.html"
	print(directory)
	if not os.path.exists(directory):
		os.makedirs(directory)
		os.mknod(file_upper)
		file_write = open(file_upper, 'w')
		file_write.write(current_description_data)
		file_write.close()

		os.mknod(file_lower)
		file_write = open(file_lower, 'w')
		file_write.write("""<link rel="stylesheet" href="https://images.frys.com/art/css/product_page.css" />
			<div id="#specifications" class="toplevel">
	<div class="header">
		Specifications
	</div>
	<table class="specifications">
		<tbody>
			<tr>
				<td>Weight:</td>
				<td>"""+current_weight_data+""" lbs</td>
			</tr>
		</tbody>
	</table>
</div>""")
		file_write.close()


plu=""
current_plu_data = ""
description = ""
current_description_data = ""
weight = ""
current_weight_data=""


pluFun()	
descriptionFun()
weightFun()
for x in range(70):
	createDataFun()
	createFolderFileFun()
	current_plu_data = ""
	current_description_data = ""
	current_weight_data=""
