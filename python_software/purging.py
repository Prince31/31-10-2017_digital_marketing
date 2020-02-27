import pyperclip, pyautogui, time
def purging():
	global plu_data, plu_data_count
	pyperclip.copy(plu_data[plu_data_count])
	time.sleep(0.5)
	pyautogui.hotkey('ctrl', 'v')
	pyautogui.press('enter')
	plu_data_count=plu_data_count+1
		


plu_data_start=input("Please copy Plu and then press enter")
plu_data_start= pyperclip.paste()
plu_data = [""]*10000
plu_data_count=0
plu_data[plu_data_count]="*"


for x in range(len(plu_data_start)):
	if(plu_data_start[x]=="\n"):
		plu_data[plu_data_count]+='*'
		plu_data_count=plu_data_count+1
		plu_data[plu_data_count]+='*'
		print(str(plu_data_count-1)+"    "+plu_data[plu_data_count-1])
		# print("plu_data_count"+str(plu_data_count))
	else:	
		# print("plu_data_start[x]"+plu_data_start[x])
		plu_data[plu_data_count]=plu_data[plu_data_count]+plu_data_start[x]

plu_data[plu_data_count]+='*'
print(str(plu_data_count)+"    "+plu_data[plu_data_count])
plu_data_count=0	
while True:
	try:
		plu_locationx, plu_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/purging/file_names.png")	
		print("hi")
		pyautogui.click(plu_locationx, plu_locationy+50)
		break
	except:
		print("file_names not found")	
while plu_data[plu_data_count]!="":
	purging()