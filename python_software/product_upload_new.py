import time, pyperclip, pyautogui, os, tkinter.messagebox, getpass, subprocess
from datetime import date
pyautogui.FAILSAFE = False

def pluData():
	global plu_data, plu_data_count,  plu_data_iteration_count, general_check_flag, username
	while True:
		try:
			# time.sleep(1.0)
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
			plu_data_iteration_count=0
			break
		except:
			plu_data_iteration_count=plu_data_iteration_count+1
			# if plu_data_iteration_count>5:
			general_check_flag=False
			generalCheck()
			print("Waiting for response from pluData")	

def titleEditableCheck():
	global title_editable_record,title_data, title_data_count, general_final_location, title_editable_check_count, username
	while True:
		pyautogui.click(general_final_location)
		try:
			# time.sleep(1.0)
			title_editable_product_name_locationx,title_editable_product_name_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/title_editable_product_name.png")
			print("title_editable_product_name found")
			# title_editable_check_count=0
			break
		except:	
			try:
				# time.sleep(1.0)
				product_name_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/product_name.png")
				print("product_name found")
				# title_editable_check_count=0
				break
			except:	
				# title_editable_check_count=title_editable_check_count+1
				# if title_editable_check_count>5:
				# 	saveAlert()
				# 	unSaveAlert()
				print("Waiting for response from product_name / title_editable_product_name")			

def editBtn():		
	global username		
	while True:
		try:
			# time.sleep(1.0)
			edit_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/edit.png")
			print("edit found")
			pyautogui.click(edit_location)
			break
		except:	
			try:
				# time.sleep(1.0)
				edit1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/edit1.png")
				print("edit1 found")
				pyautogui.click(edit1_location)
				break
			except:	
				print("Waiting for response from edit1Btn")

def editBtnAlert():	
	global edit_btn_alert_flag, un_save_alert_flag, username, issue_count
	while True:
		try:
			# time.sleep(1.0)
			save_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save.png")
			print("save found")
			edit_btn_alert_flag=False
			break
		except:	
			try:
				# time.sleep(1.0)
				save1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save1.png")
				print("save1 found")
				edit_btn_alert_flag=False
				break
			except:	
				try:
					# time.sleep(1.0)
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
						# time.sleep(1.0)
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
							# time.sleep(1.0)
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
			# except:	
			# 	print("Waiting for response from editBtnAlert")

def categoryAssignmentButton():
	global category_assignment_final_location, edit_btn_alert_flag, username
	# while True:
	# 	try:
	# 		# time.sleep(1.0)
	# 		please_wait_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/please_wait.png")
	# 		print("please_wait found")
	# 	except:
	# 		break
	while True:
		try:
			# time.sleep(1.0)
			category_assignment_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/category_assignment.png")
			print("category_assignment found")
			pyautogui.click(category_assignment_location)
			category_assignment_final_location=category_assignment_location
			break
		except:	
			try:
				# time.sleep(1.0)
				category_assignment1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/category_assignment1.png")
				print("category_assignment1 found")
				pyautogui.click(category_assignment1_location)
				category_assignment_final_location=category_assignment1_location
				break
			except:	
				try:
					# time.sleep(1.0)
					category_assignment2_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/category_assignment2.png")
					print("category_assignment2 found")
					pyautogui.click(category_assignment2_location)
					category_assignment_final_location=category_assignment2_location
					break
				except:	
					print("Waiting for response from categoryAssignmentButton")	
					if edit_btn_alert_flag:	
						editBtnAlert()

