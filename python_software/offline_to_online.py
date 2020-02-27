import time, pyperclip, pyautogui, os, tkinter.messagebox, getpass
from datetime import date
pyautogui.FAILSAFE = False

def pluData():
	global plu_data, plu_data_count, general_check_flag, username
	while True:
		try:
			plu_locationx, plu_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/plu.png")
			print("plu found")
			if not(general_check_flag):
				generalCheck()
			general_check_flag=False
			pyautogui.doubleClick(plu_locationx+80, plu_locationy)
			pyautogui.hotkey('ctrl', 'a')
			pyperclip.copy(plu_data[plu_data_count])
			time.sleep(0.5)
			pyautogui.hotkey('ctrl', 'v')
			plu_data_count=plu_data_count+1
			break
		except:
			general_check_flag=False
			generalCheck()
			print("Waiting for response from pluData")	

def generalCheck():	
	global general_final_location, save_alert_flag, general_check_flag, username	
	FixsaveAlertForOnline()
	while True:	
		pyautogui.doubleClick(general_final_location)
		time.sleep(0.5)
		try:
			general1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/general1.png")
			print("general1 found")
			general_final_location=general1_location
			general_check_flag=True
			break
		except:	
			save_alert_flag=False
			saveAlert()
			if not(save_alert_flag):
				unSaveAlert()
			save_alert_flag=False	
			print("Waiting for response from general1")			

def FixsaveAlertForOnline():
	global save_alert_flag, username
	try:	
		save_info2_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info2.png")
		print("save_info2 found")
		try:
			save_info2_yes_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info2_yes.png")
			print("save_info2_yes found")
			pyautogui.click(save_info2_yes_location)
			save_alert_flag=True
		except:	
			print("Waiting for response from save_info2_yes button")
	except:
		print("Waiting for response from save_info2 button")


def saveAlert():
	global save_alert_flag, username, issue_count
	try:
		no_box_shot_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/no_box_shot.png")
		print("no_box_shot found")
		try:
			un_save_info_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/un_save_info_ok.png")
			print("no_box_shot_ok found")
			pyautogui.click(un_save_info_ok_location)
			file_log.write("Box Shot Does not exist for plu: "+plu_data[plu_data_count-1]+"\n")
			issue_count+=1
		except:	
			print("Waiting for response from no_box_shot_ok button")
	except:
		try:
			no_box_shot1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/no_box_shot1.png")
			print("no_box_shot1 found")
			try:
				un_save_info_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/un_save_info_ok.png")
				print("no_box_shot1_ok found")
				pyautogui.click(un_save_info_ok_location)
				file_log.write("Box Shot Does not exist for plu: "+plu_data[plu_data_count-1]+"\n")
				issue_count+=1
			except:	
				print("Waiting for response from no_box_shot_ok button")
		except:
			try:
				save_info_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info.png")
				print("save_info found")
				try:
					save_info_yes_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info_yes.png")
					print("save_info_yes found")
					pyautogui.click(save_info_yes_location)
					save_alert_flag=True
				except:	
					print("Waiting for response from (save_info_yes button")
			except:
				try:	
					save_info1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info1.png")
					print("save_info1 found")
					try:
						save_info1_yes_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info1_yes.png")
						print("save_info1_yes found")
						pyautogui.click(save_info1_yes_location)
						save_alert_flag=True
					except:	
						print("Waiting for response from save_info1_yes button")
				except:
					try:	
						save_info2_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info2.png")
						print("save_info2 found")
						try:
							save_info2_yes_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info2_yes.png")
							print("save_info2_yes found")
							pyautogui.click(save_info2_yes_location)
							save_alert_flag=True
						except:	
							print("Waiting for response from save_info2_yes button")
					except:
						print("Waiting for response from save_info2 button")		

def unSaveAlert():
	global plu_data_count, edit_btn_alert_flag, username, issue_count
	try:
		un_save_info_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/un_save_info.png")
		print("un_save_info found")
		try:
			un_save_info_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/un_save_info_ok.png")
			print("un_save_info_ok found")
			pyautogui.click(un_save_info_ok_location)
			saveFun()
			file_log.write("Error while saving plu: "+plu_data[plu_data_count-1]+"\n")
			issue_count+=1
		except:	
			print("Waiting for response from un_save_info_ok button")
	except:				
		print("Waiting for response from un_save_info button")						


def saveFun():
	global username
	while True:
		try:
			save_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save.png")
			print("save found")
			pyautogui.click(save_location)
			break
		except:	
			try:
				save1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save1.png")
				print("save1 found")
				pyautogui.click(save1_location)
				break
			except:	
				print("Waiting for response from save")		

