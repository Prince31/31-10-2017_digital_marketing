import time, pyperclip

def plu():
	global plu_data, plu_data_count, current_plu, file_upper_read, file_lower_read
	current_plu=plu_data[plu_data_count]
	pyperclip.copy(current_plu)
	print(current_plu+" paste it")
	time.sleep(1.0)
	checkCurrentPlu()
	
	fileUpperRead()
	print(file_upper_read +" upper_paste")
	checkFileUpperRead()
	fileLowerRead()
	print(file_lower_read+" lower_paste")
	checkFileLowerRead()
	plu_data_count=plu_data_count+1
	plu()

def checkCurrentPlu():
	global current_plu
	while True:
		if current_plu==pyperclip.paste():
			continue
		else:
			break		

def fileLowerRead():
	global plu_data, plu_data_count, current_plu, file_lower_read
	file_ = open("/home/princesethi/Desktop/webami/Ashu/"+current_plu+"/"+current_plu+"_lower.html", "r")
	file_lower_read=file_.read()
	pyperclip.copy(file_lower_read)


def checkFileLowerRead():
	global file_lower_read
	while True:
		if file_lower_read==pyperclip.paste():
			continue
		else:
			break		


def fileUpperRead():
	global plu_data, plu_data_count, current_plu, file_upper_read
	file_ = open("/home/princesethi/Desktop/webami/Ashu/"+current_plu+"/"+current_plu+"_upper.html", "r")
	file_upper_read=file_.read()
	pyperclip.copy(file_upper_read)


def checkFileUpperRead():
	global file_upper_read
	while True:
		if file_upper_read==pyperclip.paste():
			continue
		else:
			break	




file_upper_read=""
current_plu=""
plu_data_start= pyperclip.paste()
plu_data = [""]*10000
plu_data_count=0
plu_data[plu_data_count]=""
for x in range(len(plu_data_start)):
	if(plu_data_start[x]=="\n"):
		plu_data_count=plu_data_count+1
		print("plu_data_count"+str(plu_data_count))
	else:	
		print("plu_data_start[x]"+plu_data_start[x])
		plu_data[plu_data_count]=plu_data[plu_data_count]+plu_data_start[x]
		

plu_data_count=0	


plu()

print("End")