def categoryTextfield():
	global category_assignment_final_location, edit_btn_alert_flag, category_textfield_count, movie_music_no, username
	
	if movie_music_no=="2":
		while True:
			pyautogui.click(category_assignment_final_location)	
			try:
				# time.sleep(1.0)
				category_textfield_music_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/category_textfield_music.png")
				print("category_textfield_music found")
				break
			except:	
				try:
					category_textfield_empty_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/category_textfield_empty.png")
					try:
						# time.sleep(1.0)
						music_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/music.png")
						print("music found")
						pyautogui.doubleClick(music_location)
						break
					except:	
						try:
							# time.sleep(1.0)
							music1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/music1.png")
							print("music1 found")
							pyautogui.doubleClick(music1_location)
							break
						except:
							category_textfield_count= category_textfield_count+1
							pyautogui.click(category_assignment_final_location)
							print("Waiting for response from music1")
							if edit_btn_alert_flag and category_textfield_count>2:	
								editBtnAlert()	
								
				except:
					category_textfield_count= category_textfield_count+1
					if edit_btn_alert_flag and category_textfield_count>2:	
						editBtnAlert()

					print("Incorrect Category")			



	elif movie_music_no=="1":
		while True:
			pyautogui.click(category_assignment_final_location)	
			try:
				# time.sleep(1.0)
				category_textfield_movies_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/category_textfield_movies.png")
				print("category_textfield_movies found")
				break
			except:	
				try:
					category_textfield_empty_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/category_textfield_empty.png")
					try:
						# time.sleep(1.0)
						movies_tv_shows_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/movies_tv_shows.png")
						print("movies_tv_shows found")
						pyautogui.doubleClick(movies_tv_shows_location)
						break
					except:	
						try:
							# time.sleep(1.0)
							movies_tv_shows1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/movies_tv_shows1.png")
							print("movies_tv_shows1 found")
							pyautogui.doubleClick(movies_tv_shows1_location)
							break
						except:
							category_textfield_count= category_textfield_count+1
							pyautogui.click(category_assignment_final_location)
							print("Waiting for response from movies_tv_shows1")
							if edit_btn_alert_flag and category_textfield_count>2:	
								editBtnAlert()			
				except:
					category_textfield_count= category_textfield_count+1
					if edit_btn_alert_flag and category_textfield_count>2:	
						editBtnAlert()	
					print("Incorrect Category")	
	else:
		print("Invalid Input in categoryTextfield")						





def longDescription():
	global file_upper_read, file_upper_read_flag, add_plu_field_alert_flag, long_description_final_locationx, long_description_final_locationy, username
	while True:
		try:
			# time.sleep(1.0)
			long_description_locationx, long_description_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/long_description.png")
			long_description_final_locationx=long_description_locationx
			long_description_final_locationy=long_description_locationy
			print("long_description found")
			pyautogui.click(long_description_locationx, long_description_locationy)
			longDescriptionData()
			if file_upper_read_flag:
				time.sleep(0.1)
				pyautogui.click(long_description_locationx, long_description_locationy+200)
				pyautogui.hotkey('ctrl', 'a')
				pyperclip.copy(file_upper_read)
				time.sleep(0.5)
				pyautogui.hotkey('ctrl', 'v')
			file_upper_read_flag=True
			break
		except:	
			try:
				# time.sleep(1.0)
				long_description1_locationx, long_description1_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/long_description1.png")
				long_description_final_locationx=long_description1_locationx
				long_description_final_locationy=long_description1_locationy
				print("long_description1 found")
				pyautogui.click(long_description1_locationx, long_description1_locationy)
				longDescriptionData()
				if file_upper_read_flag:
					time.sleep(0.1)
					pyautogui.click(long_description1_locationx, long_description1_locationy+200)
					pyautogui.hotkey('ctrl', 'a')
					pyperclip.copy(file_upper_read)
					time.sleep(0.5)
					pyautogui.hotkey('ctrl', 'v')
				file_upper_read_flag=True	
				break
			except:	
				print("Waiting for response from long_description1")	
				if add_plu_field_alert_flag:
					addPluFieldAlert()


