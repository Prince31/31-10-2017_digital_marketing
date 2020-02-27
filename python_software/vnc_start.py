import pyautogui, time, pyperclip



def new_desktop_file_function():
	try:	
		global finite_count
		global vnc_icon_fixed_location
		print("enter new_desktop_file_function")
		time.sleep(1.0)
		new_desktop_file_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/new_desktop_file.png")
		pyautogui.click(new_desktop_file_location)
		finite_count=1
	except:	
		# try:
		# 	new_desktop_file1_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/new_desktop_file1.png")
		# 	pyautogui.click(new_desktop_file1_location)
		# 	time.sleep(0.5)
		# except:
		
		# if (finite_count<2):
		# 	vnc_icon_function()
		finite_count=finite_count+1
		if(finite_count<6):
			if(finite_count%2==0):
				pyautogui.click(vnc_icon_fixed_location)
				print(vnc_icon_fixed_location)
				print(str(vnc_icon_fixed_location)+" finite_count"+str(finite_count))
			new_desktop_file_function()
		else:
			finite_count=1	
			print("new_desktop_file1 not found")

def vnc_icon_function():
	try:
		global vnc_icon_fixed_location
		print("enter vnc_icon_function")
	# 	time.sleep(1.0)
	# 	vnc_front_screen_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen.png")
	# 	vnc_icon_fixed_location=vnc_front_screen_location
	# except:
	# 	try:
	# 		time.sleep(1.0)
	# 		vnc_front_screen1_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen1.png")
	# 		vnc_icon_fixed_location=vnc_front_screen1_location
	# 	except:
	# 		try:
		time.sleep(1.0)
		vnc_icon_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_icon.png")
		pyautogui.click(vnc_icon_location)
		vnc_icon_fixed_location=vnc_icon_location

			# try:
		# 	time.sleep(1.0)
		# 	vnc_front_screen_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen.png")
		# 	vnc_icon_fixed_location=vnc_front_screen_location
		# except:
		# 	try:
		# 		time.sleep(1.0)
		# 		vnc_front_screen1_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen1.png")
		# 		vnc_icon_fixed_location=vnc_front_screen1_location
		# 	except:	
		# 		vnc_icon_function()
		# 		print("Waiting for response in vnc_icon_function() for vnc_front_screen")
	except:
		try:
			time.sleep(1.0)
			vnc_icon1_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_icon1.png")
			pyautogui.click(vnc_icon1_location)
			vnc_icon_fixed_location=vnc_icon1_location
		except:
			try:
				time.sleep(1.0)
				vnc_icon1_1_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_icon1_1.png")
				pyautogui.click(vnc_icon1_1_location)
				vnc_icon_fixed_location=vnc_icon1_1_location
			except:	
				print("Waiting for response in vnc_icon_function()")
				vnc_icon_function()
							
								

# def vnc_icon_function():
# 	try:
# 		try:
# 			time.sleep(2.0)
# 			vnc_front_screen_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen.png")
# 			print(vnc_front_screen_location)
# 			return 0
# 		except:
# 			vnc_icon_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_icon.png")
# 			pyautogui.click(vnc_icon_location)
# 			print(vnc_front_screen_location)
# 			return 0
# 			try:
# 				time.sleep(2.0)
# 				vnc_front_screen_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen.png")
# 				print(vnc_front_screen_location)
# 				return 0
# 			except:
# 				print("vnc_icon_function1")
# 				vnc_icon_function()	
# 		time.sleep(0.5)
# 	except:
# 		try:
# 			try:
# 				time.sleep(2.0)
# 				vnc_front_screen_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen.png")
# 				print(vnc_front_screen_location)
# 				return 0
# 			except:
# 				vnc_icon1_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_icon1.png")
# 				pyautogui.click(vnc_icon1_location)
# 				print(vnc_front_screen_location)
# 				return 0
# 				try:
# 					time.sleep(2.0)
# 					vnc_front_screen_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen.png")
# 					print(vnc_front_screen_location)
# 					return 0
# 				except:
# 					print("vnc_icon_function2")
# 					vnc_icon_function()	
# 			time.sleep(0.5)
# 		except:
# 			try:
# 				try:
# 					time.sleep(2.0)
# 					vnc_front_screen_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen.png")
# 					print(vnc_front_screen_location)
# 					return 0
# 				except:
# 					vnc_icon2_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_icon2.png")
# 					pyautogui.click(vnc_icon2_location)
# 					print(vnc_front_screen_location)
# 					return 0
# 					try:
# 						time.sleep(2.0)
# 						vnc_front_screen_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen.png")
# 						print(vnc_front_screen_location)
# 						return 0
# 					except:
# 						print("vnc_icon_function3")
# 						vnc_icon_function()	
# 				time.sleep(0.5)
# 			except:
# 					try:
# 						try:
# 							time.sleep(2.0)
# 							vnc_front_screen_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen.png")
# 							print(vnc_front_screen_location)
# 							return 0
# 						except:
# 							vnc_icon3_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_icon3.png")
# 							pyautogui.click(vnc_icon3_location)
# 							print(vnc_front_screen_location)
# 							return 0
# 							try:
# 								time.sleep(2.0)
# 								vnc_front_screen_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen.png")
# 								print(vnc_front_screen_location)
# 								return 0
# 							except:
# 								print("vnc_icon_function4")
# 								vnc_icon_function()	
# 						time.sleep(0.5)
# 					except:
# 						global finite_count
# 						finite_count=finite_count+1
# 						time.sleep(1.0)
# 						if(finite_count<6):
# 							vnc_icon_function()
# 						else:
# 							finite_count=1	
# 							print("error in vnc icon3")	

