import pyautogui, time, pyperclip

def plu():
	global plu_locationx, plu_locationy
	while True:
		try:
			time.sleep(1.0)
			plu_locationx, plu_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/product_upload/plu.png")
			print("plu found")
			pyautogui.click(plu_locationx+80, plu_locationy)
			pyautogui.hotkey('ctrl', 'a')
			pyautogui.hotkey('ctrl', 'v')
			time.sleep(1.0)
			plu_locationx, plu_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/product_upload/plu.png")
			break
		except:	
			print("Waiting for response from plu")

def plu_check():
	global plu_locationx, plu_locationy
	while True:
		try:
			time.sleep(1.0)
			plu_locationx, plu_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/product_upload/plu.png")
			print("plu_check found")
			break
		except:	
			print("Waiting for response from plu_check")			

def edit():	
	global plu_locationx, plu_locationy	
	# plu_check()
	# pyautogui.click(plu_locationx+894, plu_locationy)	
	for x in range(6):
		try:
			if(x==5):
				plu()
				pyautogui.click(plu_locationx+894, plu_locationy)
				break
			time.sleep(1.0)
			edit_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/product_upload/edit.png")
			print("edit found")
			pyautogui.click(edit_location)
			break
		except:	
			print("Waiting for response from edit")

def edit_yes():				
	for x in range(2):
		try:
			time.sleep(1.0)
			edit_yes_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/product_upload/edit_yes.png")
			print("edit_yes found")
			pyautogui.click(edit_yes_location)
			break
		except:	
			print("Waiting for response from edit_yes")

def general():	
	global plu_locationx, plu_locationy
	# plu_check()
	time.sleep(1.0)
	pyautogui.click(plu_locationx-26, plu_locationy+36)
	# for x in range(6):
	# 	try:
	# 		if(x==5):
	# 			plu()
	# 			pyautogui.click(plu_locationx, plu_locationy+38)
	# 			break
	# 		time.sleep(1.0)
	# 		genenral_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/product_upload/genenral.png")
	# 		print("genenral found")
	# 		break
	# 	except:	
	# 		try:
	# 			time.sleep(1.0)
	# 			genenral1_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/product_upload/genenral1.png")
	# 			print("genenral1 found")
	# 			pyautogui.click(genenral1_location)
	# 			break
	# 		except:	
	# 			print("Waiting for response from genenral1")

def product_name_field():
	global plu_locationx, plu_locationy
	# plu_check()
	time.sleep(1.0)
	pyautogui.click(plu_locationx+124, plu_locationy+71)	
	pyautogui.hotkey('ctrl', 'a')

def	category_assign():
	global plu_locationx, plu_locationy
	# plu_check()
	pyautogui.click(plu_locationx+180, plu_locationy+36)	

def	category_select():
	global plu_locationx, plu_locationy
	# plu_check()
	time.sleep(1.0)
	pyautogui.doubleClick(plu_locationx+75, plu_locationy+67)		

def	long_description():
	global plu_locationx, plu_locationy
	# plu_check()
	pyautogui.click(plu_locationx+425, plu_locationy+38)	

def	long_description_field():
	global plu_locationx, plu_locationy
	# plu_check()
	time.sleep(1.0)
	pyautogui.click(plu_locationx+158, plu_locationy+203)		
	pyautogui.hotkey('ctrl', 'a')

def	description_hype():
	global plu_locationx, plu_locationy
	# plu_check()
	pyautogui.click(plu_locationx+624, plu_locationy+37)		

def	description_hype_field():
	global plu_locationx, plu_locationy
	# plu_check()
	time.sleep(1.0)
	pyautogui.click(plu_locationx+158, plu_locationy+203)		
	pyautogui.hotkey('ctrl', 'a')	

def	attributes():
	global plu_locationx, plu_locationy
	# plu_check()
	pyautogui.click(plu_locationx+724, plu_locationy+38)

def	attributes_off():
	global plu_locationx, plu_locationy
	# plu_check()
	time.sleep(1.0)
	pyautogui.click(plu_locationx+851, plu_locationy+148)	

def	attributes_save():
	global plu_locationx, plu_locationy
	# plu_check()
	time.sleep(1.0)
	pyautogui.click(plu_locationx+1099, plu_locationy+0)	

def	attributes_on():
	global plu_locationx, plu_locationy
	# plu_check()
	time.sleep(1.0)
	pyautogui.click(plu_locationx+851, plu_locationy+124)

def	error_ok():
	try:
		time.sleep(1.0)
		error_ok_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/product_upload/error_ok.png")
		print("error_ok found")
	except:	
		print("error_ok not found")	

def	attributes_on_warning():
	try:
		time.sleep(1.0)
		attributes_on_warning_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/product_upload/attributes_on_warning.png")
		print("attributes_on_warning found")
	except:	
		print("attributes_on_warning not found")

def	attributes_of_yes():
	try:
		time.sleep(1.0)
		attributes_of_yes_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/product_upload/attributes_of_yes.png")
		print("attributes_of_yes found")
		pyautogui.click(attributes_of_yes_location)
	except:	
		print("attributes_of_yes not found")		

									

plu_locationx = ""
plu_locationy = ""
plu()
edit()
error_ok()
edit_yes()
error_ok()
general()
product_name_field()
category_assign()
category_select()
long_description()
long_description_field()
description_hype()
description_hype_field()
attributes()
attributes_off()
attributes_save()
error_ok()
attributes_of_yes()
error_ok()
edit()
error_ok()
attributes_on()
attributes_save()
error_ok()
attributes_on_warning()