def longDescriptionData():
	global plu_data, plu_data_count, add_plu_field_alert_flag, file_upper_read, file_upper_read_flag, long_description_final_locationx, long_description_final_locationy, long_description_data_count, username, issue_count
	while True:
		try:
			# time.sleep(1.0)
			long_description1_locationx, long_description1_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/long_description1.png")
			try:
				file_ = open("/home/"+username+"/Desktop/webami/uploads/"+plu_data[plu_data_count-1]+"/"+plu_data[plu_data_count-1]+"_upper.html", "r")
				file_upper_read=file_.read()	
				if (len(file_upper_read)>2000):
					print("Upper Description exceeds word limit For Plu:" +plu_data[plu_data_count-1])
					file_log.write("Upper Description exceeds word limit For Plu:" +plu_data[plu_data_count-1]+"\n")
					issue_count+=1
				else:	
					print("Upper Description Found For Plu:" +plu_data[plu_data_count-1])
				break
			except:
				file_upper_read_flag=False
				file_log.write("Upper Description Not Found For Plu:" +plu_data[plu_data_count-1]+"\n")
				issue_count+=1
				if(plu_data_count==1):
					tkinter.messagebox.showinfo(title="Warning", message="Upper Description Not Found For Plu: "+plu_data[plu_data_count-1])
				print("Upper Description Not Found For Plu:" +plu_data[plu_data_count-1])
				break
		except:   
			long_description_data_count=long_description_data_count+1
			print("Waiting for response from longDescriptionData / long_description1")	
			if add_plu_field_alert_flag and long_description_data_count>2:
				addPluFieldAlert()	
			pyautogui.click(long_description_final_locationx, long_description_final_locationy)
			# longDescriptionData()

def descriptionHype():
	global file_lower_read, file_lower_read_flag, description_hype_final_locationx, description_hype_final_locationy, username
	while True:
		try:
			# time.sleep(1.0)
			description_hype_locationx, description_hype_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/description_hype.png")
			description_hype_final_locationx=description_hype_locationx
			description_hype_final_locationy=description_hype_locationy
			print("description_hype found")
			pyautogui.click(description_hype_locationx, description_hype_locationy)
			descriptionHypeData()
			if file_lower_read_flag:
				time.sleep(0.1)
				pyautogui.click(description_hype_locationx, description_hype_locationy+200)
				pyautogui.hotkey('ctrl', 'a')
				pyperclip.copy(file_lower_read)
				time.sleep(0.5)
				pyautogui.hotkey('ctrl', 'v')
			file_lower_read_flag=True
			break
		except:	
			try:
				# time.sleep(1.0)
				description_hype1_locationx, description_hype1_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/description_hype1.png")
				description_hype_final_locationx=description_hype1_locationx
				description_hype_final_locationy=description_hype1_locationy
				print("description_hype1 found")
				pyautogui.click(description_hype1_locationx, description_hype1_locationy)
				descriptionHypeData()
				if file_lower_read_flag:
					time.sleep(0.1)
					pyautogui.click(description_hype1_locationx, description_hype1_locationy+200)
					pyautogui.hotkey('ctrl', 'a')
					pyperclip.copy(file_lower_read)
					time.sleep(0.5)
					pyautogui.hotkey('ctrl', 'v')
				file_lower_read_flag=True
				break
			except:	
				print("Waiting for response from description_hype1")	

def descriptionHypeData():
	global plu_data, plu_data_count, file_lower_read, file_lower_read_flag, description_hype_final_locationx, description_hype_final_locationy, username, issue_count
	try:
		# time.sleep(1.0)
		description_hype1_locationx, description_hype1_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/description_hype1.png")
		try:
			file_ = open("/home/"+username+"/Desktop/webami/uploads/"+plu_data[plu_data_count-1]+"/"+plu_data[plu_data_count-1]+"_lower.html", "r")
			file_lower_read=file_.read()	
			print("Lower Description Found For Plu:" +plu_data[plu_data_count-1])	


			if not(os.path.exists("/home/"+username+"/Desktop/webami/old_uploads/"+str(date.today())+"/"+plu_data[plu_data_count-1])):
				os.rename("/home/"+username+"/Desktop/webami/uploads/"+plu_data[plu_data_count-1], "/home/"+username+"/Desktop/webami/old_uploads/"+str(date.today())+"/"+plu_data[plu_data_count-1])	
		except:
			file_lower_read_flag=False
			print("Lower Description Not Found For Plu:" +plu_data[plu_data_count-1])
			file_log.write("Lower Description Not Found For Plu:" +plu_data[plu_data_count-1]+"\n")
			issue_count+=1
	except:
		print("waiting for response from descriptionHypeData/descriptionHype")
		pyautogui.click(description_hype_final_locationx, description_hype_final_locationy)
		descriptionHypeData()		