def ser_use_pas_function():
	try:
		global vnc_icon_fixed_location
		global finite_count
		print("enter ser_use_pas_function")
		time.sleep(1.0)
		ser_use_pas_locationx,ser_use_pas_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/ser_use_pas.png")
		pyautogui.click(ser_use_pas_locationx+100,ser_use_pas_locationy)
		pyautogui.hotkey('ctrl', 'a')
		pyautogui.typewrite('user')
		pyautogui.click(ser_use_pas_locationx+100,ser_use_pas_locationy-40)
		pyautogui.hotkey('ctrl', 'a')
		pyautogui.typewrite('10.100.99.216')
		pyautogui.click(ser_use_pas_locationx+100,ser_use_pas_locationy+40)
		pyautogui.hotkey('ctrl', 'a')
		pyautogui.typewrite('i5dWsk')
		time.sleep(1.0)
		rdp_connect_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/rdp_connect.png")
		pyautogui.click(rdp_connect_location)
		finite_count=1
		# try:
		# 	time.sleep(1.0)
		# 	vnc_front_screen_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen.png")
		# except:
		# 	try:
		# 		time.sleep(1.0)
		# 		vnc_front_screen1_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/vnc_front_screen1.png")
		# 	except:	
		# 		vnc_icon_function()
		# 		print("Waiting for response in vnc_icon_function() for vnc_front_screen")
	except:
		# try:
		# 	ser_use_pas1_locationx,ser_use_pas1_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/ser_use_pas1.png")
		# 	pyautogui.click(ser_use_pas1_locationx+100,ser_use_pas1_locationy)
		# 	pyautogui.hotkey('ctrl', 'a')
		# 	pyautogui.typewrite('user')
		# 	pyautogui.click(ser_use_pas1_locationx+100,ser_use_pas1_locationy-40)
		# 	pyautogui.hotkey('ctrl', 'a')
		# 	pyautogui.typewrite('10.100.99.216')
		# 	pyautogui.click(ser_use_pas1_locationx+100,ser_use_pas1_locationy+40)
		# 	pyautogui.hotkey('ctrl', 'a')
		# 	pyautogui.typewrite('i5dWsk')
		# 	rdp_connect_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/rdp_connect.png")
		# 	pyautogui.click(rdp_connect_location)
		# 	time.sleep(0.5)
		# except:
		
		finite_count+=1
		if(finite_count<6):
			if(finite_count%2==0):
				pyautogui.click(vnc_icon_fixed_location)
				print(vnc_icon_fixed_location)
				print(str(vnc_icon_fixed_location)+" finite_count"+str(finite_count))
			ser_use_pas_function()
		else:
			finite_count=1
			print("ser_usr_pas1 not found")	

def firefox_icon_function():
	try:	
		global finite_count	
		print("enter firefox_icon_function")
		time.sleep(1.0)		
		firefox_icon_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/firefox_icon.png")
		pyautogui.doubleClick(firefox_icon_location)
		finite_count=1
	except:
		try:	
			time.sleep(1.0)		
			firefox_icon1_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/firefox_icon1.png")
			pyautogui.click(firefox_icon1_location)
		except:
			print("Waiting for response in firefox_icon_function")			