def generalButton():
	global general_final_location, username
	while True:
		try:
			general_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/general.png")
			print("general found")
			# pyautogui.click(general_location)
			general_final_location=general_location
			break
		except:	
			try:
				general1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/general1.png")
				print("general1 found")
				# pyautogui.click(general1_location)
				general_final_location=general1_location
				break
			except:	
				try:
					general2_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/general2.png")
					print("general2 found")
					# pyautogui.click(general2_location)
					general_final_location=general2_location
					break
				except:	
					print("Waiting for response from general2")					

def attributesFun():
	global username, attributes_final_location
	while True:
		try:
			attributes_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/attributes.png")
			print("attributes found")
			attributes_final_location=attributes_location
			pyautogui.click(attributes_location)
			break
		except:	
			try:
				attributes1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/attributes1.png")
				print("attributes1 found")
				attributes_final_location=attributes_location
				pyautogui.click(attributes1_location)
				break
			except:	
				print("Waiting for response from attributes1")						


def attributesFunOnline():
	global username, edit_btn_alert_flag, attributes_final_location
	while True:		
		pyautogui.click(attributes_final_location)
		try:
			online_locationx, online_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/online.png")
			print("online found")
			pyautogui.click(online_locationx-25, online_locationy)
			break
		except:	
			print("Waiting for response from attributesFunOnline")	
			if edit_btn_alert_flag:	
				editBtnAlert()
			


def editBtn():		
	global username		
	while True:
		try:
			edit_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/edit.png")
			print("edit found")
			pyautogui.click(edit_location)
			break
		except:	
			try:
				edit1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/edit1.png")
				print("edit1 found")
				pyautogui.click(edit1_location)
				break
			except:	
				print("Waiting for response from edit1Btn")


def editBtnAlert():	
	global edit_btn_alert_flag, username, issue_count
	while True:
		try:
			save_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save.png")
			print("save found")
			edit_btn_alert_flag=False
			break
		except:	
			try:
				save1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save1.png")
				print("save1 found")
				edit_btn_alert_flag=False
				break
			except:	
				try:
					edit_not_save_info_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/edit_not_save_info.png")
					print("edit_not_save_info found")
					try:
						edit_yes_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/edit_yes.png")
						print("edit_yes found")
						pyautogui.click(edit_yes_location)
						edit_btn_alert_flag=False
						break
					except:	
						print("Waiting for response from edit_yes at editBtnAlert")	
				except:
					try:
						un_save_info_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/un_save_info.png")
						print("un_save_info found at editBtnAlert")
						try:
							un_save_info_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/un_save_info_ok.png")
							print("un_save_info_ok found at editBtnAlert")
							pyautogui.click(un_save_info_ok_location)
							editBtn()
							break
						except:	
							print("Waiting for response from un_save_info_ok at editBtnAlert")
					except:
						try:
							error_plu_validating_alert_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/error_plu_validating_alert.png")
							print("error_plu_validating_alert found at editBtnAlert")
							try:
								un_save_info_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/un_save_info_ok.png")
								print("un_save_info_ok found at editBtnAlert")
								pyautogui.click(un_save_info_ok_location)
								editBtn()
								break
							except:	
								print("Waiting for response from un_save_info_ok at editBtnAlert")
						except:
							print("error_plu_validating_alert not found at editBtnAlert")								


	
username = getpass.getuser()
file_log = open('offline_to_online_log', 'a+')
file_log.write("\n\n"+str(date.today())+"\n")
issue_count=0
general_check_flag=False
save_alert_flag=False
edit_btn_alert_flag=True


plu_data_start=input("Please copy Plu and then press enter")
plu_data_start= pyperclip.paste()
plu_data = [""]*10000
plu_data_count=0
plu_data[plu_data_count]=""

for x in range(len(plu_data_start)):
	if(plu_data_start[x]=="\n"):
		plu_data_count=plu_data_count+1
		print(str(plu_data_count-1)+"    "+plu_data[plu_data_count-1])
	else:	
		plu_data[plu_data_count]=plu_data[plu_data_count]+plu_data_start[x]

print(str(plu_data_count)+"    "+plu_data[plu_data_count])
plu_data_count=0	

generalButton()	

while plu_data[plu_data_count]!="":
	pluData()
	editBtn()
	attributesFun()
	attributesFunOnline()
	saveFun()
	general_check_flag=False
	save_alert_flag=False
	edit_btn_alert_flag=True
generalCheck()

tkinter.messagebox.showinfo(title="Plu Online", message="Issues Detected "+str(issue_count)+"\nPlease check 'offline_to_online_log' file")