def attributesFun():
	global username
	while True:
		try:
			# time.sleep(1.0)
			attributes_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/attributes.png")
			print("attributes found")
			pyautogui.click(attributes_location)
			break
		except:	
			try:
				# time.sleep(1.0)
				attributes1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/attributes1.png")
				print("attributes1 found")
				pyautogui.click(attributes1_location)
				break
			except:	
				print("Waiting for response from attributes1")		

def attributesFunOffline():
	global username
	while True:
		try:
			# time.sleep(1.0)
			offline_locationx, offline_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/offline.png")
			print("offline found")
			pyautogui.click(offline_locationx-25, offline_locationy)
			break
		except:	
			print("Waiting for response from attributesFunOffline")	

def attributesFunOnline():
	global username
	while True:
		try:
			# time.sleep(1.0)
			save_done_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_done.png")
			print("save_done found")
			break
		except:	
			print("Waiting for response from save_done from online1")
	while True:		
		try:
			# time.sleep(1.0)
			online_locationx, online_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/online.png")
			print("online found")
			pyautogui.click(online_locationx-25, online_locationy)
			break
		except:	
			print("Waiting for response from online1")		

def saveFun():
	global username
	while True:
		try:
			# time.sleep(1.0)
			save_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save.png")
			print("save found")
			pyautogui.click(save_location)
			break
		except:	
			try:
				# time.sleep(1.0)
				save1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save1.png")
				print("save1 found")
				pyautogui.click(save1_location)
				break
			except:	
				print("Waiting for response from save")	

def saveCheck():
	global username
	try:
		# time.sleep(1.0)
		save_done_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_done.png")
		print("save_done found")
		# break
	except:	
		print("Waiting for response from saveCheck function")				

def saveAlert():
	global save_alert_flag, username
	try:
		# time.sleep(1.0)
		save_info_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info.png")
		print("save_info found")
		try:
			save_info_yes_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info_yes.png")
			print("save_info_yes found")
			pyautogui.click(save_info_yes_location)
			save_alert_flag=True
			# unSaveAlert()
			# break
		except:	
			print("Waiting for response from (save_info_yes button")
	except:
		try:	
			# time.sleep(1.0)
			save_info1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info1.png")
			print("save_info1 found")
			try:
				save_info1_yes_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info1_yes.png")
				print("save_info1_yes found")
				pyautogui.click(save_info1_yes_location)
				save_alert_flag=True
				# unSaveAlert()
				# break
			except:	
				print("Waiting for response from save_info1_yes button")
		except:
			try:	
				# time.sleep(1.0)
				save_info2_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info2.png")
				print("save_info2 found")
				try:
					save_info2_yes_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_info2_yes.png")
					print("save_info2_yes found")
					pyautogui.click(save_info2_yes_location)
					save_alert_flag=True
					# unSaveAlert()
					# break
				except:	
					print("Waiting for response from save_info2_yes button")
			except:		
				# unSaveAlert()
				print("Waiting for response from save_info2 button")

		# try:
		# # time.sleep(1.0)
		# 	save_box_shot_info_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_box_shot_info.png")
		# 	print("save_box_shot_info found")
		# 	try:
		# 		save_box_shot_info_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_box_shot_info_ok.png")
		# 		print("save_box_shot_info_ok found")
		# 		pyautogui.click(save_box_shot_info_ok_location)
		# 		break
		# 	except:
		# 		print("Waiting for response from save_box_shot_info_ok button")
		# except:	
		# 	print("Waiting for response from save_box_shot_info alert")




