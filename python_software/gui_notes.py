import pyautogui
print(pyautogui.size())  #screen resolution
print(pyautogui.position())  #current mouse position
pyautogui.moveTo(33,289)	#to move mouse to a fixed location
pyautogui.moveTo(100,289, duration=1.5)  #to move mouse to a fixed location at a particular speed
pyautogui.moveRel(33,289)	#to move mouse to a relative location
pyautogui.moveRel(100,289, duration=1.5)  #to move mouse to a relative location at a particular speed
pyautogui.click(33,289)		# to click at a pixel
pyautogui.doubleClick(23,289)		# to double-click at a pixel
pyautogui.rightClick(33,289)		# to right-click at a pixel
pyautogui.middleClick(33,289)		# to middle-click at a pixel
pyautogui.click()		# Clicks at the current location of mouse
pyautogui.dragTo(33,289)	#to drag mouse to a fixed location
pyautogui.dragRel(33,289)	#to drag mouse to a relative location
pyautogui.dragTo(33,289, duration=1.5)  #to drag mouse to a fixed location at a particular speed
pyautogui.dragRel(33,289, duration=1.5)  #to drag mouse to a relative location at a particular speed
pyautogui.displayMousePosition()  #to display variable mouse position at runtime
pyautogui.typewrite('Hi')	# to type something
pyautogui.typewrite('Hi', interval=0.2)	# to type something with interval
pyautogui.typewrite(['a', 'b', 'c','X', 'left','left','O'], interval=0.2)  #to type special keys
pyautogui.press('f1')	 #to press a single key
pyautogui.hotkey('ctrl', 'o')	 #to press combination keys
pyautogui.KEYBOARD_KEYS		#to display list of keys
pyautogui.screenshot() # returns screenshot object. if we pass path it will take screenshot and save there
pyautogui.locateOnScreen("/home/princesethi/Pictures/Gui_Automation/vnc_icon.png") #to locate pixel of image passed
pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/Gui_Automation/vnc_icon.png") #to locate pixel center of image passed
