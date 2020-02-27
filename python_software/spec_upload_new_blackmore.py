import pyautogui, time, pyperclip

def plu():
	global data_for_upload_arr, data_for_upload_arr_count
	while True:
		try:
			
			plu_locationx, plu_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/plu.png")
			print("plu found")
			pyautogui.click(plu_locationx+80, plu_locationy)
			# time.sleep(1.0)
			# plu_locationx, plu_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/plu.png")
			# pyautogui.click(plu_locationx+80, plu_locationy)
			pyautogui.hotkey('ctrl', 'a')
			pyperclip.copy(data_for_upload_arr[data_for_upload_arr_count])
			data_for_upload_arr_count=data_for_upload_arr_count+1
			pyautogui.hotkey('ctrl', 'v')
			break
		except:	
			print("Waiting for response from plu")

def edit():	
	while True:
		try:
			# time.sleep(1.0)
			edit_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/edit.png")
			print("edit found")
			pyautogui.click(edit_location)
			break
		except:	
			print("Waiting for response from edit")


def typeFun():	
	global data_for_upload_arr, data_for_upload_arr_count
	while True:
		try:
			time.sleep(1.0)
			type_locationx, type_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/type.png")
			print("type found")
			pyautogui.click(type_locationx+135, type_locationy)
			# time.sleep(1.0)
			print("data_for_upload_arr[data_for_upload_arr_count]"+data_for_upload_arr[data_for_upload_arr_count])

			try:
				musical_instrument_accessory_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/musical_instrument_accessory.png")
				print("musical_instrument_accessory found")
				pyautogui.click(musical_instrument_accessory_location)
			except:
				try:
					musical_instrument_accessory1_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/musical_instrument_accessory1.png")
					print("musical_instrument_accessory1 found")
					pyautogui.click(musical_instrument_accessory1_location)
				except:
					print("musical_instrument_accessory1 not found")
					pyautogui.click(type_locationx+135, type_locationy)
		
			break
		except:	
			print("Waiting for response from product_format")	


def enable_on_site_tick():
	while True:
		try:
			# time.sleep(1.0)
			uncheck_locationx, uncheck_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/uncheck.png")
			print("uncheck found")
			pyautogui.click(uncheck_locationx-20, uncheck_locationy)
			break
		except:	
			print("Waiting for response from uncheck")
		try:
			# time.sleep(1.0)
			check_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/check.png")
			print("check found")
			break
		except:	
			print("Waiting for response from check")	


def save():	
	while True:
		try:
			# time.sleep(1.0)
			save_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/save.png")
			print("save found")
			pyautogui.click(save_location)
			break
		except:	
			print("Waiting for response from save")


def save_alert():	
	while True:
		try:
			# time.sleep(1.0)
			nothing_to_save_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/nothing_to_save.png")
			print("nothing_to_save found")
			time.sleep(1.0)
			nothing_to_save_ok_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/nothing_to_save_ok.png")
			print("nothing_to_save_ok found")
			pyautogui.click(nothing_to_save_ok_location)
			break
		except:	
			print("Waiting for response from nothing_to_save_ok")	
		try:
			# time.sleep(1.0)
			specification_has_been_saved_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/specification_has_been_saved.png")
			print("specification_has_been_saved found")
			nothing_to_save_ok_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/spec_upload/nothing_to_save_ok.png")
			print("specification_has_been_saved_ok found")
			pyautogui.click(nothing_to_save_ok_location)
			break
		except:	
			print("Waiting for response from specification_has_been_saved")		


data_for_upload = pyperclip.paste()
data_for_upload_arr = [""]*10000
data_for_upload_arr_count=0
data_for_upload_arr[data_for_upload_arr_count]=""
for x in range(len(data_for_upload)):
	if(data_for_upload[x]=="\n"):
		data_for_upload_arr_count=data_for_upload_arr_count+1;
		print("data_for_upload_arr_count"+str(data_for_upload_arr_count))
	else:	
		print("data_for_upload[x]"+data_for_upload[x])
		data_for_upload_arr[data_for_upload_arr_count]=data_for_upload_arr[data_for_upload_arr_count]+data_for_upload[x]
		

data_for_upload_arr_count=0

while data_for_upload_arr[data_for_upload_arr_count]!="":
	plu()
	edit()
	typeFun()
	# genre()
	# product_format()
	enable_on_site_tick()
	save()
	save_alert()