def unSaveAlert():
	global un_save_alert_flag, un_save_alert_count, plu_data_count, add_on_plu_data_count, add_plu_field_alert_flag, edit_btn_alert_flag, username, issue_count
	# while True:
	# 	try:
	# 		# time.sleep(1.0)
	# 		save_done_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/save_done.png")
	# 		print("save_done found")
	# 		break
	# 	except:		
			# un_save_alert_count=un_save_alert_count+1
			# if un_save_alert_count>5:
	try:
		# time.sleep(1.0)
		un_save_info_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/un_save_info.png")
		print("un_save_info found")
		try:
			un_save_info_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/un_save_info_ok.png")
			print("un_save_info_ok found")
			pyautogui.click(un_save_info_ok_location)
			saveFun()
			file_log.write("Error while saving plu: "+plu_data[plu_data_count-1]+"\n")
			issue_count+=1
			# plu_data_count=plu_data_count-1
			# add_on_plu_data_count=add_on_plu_data_count-1
			# # title_data_count=title_data_count-1
			
			# add_plu_field_alert_flag=True
			# edit_btn_alert_flag=True
			# break
		except:	
			print("Waiting for response from un_save_info_ok button")
	except:				
		print("Waiting for response from un_save_info button")		

def addOnProducts():
	global add_on_plu_data, add_on_plu_data_count, username, issue_count
	while True:
		if(add_on_plu_data[add_on_plu_data_count]=="-"):
			break
		elif(add_on_plu_data[add_on_plu_data_count]==""):
			file_log.write("Add On Plu Not Found For Plu:" +plu_data[plu_data_count-1]+"\n")
			issue_count+=1
			break	
		try:
			# time.sleep(1.0)
			add_on_products_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/add_on_products.png")
			print("add_on_products found")
			pyautogui.click(add_on_products_location)
			addOnPluDataAnalyse()
			break
		except:	
			try:
				# time.sleep(1.0)
				add_on_products1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/add_on_products1.png")
				print("add_on_products1 found")
				pyautogui.click(add_on_products1_location)
				addOnPluDataAnalyse()
				break
			except:	
				print("Waiting for response from add_on_products1")

def addPlu():
	global add_on_plu_data, add_on_plu_data_count, username,issue_count
	while True:
		if(add_on_plu_data[add_on_plu_data_count]=="-"):
			break
		elif(add_on_plu_data[add_on_plu_data_count]==""):
			file_log.write("Add On Plu Not Found For Plu:" +plu_data[plu_data_count-1]+"\n")
			issue_count+=1
			break		
		try:
			# time.sleep(1.0)
			add_plu_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/add_plu.png")
			print("add_plu found")
			pyautogui.click(add_plu_location)
			break
		except:	
			print("Waiting for response from add_plu")

def addPluField():
	global add_on_plu_data_count, add_on_plu_data, username, issue_count
	while True:
		if(add_on_plu_data[add_on_plu_data_count]=="-"):
			add_on_plu_data_count=add_on_plu_data_count+1
			break
		elif(add_on_plu_data[add_on_plu_data_count]==""):
			file_log.write("Add On Plu Not Found For Plu:" +plu_data[plu_data_count-1]+"\n")
			issue_count+=1
			break		
		try:
			# time.sleep(1.0)

			add_plu_field_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/add_plu_field.png")
			print("add_plu_field found")
			
			pyautogui.click(add_plu_field_location)
			pyperclip.copy(add_on_plu_data[add_on_plu_data_count])
			time.sleep(0.5)
			pyautogui.hotkey('ctrl', 'v')
			add_on_plu_data_count=add_on_plu_data_count+1
			pyautogui.press('enter')
			break
		except:	
			print("Waiting for response from add_plu_field")	