def new_tab_function():
	try:
		global finite_count	
		global vnc_icon_fixed_location
		print("enter new_tab_function")
		time.sleep(1.0)		
		new_tab_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/new_tab.png")
		pyautogui.click(new_tab_location)
		finite_count=1
	except:
		# try:			
		# 	new_tab1_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/new_tab1.png")
		# 	pyautogui.click(new_tab1_location)
		# 	time.sleep(0.5)
		# except:
		
		try:
			pyautogui.moveTo(1360, 457)	
			scroller_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/scroller.png")
			
			# pyautogui.moveRel(50,0)
			# pyautogui.click()
			# pyautogui.scroll(10)
			time.sleep(1.0)
			pyautogui.dragTo(1360, 257)
		except:
			print("scroller not found")
		
		print("Waiting for response in new_tab_function")
		
		if(finite_count%15==0):
				pyautogui.click(vnc_icon_fixed_location)
				print(vnc_icon_fixed_location)
				print(str(vnc_icon_fixed_location)+" finite_count"+str(finite_count))
		finite_count=finite_count+1
		firefox_icon_function()
		new_tab_function()
				

def search_bar_function():
	try:	
		global vnc_icon_fixed_location
		global finite_count	
		print("enter search_bar_function")
		time.sleep(1.0)		
		search_bar_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/search_bar.png")
		pyautogui.click(search_bar_location)
		pyperclip.copy('http://merchantmaster.i.frys.com/officeTools/')
		time.sleep(1.0)
		pyautogui.hotkey('ctrl', 'v')
		pyautogui.press('enter')
		finite_count=1
	except:
		print("Waiting for response in search_bar")
		if(finite_count%15==0):
				pyautogui.click(vnc_icon_fixed_location)
				print(vnc_icon_fixed_location)
				print(str(vnc_icon_fixed_location)+" finite_count"+str(finite_count))
		finite_count=finite_count+1
		search_bar_function()
		

def ass_pas_function():
	try:
		global finite_count	
		global vnc_icon_fixed_location
		print("enter ass_pas_function")
		time.sleep(1.0)
		ass_pas_locationx, ass_pas_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/ass_pas.png")					
		pyautogui.click(ass_pas_locationx+150, ass_pas_locationy-20)
		pyautogui.hotkey('ctrl', 'a')
		pyperclip.copy('287')
		time.sleep(1.0)
		pyautogui.hotkey('ctrl', 'v')
		pyautogui.click(629, 142)
		pyautogui.click(629, 142)
		time.sleep(1.0)
		pyautogui.click(ass_pas_locationx+150, ass_pas_locationy+20)
		pyautogui.hotkey('ctrl', 'a')
		pyperclip.copy('trantor123')
		time.sleep(1.0)
		pyautogui.hotkey('ctrl', 'v')
		time.sleep(1.0)
		ass_pas_ok_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/ass_pas_ok.png")
		pyautogui.click(ass_pas_ok_location)
		finite_count=1
	except:
		# try:
		# 	ass_pas1_locationx, ass_pas1_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/ass_pas1.png")					
		# 	pyautogui.click(ass_pas1_locationx+150, ass_pas1_locationy-20)
		# 	pyautogui.hotkey('ctrl', 'a')
		# 	pyperclip.copy('287')
		# 	time.sleep(1.0)
		# 	pyautogui.hotkey('ctrl', 'v')
		# 	pyautogui.click(629, 142)
		# 	pyautogui.click(629, 142)
		# 	time.sleep(1.0)
		# 	pyautogui.click(ass_pas1_locationx+150, ass_pas1_locationy+20)
		# 	pyautogui.hotkey('ctrl', 'a')
		# 	pyperclip.copy('trantor123')
		# 	time.sleep(1.0)
		# 	pyautogui.hotkey('ctrl', 'v')
		# 	ass_pas_ok_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/ass_pas_ok.png")
		# 	pyautogui.click(ass_pas_ok_location)
		# 	time.sleep(1.0)
		# except:	
		print("Waiting for response in ass_pas_function")
		if(finite_count%15==0):
				pyautogui.click(vnc_icon_fixed_location)
				print(vnc_icon_fixed_location)
				print(str(vnc_icon_fixed_location)+" finite_count"+str(finite_count))
		finite_count=finite_count+1
		ass_pas_function()

def product_management_function():	
	try:
		global vnc_icon_fixed_location
		global finite_count		
		print("enter product_management_function")
		time.sleep(1.0)
		product_management_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/vnc_start/product_management.png")
		pyautogui.click(product_management_location)
		finite_count=1
	except:	
		print("Waiting for response in product_management_function")
		if(finite_count%15==0):
				pyautogui.click(vnc_icon_fixed_location)
				print(vnc_icon_fixed_location)
				print(vnc_icon_fixed_location)
				print(str(vnc_icon_fixed_location)+" finite_count"+str(finite_count))
		finite_count=finite_count+1
		product_management_function()

finite_count=1
vnc_icon_fixed_location=0
vnc_icon_function()
new_desktop_file_function()
ser_use_pas_function()
new_tab_function()
search_bar_function()
ass_pas_function()	
product_management_function()