def addOnPluDataAnalyse():
	global add_on_plu_data_count, add_on_plu_data, temp1_add_on_plu_data, username
	temp1_add_on_plu_data=add_on_plu_data[add_on_plu_data_count]
	temp_add_on_plu_data=add_on_plu_data[add_on_plu_data_count]
	while True:
		temp_add_on_plu_data_index=temp_add_on_plu_data.find(",")
		# temp_add_on_plu_data_index=int(temp_add_on_plu_data_index)
		if(temp_add_on_plu_data_index!=-1):
			# print("check: , found")
			# print(temp_add_on_plu_data_index)
			# print(temp_add_on_plu_data[0:temp_add_on_plu_data_index])
			add_on_plu_data[add_on_plu_data_count]=temp_add_on_plu_data[0:temp_add_on_plu_data_index]
			print(add_on_plu_data[add_on_plu_data_count])
			temp_add_on_plu_data=temp_add_on_plu_data[temp_add_on_plu_data_index+1:]
			
			print(temp_add_on_plu_data)
			addPlu()
			addPluField()
			add_on_plu_data_count=add_on_plu_data_count-1
		else:
			add_on_plu_data[add_on_plu_data_count]=	temp_add_on_plu_data[0:]
			break



def addPluFieldAlert():
	global plu_data, plu_data_count, add_on_plu_data, add_on_plu_data_count, add_plu_field_alert_flag, username
	while True:
		if(add_on_plu_data[add_on_plu_data_count-1]=="-"):
			add_plu_field_alert_flag=False
			break
		try:
			# time.sleep(1.0)
			add_plu_field_icon_alert_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/add_plu_field_icon_alert.png")	
			try:
				# time.sleep(1.0)
				add_plu_field_duplicate_alert_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/add_plu_field_duplicate_alert.png")
				print("add_plu_field_duplicate_alert found in plu" + plu_data[plu_data_count-1])
				try:
					# time.sleep(1.0)
					
					add_plu_field_duplicate_alert_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/add_plu_field_duplicate_alert_ok.png")
					
					print("add_plu_field_duplicate_alert_ok found in plu" + plu_data[plu_data_count-1])
					pyautogui.click(add_plu_field_duplicate_alert_ok_location)
					add_plu_field_alert_flag=False
					file_log.write("Duplicate plu Error: "+plu_data[plu_data_count-1]+"\n")
					issue_count+=1
					break
				except:
					print("Waiting for response from add_plu_field_duplicate_alert_ok")	
					continue
			except:	
				print("add_plu_field_duplicate_alert not found")	
			try:
				# time.sleep(1.0)
				add_plu_field_same_alert_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/add_plu_field_same_alert.png")
				print("add_plu_field_same_alert found in plu" + plu_data[plu_data_count-1])
				file_log.write("Same plu Error: "+plu_data[plu_data_count-1]+"\n")
				issue_count+=1
				continue
			except:	
				print("add_plu_field_same_alert not found")	
			
			try:
				# time.sleep(1.0)
				add_plu_field_invalid_alert_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/add_plu_field_invalid_alert.png")
				print("add_plu_field_invalid_alert found in plu" + plu_data[plu_data_count-1])
				file_log.write("Invalid plu Error: "+plu_data[plu_data_count-1]+"\n")
				issue_count+=1
				continue
			except:	
				print("add_plu_field_invalid_alert / any other alert not found but add_plu_field_icon_alert found")		
		except:
			break				

def generalButton():
	global general_final_location, username
	while True:
		
		try:
			# time.sleep(1.0)
			general_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/general.png")
			print("general found")
			pyautogui.click(general_location)
			general_final_location=general_location
			break
		except:	
			try:
				# time.sleep(1.0)
				general1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/general1.png")
				print("general1 found")
				pyautogui.click(general1_location)
				general_final_location=general1_location
				break
			except:	
				try:
					# time.sleep(1.0)
					general2_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/general2.png")
					print("general2 found")
					pyautogui.click(general2_location)
					general_final_location=general2_location
					break
				except:	
					print("Waiting for response from general2")	

def generalCheck():	
	global general_final_location, general1_check_count, save_alert_flag, general_check_flag, username	
	while True:	
		pyautogui.click(general_final_location)
		time.sleep(0.5)
		try:
			# time.sleep(1.0)
			general1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/general1.png")
			print("general1 found")
			pyautogui.click(general1_location)
			general_final_location=general1_location
			general1_check_count=0
			general_check_flag=True
			break
		except:	
			general1_check_count=general1_check_count+1
			# if general1_check_count>5:
			save_alert_flag=False
			saveAlert()
			if not(save_alert_flag):
				unSaveAlert()
			save_alert_flag=False	
			print("Waiting for response from general1")	
	

# def titleEditableCheckUpdate():
# 	global title_editable_record,title_data, title_data_count, username
# 	while True:
# 		try:
# 			# time.sleep(1.0)
# 			title_editable_product_name_locationx,title_editable_product_name_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/title_editable_product_name.png")
# 			print("title_editable_product_name found")
# 			if(title_data[title_data_count] == "-"):
# 				title_editable_record=title_editable_record+"-\n"
# 			else:
# 				pyautogui.click(title_editable_product_name_locationx+200,title_editable_product_name_locationy)
# 				pyautogui.hotkey('ctrl', 'a')
# 				pyperclip.copy(title_data[title_data_count])
# 				time.sleep(0.5)
# 				pyautogui.hotkey('ctrl', 'v')
# 				title_editable_record=title_editable_record+"Yes\n"	
# 			title_data_count=title_data_count+1	
# 			break
# 		except:	
# 			try:
# 				# time.sleep(1.0)
# 				product_name_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/product_name.png")
# 				print("product_name found")
# 				if(title_data[title_data_count] == "-"):
# 					title_editable_record=title_editable_record+"-\n"
# 				else:	
# 					title_editable_record=title_editable_record+"No\n"
# 				title_data_count=title_data_count+1	
# 				break
# 			except:	
# 				print("Waiting for response from product_name / title_editable_product_name")					


# title_editable_record=str(date.today())+"\n"
add_plu_field_alert_flag=True
edit_btn_alert_flag=True
file_lower_read=""
file_lower_read_flag=True
file_upper_read=""
file_upper_read_flag=True
un_save_alert_flag=False
long_description_data_count=0
category_textfield_count=0
un_save_alert_count=0
title_editable_check_count=0
general1_check_count=0
plu_data_iteration_count=0
temp1_add_on_plu_data=""
save_alert_flag=False
general_check_flag=False
username = getpass.getuser()
print(username)
file_log = open('product_upload_new_log', 'a+')
file_log.write("\n\n"+str(date.today())+"\n")
issue_count=0
movie_music_no=input("\nPress 1 for movie \n 2 for music\n")

while True:
	if movie_music_no=="1":
		print("Movie Selected")
		break
	elif movie_music_no=="2":
		print("Music Selected")
		break
	else:	
		movie_music_no=input("Press 1 for movie \n 2 for music")


input("Please copy Plu and then press enter")
plu_data_start= pyperclip.paste()
plu_data = [""]*10000
plu_data_count=0
plu_data[plu_data_count]=""


for x in range(len(plu_data_start)):
	if(plu_data_start[x]=="\n"):
		plu_data_count=plu_data_count+1
		print(str(plu_data_count-1)+"    "+plu_data[plu_data_count-1])
		# print("plu_data_count"+str(plu_data_count))
	else:	
		# print("plu_data_start[x]"+plu_data_start[x])
		plu_data[plu_data_count]=plu_data[plu_data_count]+plu_data_start[x]

print(str(plu_data_count)+"    "+plu_data[plu_data_count])
plu_data_count=0		

input("Please copy addOnPlu and then press enter")		
time.sleep(0.5)
add_on_plu_data_start= pyperclip.paste()
add_on_plu_data = [""]*10000
add_on_plu_data_count=0
add_on_plu_data[add_on_plu_data_count]=""


for x in range(len(add_on_plu_data_start)):
	# if(add_on_plu_data_start[x]=='"'):
	# 	quote_flag=not(quote_flag)
	if(add_on_plu_data_start[x]==' ' or add_on_plu_data_start[x]=='\t'):
		continue
		# if(quote_flag==True):
		# 	quote_flag=False
		# else:
		# 	quote_flag=True	
	if(add_on_plu_data_start[x]=="\n"):
		add_on_plu_data_count=add_on_plu_data_count+1
		print(str(add_on_plu_data_count-1)+"    "+add_on_plu_data[add_on_plu_data_count-1])
	# elif((add_on_plu_data_start[x]=="\n" or add_on_plu_data_start[x]==",") and quote_flag):	

	else:	
		# print("add_on_plu_data_start[x]"+add_on_plu_data_start[x])
		add_on_plu_data[add_on_plu_data_count]=add_on_plu_data[add_on_plu_data_count]+add_on_plu_data_start[x]		
		
# category_assignment_final_location=0
print(str(add_on_plu_data_count)+"    "+add_on_plu_data[add_on_plu_data_count])	
add_on_plu_data_count=0


input("Please copy specification and then press enter")		
time.sleep(0.5)
specification_start= pyperclip.paste()
print(specification_start)
# input("Please copy title and then press enter")		
# time.sleep(0.5)
# title_data_start= pyperclip.paste()
# title_data = [""]*10000
# title_data_count=0
# title_data[title_data_count]=""

# for x in range(len(title_data_start)):
# 	if(title_data_start[x]=="\n"):
# 		title_data_count=title_data_count+1
# 	else:	
# 		title_data[title_data_count]=title_data[title_data_count]+title_data_start[x]

# title_data_count=0

generalButton()

if not(os.path.exists('/home/'+username+'/Desktop/webami/old_uploads/'+str(date.today()))):
	os.makedirs('/home/'+username+'/Desktop/webami/old_uploads/'+str(date.today()))

while plu_data[plu_data_count]!="":
	pluData()
	editBtn()
	# time.sleep(0.5)
	# editBtnAlert()
	# time.sleep(0.5)

	categoryAssignmentButton()
	# time.sleep(0.5)
	categoryTextfield()
	category_textfield_count=0
	# if un_save_alert_flag:
	# 	plu_data_count=plu_data_count-1
	# 	un_save_alert_flag=False
	# 	add_plu_field_alert_flag=True
	# 	edit_btn_alert_flag=True
	# 	continue
	addOnProducts()
	addPlu()
	addPluField()
	if(temp1_add_on_plu_data!=""):
		add_on_plu_data[add_on_plu_data_count-1]=temp1_add_on_plu_data
		temp1_add_on_plu_data=""
	# time.sleep(0.5)
	# addPluFieldAlert() 
	longDescription()
	long_description_data_count=0
	descriptionHype()
	# generalButton()
	# titleEditableCheck()
	attributesFun()
	attributesFunOffline()
	saveFun()
	# time.sleep(0.5)
	# saveCheck()
	# unSaveAlert()
	
	add_plu_field_alert_flag=True
	edit_btn_alert_flag=True
	save_alert_flag=False
	general_check_flag=False

generalCheck()
	# editBtn()
	# attributesFunOnline()
	# saveFun()
	# time.sleep(0.5)
	# saveAlert()

while True:
	pyperclip.copy(specification_start)
	time.sleep(2.0)
	if specification_start=="":
		break
	try:
		# time.sleep(1.0)
		plu_specifications_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/plu_specifications.png")
		pyautogui.click(plu_specifications_location)

		subprocess.call(" python3 spec_upload_new.py 1", shell=True)
		break
	except:	
		print("Waiting for response from plu_specifications")

tkinter.messagebox.showinfo(title="Products Uploaded", message="Issues Detected "+str(issue_count)+"\nPlease check log file")

# while True:
# 	try:
# 		# time.sleep(1.0)
# 		specification_uploaded_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/product_upload/specification_uploaded.png")
		
# 		break
# 	except:	
# 		print("Waiting for response from plu_specifications")

# print(specification_start)
# pyperclip.copy(specification_start)
# time.sleep(1.0)

