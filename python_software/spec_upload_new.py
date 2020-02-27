import pyautogui, time, pyperclip, tkinter.messagebox, getpass
from datetime import date
pyautogui.FAILSAFE = False

def plu():
	global data_for_upload_arr, data_for_upload_arr_count, plu_locationx, plu_locationy, username
	while True:
		try:
			# time.sleep(1.0)
			plu_locationx, plu_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/plu.png")
			print("plu found")
			pyautogui.click(plu_locationx+80, plu_locationy)
			pyautogui.click(plu_locationx+80, plu_locationy)
			# time.sleep(1.0)
			# plu_locationx, plu_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/plu.png")
			# pyautogui.click(plu_locationx+80, plu_locationy)
			pyautogui.hotkey('ctrl', 'a')
			pyperclip.copy(data_for_upload_arr[data_for_upload_arr_count])
			time.sleep(0.5)
			data_for_upload_arr_count=data_for_upload_arr_count+1
			pyautogui.hotkey('ctrl', 'v')
			break
			# try:
			# 	transport_error_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/transport_error.png")
			# 	print("transport_error found")
			# 	nothing_to_save_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/transport_error.png")
			# 	pyautogui.click(nothing_to_save_ok_location)
			# 	data_for_upload_arr_count=data_for_upload_arr_count-1
			# except:	
			# 	break
		except:	
			print("Waiting for response from plu")

def edit():	
	global plu_locationx, plu_locationy, username
	while True:
		try:
			pyautogui.click(plu_locationx+80, plu_locationy)
			# time.sleep(1.0)
			edit_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/edit.png")
			print("edit found")

			pyautogui.click(edit_location)
			break
		except:	
			print("Waiting for response from edit")

	# pyautogui.click(plu_locationx+243, plu_locationy)	
	# for x in range(6):
	# 	try:
	# 		if(x==5):
	# 			plu()
	# 			pyautogui.click(plu_locationx+894, plu_locationy)
	# 			break
	# 		time.sleep(1.0)
	# 		edit_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/edit.png")
	# 		print("edit found")
	# 		pyautogui.click(edit_location)
	# 		break
	# 	except:	
	# 		print("Waiting for response from edit")

def product_format():	
	global data_for_upload_arr, data_for_upload_arr_count, username, format_not_found, pending_flag, issue_count
	time.sleep(0.5)
	while True:
		try:
			product_format_locationx, product_format_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/product_format.png")
			print("product_format found")
			pyautogui.click(product_format_locationx+135, product_format_locationy)
			# time.sleep(0.5)
			print("data_for_upload_arr[data_for_upload_arr_count]"+data_for_upload_arr[data_for_upload_arr_count])
			while True:
				if data_for_upload_arr[data_for_upload_arr_count]=="[DVD]":
					try:
						dvd_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/dvd.png")
						print("dvd found")
						pyautogui.click(dvd_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMovie()
						break
					except:
						print("dvd not found")
					try:
						dvd1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/dvd1.png")
						print("dvd1 found")
						pyautogui.click(dvd1_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMovie()
						break
					except:
						print("dvd1 not found")	

				elif data_for_upload_arr[data_for_upload_arr_count]=="[Blu-Ray]" or data_for_upload_arr[data_for_upload_arr_count]=="[Blu-Ray] [DVD] [Digital]" or data_for_upload_arr[data_for_upload_arr_count]=="[Blu-Ray] [Digital]" or data_for_upload_arr[data_for_upload_arr_count]=="[Blu-ray]":
					try:
						blu_ray_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/blu_ray.png")
						print("blu_ray found")
						pyautogui.click(blu_ray_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMovie()
						break
					except:
						print("blu_ray not found")
					try:
						blu_ray1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/blu_ray1.png")
						print("blu_ray1 found")
						pyautogui.click(blu_ray1_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMovie()
						break
					except:
						print("blu_ray1 not found")		
				elif data_for_upload_arr[data_for_upload_arr_count]=="[Blu-Ray] [DVD]" :
					try:
						blu_ray_dvd_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/blu_ray_dvd.png")
						print("blu_ray_dvd found")
						pyautogui.click(blu_ray_dvd_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMovie()
						break
					except:
						print("blu_ray_dvd not found")
					try:
						blu_ray_dvd1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/blu_ray_dvd1.png")
						print("blu_ray_dvd1 found")
						pyautogui.click(blu_ray_dvd1_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMovie()
						break
					except:
						print("blu_ray_dvd1 not found")			
						
				elif data_for_upload_arr[data_for_upload_arr_count]=="[4K UHD]" or data_for_upload_arr[data_for_upload_arr_count]=="[4K UHD] [Blu-Ray] [Digital]" or data_for_upload_arr[data_for_upload_arr_count]=="[4K UHD] [Blu-Ray] [Digital Code]":
					try:
						uhd_4k_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/uhd_4k.png")
						print("uhd_4k found")
						pyautogui.click(uhd_4k_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMovie()
						break
					except:
						print("uhd_4k not found")
					try:
						uhd_4k1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/uhd_4k1.png")
						print("uhd_4k1 found")
						pyautogui.click(uhd_4k1_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMovie()
						break
					except:
						print("uhd_4k1 not found")					
					

				elif data_for_upload_arr[data_for_upload_arr_count]=="[Vinyl]" or data_for_upload_arr[data_for_upload_arr_count]=="[Pink Vinyl]":
					try:
						vinyl_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/vinyl.png")
						print("vinyl found")
						pyautogui.click(vinyl_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMusic()
						break
					except:
						print("vinyl not found")
					try:
						vinyl1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/vinyl1.png")
						print("vinyl1 found")
						pyautogui.click(vinyl1_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMusic()
						break
					except:
						print("vinyl1 not found")	
					
				elif data_for_upload_arr[data_for_upload_arr_count]=="[Audio CD]":
					try:
						cd_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/cd.png")
						print("cd found")
						pyautogui.click(cd_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMusic()
						break
					except:
						print("cd not found")
					try:
						cd1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/cd1.png")
						print("cd1 found")
						pyautogui.click(cd1_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMusic()
						break
					except:
						print("cd1 not found")	

				elif data_for_upload_arr[data_for_upload_arr_count]=="[SACD]" or data_for_upload_arr[data_for_upload_arr_count]=="[SACD-Hybrid]":
					try:
						sacd_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/sacd.png")
						print("sacd found")
						pyautogui.click(sacd_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMusic()
						break
					except:
						print("sacd not found")
					try:
						sacd1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/sacd1.png")
						print("sacd1 found")
						pyautogui.click(sacd1_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMusic()
						break
					except:
						print("sacd1 not found")	

				elif data_for_upload_arr[data_for_upload_arr_count]=="[DVD Audio]":
					try:
						dvd_audio_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/dvd_audio.png")
						print("dvd_audio found")
						pyautogui.click(dvd_audio_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMusic()
						break
					except:
						print("dvd_audio not found")
					try:
						dvd_audio1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/dvd_audio1.png")
						print("dvd_audio1 found")
						pyautogui.click(dvd_audio1_location)
						data_for_upload_arr_count=data_for_upload_arr_count+1
						genreMusic()
						break
					except:
						print("dvd_audio1 not found")
				else:
					print("product-subformat not found")

					pyautogui.click(product_format_locationx+135,product_format_locationy)
					file_.write("Pending\n")
					issue_count+=1
					pending_flag=True
					format_not_found+=data_for_upload_arr[data_for_upload_arr_count]+"\n"
					data_for_upload_arr_count=data_for_upload_arr_count+2
					break			
		
				
			break
		except:	
			try:
				cannot_validate_plu_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/cannot_validate_plu.png")
				try:
					nothing_to_save_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/nothing_to_save_ok.png")
					print("cannot_validate_plu_ok found")
					pyautogui.click(nothing_to_save_ok_location)
					edit()
				except:
					print("waiting for response from cannot_validate_plu_ok")	
			except:
				print("waiting for response from cannot_validate_plu")		

def genreMusic():	
	global data_for_upload_arr, data_for_upload_arr_count, genre_not_found, username, pending_flag, issue_count
	while True:
		try:
			
			genre_locationx, genre_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/genre.png")
			print("genreMusic found")
			pyautogui.click(genre_locationx+135,genre_locationy)
			# time.sleep(0.5)
			while True:
				if data_for_upload_arr[data_for_upload_arr_count]=="Rock" or data_for_upload_arr[data_for_upload_arr_count]=="Heavy Metal(Rock)" or data_for_upload_arr[data_for_upload_arr_count]=="Latin Pop/Rock" or data_for_upload_arr[data_for_upload_arr_count]=="Rock/Pop" or data_for_upload_arr[data_for_upload_arr_count]=="Heavy Metal" or data_for_upload_arr[data_for_upload_arr_count]=="New Age (Rock)":
					
					try:
						rock_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/rock.png")
						print("rock found")
						pyautogui.click(rock_location)
						break
					except:
						print("rock not found")
					try:
						rock1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/rock1.png")
						print("rock1 found")
						pyautogui.click(rock1_location)
						break
					except:
						print("rock1 not found")	
						
				elif data_for_upload_arr[data_for_upload_arr_count]=="RB / Soul" or data_for_upload_arr[data_for_upload_arr_count]=="Soul/R &amp; B" or data_for_upload_arr[data_for_upload_arr_count]=="Soul/R & B":
					try:
						rb_soul_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/rb_soul.png")
						print("rb_soul found")
						pyautogui.click(rb_soul_location)
						break
					except:
						print("rb_soul not found")	
					try:
						rb_soul1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/rb_soul1.png")
						print("rb_soul1 found")
						pyautogui.click(rb_soul1_location)
						break
					except:
						print("rb_soul1 not found")		
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Country / Folk" or data_for_upload_arr[data_for_upload_arr_count]=="Folk" or data_for_upload_arr[data_for_upload_arr_count]=="Country" or data_for_upload_arr[data_for_upload_arr_count]=="Easy listening":
					try:
						country_folk_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/country_folk.png")
						print("country_folk found")
						pyautogui.click(country_folk_location)
						break
					except:
						print("country_folk not found")	
					try:
						country_folk1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/country_folk1.png")
						print("country_folk1 found")
						pyautogui.click(country_folk1_location)
						break
					except:
						print("country_folk1 not found")		
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Rap / Hip Hop" or data_for_upload_arr[data_for_upload_arr_count]=="Rap/Hip Hop":
					try:
						rap_hip_hop_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/rap_hip_hop.png")
						print("rap_hip_hop found")
						pyautogui.click(rap_hip_hop_location)
						break
					except:
						print("rap_hip_hop not found")	
					try:
						rap_hip_hop1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/rap_hip_hop1.png")
						print("rap_hip_hop1 found")
						pyautogui.click(rap_hip_hop1_location)
						break
					except:
						print("rap_hip_hop1 not found")		
						
				elif data_for_upload_arr[data_for_upload_arr_count]=="Latin" or data_for_upload_arr[data_for_upload_arr_count]=="African":
					try:
						latin_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/latin.png")
						print("latin found")
						pyautogui.click(latin_location)
						break
					except:
						print("latin not found")
					try:
						latin1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/latin1.png")
						print("latin1 found")
						pyautogui.click(latin1_location)
						break
					except:
						print("latin1 not found")		
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Jazz / Blues" or data_for_upload_arr[data_for_upload_arr_count]=="Blues" or data_for_upload_arr[data_for_upload_arr_count]=="Jazz" or data_for_upload_arr[data_for_upload_arr_count]=="Blues/Jazz":
					try:
						jazz_blues_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/jazz_blues.png")
						print("jazz_blues found")
						pyautogui.click(jazz_blues_location)
						break
					except:
						print("jazz_blues not found")
					try:
						jazz_blues1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/jazz_blues1.png")
						print("jazz_blues1 found")
						pyautogui.click(jazz_blues1_location)
						break
					except:
						print("jazz_blues1 not found")		
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Soundtrack" or data_for_upload_arr[data_for_upload_arr_count]=="Musical Soundtrack":
					try:
						soundtrack_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/soundtrack.png")
						print("soundtrack found")
						pyautogui.click(soundtrack_location)
						break
					except:
						print("soundtrack not found")
					try:
						soundtrack1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/soundtrack1.png")
						print("soundtrack1 found")
						pyautogui.click(soundtrack1_location)
						break
					except:
						print("soundtrack1 not found")	
						
				elif data_for_upload_arr[data_for_upload_arr_count]=="classical / Opera" or data_for_upload_arr[data_for_upload_arr_count]=="Classical" or data_for_upload_arr[data_for_upload_arr_count]=="Classical Opera" or data_for_upload_arr[data_for_upload_arr_count]=="Classical Artists" or data_for_upload_arr[data_for_upload_arr_count]=="Chamber Music" or data_for_upload_arr[data_for_upload_arr_count]=="Ambient" or data_for_upload_arr[data_for_upload_arr_count]=="Classical Artists (Classical Opera)" or data_for_upload_arr[data_for_upload_arr_count]=="Ambient(Classical)":
					try:
						classical_opera_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/classical_opera.png")
						print("classical_opera found")
						pyautogui.click(classical_opera_location)
						break
					except:
						print("classical_opera not found")	
					try:
						classical_opera1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/classical_opera1.png")
						print("classical_opera1 found")
						pyautogui.click(classical_opera1_location)
						break
					except:
						print("classical_opera1 not found")		
		


				elif data_for_upload_arr[data_for_upload_arr_count]=="Vocals" or data_for_upload_arr[data_for_upload_arr_count]=="Vocal":
					try:
						vocals_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/vocals.png")
						print("vocals found")
						pyautogui.click(vocals_location)
						break
					except:
						print("vocals not found")	
					try:
						vocals1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/vocals1.png")
						print("vocals1 found")
						pyautogui.click(vocals1_location)
						break
					except:
						print("vocals1 not found")		
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Karaoke":
					try:
						karaoke_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/karaoke.png")
						print("karaoke found")
						pyautogui.click(karaoke_location)
						break
					except:
						print("karaoke not found")	
					try:
						karaoke1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/karaoke1.png")
						print("karaoke1 found")
						pyautogui.click(karaoke1_location)
						break
					except:
						print("karaoke1 not found")		
						
				elif data_for_upload_arr[data_for_upload_arr_count]=="Religious" or data_for_upload_arr[data_for_upload_arr_count]=="Christian(Religion)" or data_for_upload_arr[data_for_upload_arr_count]=="Gospel" or data_for_upload_arr[data_for_upload_arr_count]=="Gospel(Religion)" or data_for_upload_arr[data_for_upload_arr_count]=="Christian":
					try:
						religious_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/religious.png")
						print("religious found")
						pyautogui.click(religious_location)
						break
					except:
						print("religious not found")	
					try:
						religious1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/religious1.png")
						print("religious1 found")
						pyautogui.click(religious1_location)
						break
					except:
						print("religious1 not found")		
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Dance / DJ" or data_for_upload_arr[data_for_upload_arr_count]=="Electronic(DJ/Dance)" or data_for_upload_arr[data_for_upload_arr_count]=="Instrumental" or data_for_upload_arr[data_for_upload_arr_count]=="Dance" or data_for_upload_arr[data_for_upload_arr_count]=="Electronic":
					try:
						dj_dance_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/dj_dance.png")
						print("dj_dance found")
						pyautogui.click(dj_dance_location)
						break
					except:
						print("dj_dance not found")	
					try:
						dj_dance1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/dj_dance1.png")
						print("dj_dance1 found")
						pyautogui.click(dj_dance1_location)
						break
					except:
						print("dj_dance1 not found")		
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Reggae":
					try:
						reggae_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/reggae.png")
						print("reggae found")
						pyautogui.click(reggae_location)
						break
					except:
						print("reggae not found")	
					try:
						reggae1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/reggae1.png")
						print("reggae1 found")
						pyautogui.click(reggae1_location)
						break
					except:
						print("reggae1 not found")	
						
				elif data_for_upload_arr[data_for_upload_arr_count]=="World" or data_for_upload_arr[data_for_upload_arr_count]=="International(World)" or data_for_upload_arr[data_for_upload_arr_count]=="Reggae/World":
					try:
						world_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/world.png")
						print("world found")
						pyautogui.click(world_location)
						break
					except:
						print("world not found")
					try:
						world1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/world1.png")
						print("world1 found")
						pyautogui.click(world1_location)
						break
					except:
						print("world1 not found")		
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Children's":
					try:
						childrens_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/childrens.png")
						print("childrens found")
						pyautogui.click(childrens_location)
						break
					except:
						print("childrens not found")	
					try:
						childrens1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/childrens1.png")
						print("childrens1 found")
						pyautogui.click(childrens1_location)
						break
					except:
						print("childrens1 not found")		
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="New Age":
					try:
						new_age_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/new_age.png")
						print("new_age found")
						pyautogui.click(new_age_location)
						break
					except:
						print("new_age not found")	
					try:
						new_age1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/new_age1.png")
						print("new_age1 found")
						pyautogui.click(new_age1_location)
						break
					except:
						print("new_age1 not found")		
						
				elif data_for_upload_arr[data_for_upload_arr_count]=="Comedy / Spoken" or data_for_upload_arr[data_for_upload_arr_count]=="Comedy":
					try:
						comedy_spoken_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/comedy_spoken.png")
						print("comedy_spoken found")
						pyautogui.click(comedy_spoken_location)
						break
					except:
						print("comedy_spoken not found")
					try:
						comedy_spoken1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/comedy_spoken1.png")
						print("comedy_spoken1 found")
						pyautogui.click(comedy_spoken1_location)
						break
					except:
						print("comedy_spoken1 not found")		
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Box Sets":
					try:
						box_sets_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/box_sets.png")
						print("box_sets found")
						pyautogui.click(box_sets_location)
						break
					except:
						print("box_sets not found")	
					try:
						box_sets1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/box_sets1.png")
						print("box_sets1 found")
						pyautogui.click(box_sets1_location)
						break
					except:
						print("box_sets1 not found")		
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Classical Composer" or data_for_upload_arr[data_for_upload_arr_count]=="Classical Artists (Classical Composer)":
					try:
						classical_composer_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/classical_composer.png")
						print("classical_composer found")
						pyautogui.click(classical_composer_location)
						break
					except:
						print("classical_composer not found")	
					try:
						classical_composer1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/classical_composer1.png")
						print("classical_composer1 found")
						pyautogui.click(classical_composer1_location)
						break
					except:
						print("classical_composer1 not found")		
						
				elif data_for_upload_arr[data_for_upload_arr_count]=="Seasonal":
					try:
						genre_scroller_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/genre_scroller.png")
						print("genre_scroller found")
						pyautogui.click(genre_scroller)
					except:
						print("genre_scroller not found")	
					try:
						time.sleep(0.5)
						seasonal_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/seasonal.png")
						print("seasonal found")
						pyautogui.click(seasonal_location)
						break
					except:
						print("seasonal not found")	
					try:
						seasonal1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/seasonal1.png")
						print("seasonal1 found")
						pyautogui.click(seasonal1_location)
						break
					except:
						print("seasonal1 not found")		
				else:
					print("genre-type not found")
					pyautogui.click(genre_locationx+135,genre_locationy)
					file_.write("Pending\n")
					issue_count+=1
					pending_flag=True
					genre_not_found+=data_for_upload_arr[data_for_upload_arr_count]+"\n"
					break
									
			data_for_upload_arr_count=data_for_upload_arr_count+1
			break
		except:	
			print("Waiting for response from genreMusic")	

def genreMovie():
	global data_for_upload_arr, data_for_upload_arr_count, genre_not_found, username, pending_flag, issue_count
	while True:
		try:
			genre_locationx, genre_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/genre.png")
			print("genreMovie found")
			pyautogui.click(genre_locationx+135,genre_locationy)
			# time.sleep(0.5)
			while True:
				if data_for_upload_arr[data_for_upload_arr_count]=="Horror" or data_for_upload_arr[data_for_upload_arr_count]=="TV Horror,  Foreign-French":
					try:
						horror_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/horror.png")
						print("horror found")
						pyautogui.click(horror_location)
						break
					except:
						print("horror not found")	
					try:
						horror1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/horror1.png")
						print("horror1 found")
						pyautogui.click(horror1_location)
						break
					except:
						print("horror1 not found")
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Drama" or data_for_upload_arr[data_for_upload_arr_count]=="TV Mini-Series,  Drama" or data_for_upload_arr[data_for_upload_arr_count]=="Drama,  Foreign-German" or data_for_upload_arr[data_for_upload_arr_count]=="TV Drama" or data_for_upload_arr[data_for_upload_arr_count]=="Drama,  Biography" or data_for_upload_arr[data_for_upload_arr_count]=="TV Crime" or data_for_upload_arr[data_for_upload_arr_count]=="TV Western" or data_for_upload_arr[data_for_upload_arr_count]=="Family-Live Action,  Drama-Classics (Silent Films)" or data_for_upload_arr[data_for_upload_arr_count]=="Drama,  Foreign-Chinese" or data_for_upload_arr[data_for_upload_arr_count]=="Drama,  Sci-Fi-Contemporary" or data_for_upload_arr[data_for_upload_arr_count]=="Drama-Classics" or data_for_upload_arr[data_for_upload_arr_count]=="Drama,  Drama-Classics (Silent Films)" or data_for_upload_arr[data_for_upload_arr_count]=="Drama,  Foreign-French":		
					try:
						drama_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/drama.png")
						print("drama found")
						pyautogui.click(drama_location)
						break
					except:
						print("drama not found")	
					try:
						drama1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/drama1.png")
						print("drama1 found")
						pyautogui.click(drama1_location)
						break
					except:
						print("drama1 not found")
		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Anime-Japanese" or data_for_upload_arr[data_for_upload_arr_count]=="Animation" or data_for_upload_arr[data_for_upload_arr_count]=="Animation, Comedy, Kids & Family" or data_for_upload_arr[data_for_upload_arr_count]=="TV Animation,  Animation - Super Hero" or data_for_upload_arr[data_for_upload_arr_count]=="Family-Disney,  Animation" or data_for_upload_arr[data_for_upload_arr_count]=="TV Animation,  Family-Pbs Kids" or data_for_upload_arr[data_for_upload_arr_count]=="Holiday-Christmas (Animated)" or data_for_upload_arr[data_for_upload_arr_count]=="Family-Animated,  Animation" or data_for_upload_arr[data_for_upload_arr_count]=="Family,  Animation":
					try:
						anime_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/anime.png")
						print("anime found")
						pyautogui.click(anime_location)
						break
					except:
						print("anime not found")	
					try:
						anime1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/anime1.png")
						print("anime1 found")
						pyautogui.click(anime1_location)
						break
					except:
						print("anime1 not found")

				elif data_for_upload_arr[data_for_upload_arr_count]=="Xmas Vocal" or data_for_upload_arr[data_for_upload_arr_count]=="Classical Artists" or data_for_upload_arr[data_for_upload_arr_count]=="Country":
					try:
						musicals_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/musicals.png")
						print("musicals found")
						pyautogui.click(musicals_location)
						break
					except:
						print("musicals not found")	
					try:
						musicals1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/musicals1.png")
						print("musicals1 found")
						pyautogui.click(musicals1_location)
						break
					except:
						print("musicals1 not found")
				elif data_for_upload_arr[data_for_upload_arr_count]=="TV Action &amp; Adventure,  Action-Super Hero" or data_for_upload_arr[data_for_upload_arr_count]=="Action / Adventure" or data_for_upload_arr[data_for_upload_arr_count]=="Action-Super Hero" or data_for_upload_arr[data_for_upload_arr_count]=="Action / Adventure,  Foreign-French" or data_for_upload_arr[data_for_upload_arr_count]=="Western" or data_for_upload_arr[data_for_upload_arr_count]=="TV Action &amp; Adventure":
					try:
						action_adventure_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/action_adventure.png")
						print("action_adventure found")
						pyautogui.click(action_adventure_location)
						break
					except:
						print("action_adventure not found")	
					try:
						action_adventure1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/action_adventure1.png")
						print("action_adventure1 found")
						pyautogui.click(action_adventure1_location)
						break
					except:
						print("action_adventure1 not found")
				elif data_for_upload_arr[data_for_upload_arr_count]=="Action-Super Hero,  Comedy-Contemporary" or data_for_upload_arr[data_for_upload_arr_count]=="Comedy" or data_for_upload_arr[data_for_upload_arr_count]=="Comedy-Contemporary" or data_for_upload_arr[data_for_upload_arr_count]=="Comedy-Classic,  Drama-Classics (Silent Films)" or data_for_upload_arr[data_for_upload_arr_count]=="Comedy-Classic" or data_for_upload_arr[data_for_upload_arr_count]=="Comedy-Stand-Up Comedy" or data_for_upload_arr[data_for_upload_arr_count]=="Comedy Video" or data_for_upload_arr[data_for_upload_arr_count]=="Comedy Video,  Drama-Classics (Silent Films)":
					try:
						comedy_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/comedy.png")
						print("comedy found")
						pyautogui.click(comedy_location)
						break
					except:
						print("comedy not found")	
					try:
						comedy1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/comedy1.png")
						print("comedy1 found")
						pyautogui.click(comedy1_location)
						break
					except:
						print("comedy1 not found")	
				elif data_for_upload_arr[data_for_upload_arr_count]=="Sci-Fi-Contemporary" or data_for_upload_arr[data_for_upload_arr_count]=="Sci-Fi / Fantasy" or data_for_upload_arr[data_for_upload_arr_count]=="Sci-Fi-Classic,  Comedy-Classic" or data_for_upload_arr[data_for_upload_arr_count]=="Sci-Fi-Classic,  Foreign-French":
					try:
						sci_fi_fantasy_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/sci_fi_fantasy.png")
						print("sci_fi_fantasy found")
						pyautogui.click(sci_fi_fantasy_location)
						break
					except:
						print("sci_fi_fantasy not found")	
					try:
						sci_fi_fantasy1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/sci_fi_fantasy1.png")
						print("sci_fi_fantasy1 found")
						pyautogui.click(sci_fi_fantasy1_location)
						break
					except:
						print("sci_fi_fantasy1 not found")	

				elif data_for_upload_arr[data_for_upload_arr_count]=="Box Sets":
					try:
						box_sets_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/box_sets.png")
						print("box_sets found")
						pyautogui.click(box_sets_location)
						break
					except:
						print("box_sets not found")	
					try:
						box_sets1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/box_sets1.png")
						print("box_sets1 found")
						pyautogui.click(box_sets1_location)
						break
					except:
						print("box_sets1 not found")				

				elif data_for_upload_arr[data_for_upload_arr_count]=="Cine Latino":
					try:
						cine_latino_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/cine_latino.png")
						print("cine_latino found")
						pyautogui.click(cine_latino_location)
						break
					except:
						print("cine_latino not found")	
					try:
						cine_latino1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/cine_latino1.png")
						print("cine_latino1 found")
						pyautogui.click(cine_latino1_location)
						break
					except:
						print("cine_latino1 not found")		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Criterion Collection":
					try:
						criterion_collection_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/criterion_collection.png")
						print("criterion_collection found")
						pyautogui.click(criterion_collection_location)
						break
					except:
						print("criterion_collection not found")	
					try:
						criterion_collection1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/criterion_collection1.png")
						print("criterion_collection1 found")
						pyautogui.click(criterion_collection1_location)
						break
					except:
						print("criterion_collection1 not found")	
				elif data_for_upload_arr[data_for_upload_arr_count]=="Documentary" or data_for_upload_arr[data_for_upload_arr_count]=="Special Interest-Documentary" or data_for_upload_arr[data_for_upload_arr_count]=="Special Interest-Documentary,  Sports-Baseball":
					try:
						documentary_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/documentary.png")
						print("documentary found")
						pyautogui.click(documentary_location)
						break
					except:
						print("documentary not found")	
					try:
						documentary1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/documentary1.png")
						print("documentary1 found")
						pyautogui.click(documentary1_location)
						break
					except:
						print("documentary1 not found")	
				elif data_for_upload_arr[data_for_upload_arr_count]=="Education":
					try:
						education_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/education.png")
						print("education found")
						pyautogui.click(education_location)
						break
					except:
						print("education not found")	
					try:
						education1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/education1.png")
						print("education1 found")
						pyautogui.click(education1_location)
						break
					except:
						print("education1 not found")	
				elif data_for_upload_arr[data_for_upload_arr_count]=="Foreign Films" or data_for_upload_arr[data_for_upload_arr_count]=="Westerns-Contemporary" or data_for_upload_arr[data_for_upload_arr_count]=="Foreign" or data_for_upload_arr[data_for_upload_arr_count]=="Drama-Classics,  Foreign-French" or data_for_upload_arr[data_for_upload_arr_count]=="Comedy-Classic,  Foreign-French" or data_for_upload_arr[data_for_upload_arr_count]=="TV Crime,  Foreign-French":
					try:
						foreign_films_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/foreign_films.png")
						print("foreign_films found")
						pyautogui.click(foreign_films_location)
						break
					except:
						print("foreign_films not found")	
					try:
						foreign_films1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/foreign_films1.png")
						print("foreign_films1 found")
						pyautogui.click(foreign_films1_location)
						break
					except:
						print("foreign_films1 not found")					
				elif data_for_upload_arr[data_for_upload_arr_count]=="Kids / Family" or data_for_upload_arr[data_for_upload_arr_count]=="Animation - Childrens,  Family-Pbs Kids" or data_for_upload_arr[data_for_upload_arr_count]=="Family" or data_for_upload_arr[data_for_upload_arr_count]=="TV Family,  Family-Live Action" or data_for_upload_arr[data_for_upload_arr_count]=="Children's Video":
					try:
						kids_family_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/kids_family.png")
						print("kids_family found")
						pyautogui.click(kids_family_location)
						break
					except:
						print("kids_family not found")	
					try:
						kids_family1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/kids_family1.png")
						print("kids_family1 found")
						pyautogui.click(kids_family1_location)
						break
					except:
						print("kids_family1 not found")			
				elif data_for_upload_arr[data_for_upload_arr_count]=="Leasure":
					try:
						leasure_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/leasure.png")
						print("leasure found")
						pyautogui.click(leasure_location)
						break
					except:
						print("leasure not found")	
					try:
						leasure1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/leasure1.png")
						print("leasure1 found")
						pyautogui.click(leasure1_location)
						break
					except:
						print("leasure1 not found")	
				elif data_for_upload_arr[data_for_upload_arr_count]=="Music Video / Concerts" or data_for_upload_arr[data_for_upload_arr_count]=="Rock" or data_for_upload_arr[data_for_upload_arr_count]=="Westerns-Classics" or data_for_upload_arr[data_for_upload_arr_count]=="Gospel(Religion)" or data_for_upload_arr[data_for_upload_arr_count]=="Christian(Religion)":
					try:
						music_video_concerts_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/music_video_concerts.png")
						print("music_video_concerts found")
						pyautogui.click(music_video_concerts_location)
						break
					except:
						print("music_video_concerts not found")	
					try:
						music_video_concerts1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/music_video_concerts1.png")
						print("music_video_concerts1 found")
						pyautogui.click(music_video_concerts1_location)
						break
					except:
						print("music_video_concerts1 not found")		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Mystery / Suspense" or data_for_upload_arr[data_for_upload_arr_count]=="Mystery / Suspense,  Biography":
					try:
						mystery_suspense_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/mystery_suspense.png")
						print("mystery_suspense found")
						pyautogui.click(mystery_suspense_location)
						break
					except:
						print("mystery_suspense not found")	
					try:
						mystery_suspense1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/mystery_suspense1.png")
						print("mystery_suspense1 found")
						pyautogui.click(mystery_suspense1_location)
						break
					except:
						print("mystery_suspense1 not found")					
				elif data_for_upload_arr[data_for_upload_arr_count]=="Seasonal":	
					try:
						seasonal_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/seasonal.png")
						print("seasonal found")
						pyautogui.click(seasonal_location)
						break
					except:
						print("seasonal not found")	
					try:
						seasonal1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/seasonal1.png")
						print("seasonal1 found")
						pyautogui.click(seasonal1_location)
						break
					except:
						print("seasonal1 not found")		
				elif data_for_upload_arr[data_for_upload_arr_count]=="Sports / Fitness" or data_for_upload_arr[data_for_upload_arr_count]=="Sports":	
					try:
						sports_fitness_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/sports_fitness.png")
						print("sports_fitness found")
						pyautogui.click(sports_fitness_location)
						break
					except:
						print("sports_fitness not found")	
					try:
						sports_fitness1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/sports_fitness1.png")
						print("sports_fitness1 found")
						pyautogui.click(sports_fitness1_location)
						break
					except:
						print("sports_fitness1 not found")				
				elif data_for_upload_arr[data_for_upload_arr_count]=="Travel":
					try:
						genre_scroller_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/genre_scroller.png")
						print("genre_scroller found")
						pyautogui.click(genre_scroller)
					except:
						print("genre_scroller not found")	
					try:
						time.sleep(0.5)
						travel_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/travel.png")
						print("travel found")
						pyautogui.click(travel_location)
						break
					except:
						print("travel not found")	
					try:
						travel1_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/travel1.png")
						print("travel1 found")
						pyautogui.click(travel1_location)
						break
					except:
						print("travel1 not found")		
				else:
					print("genre-type not found")	
					pyautogui.click(genre_locationx+135,genre_locationy)
					file_.write("Pending\n")
					issue_count+=1
					pending_flag=True
					genre_not_found+=data_for_upload_arr[data_for_upload_arr_count]+"\n"
					break
								
			data_for_upload_arr_count=data_for_upload_arr_count+1
			break
		except:	
			try:
				tv_format_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/tv_format.png")
				print("tv_format found")
				data_for_upload_arr_count=data_for_upload_arr_count+1
				break
			except:
				print("Waiting for response from genreMovie")
			



def enable_on_site_tick():
	global username
	while True:
		try:
			# time.sleep(1.0)
			uncheck_locationx, uncheck_locationy=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/uncheck.png")
			print("uncheck found")
			pyautogui.click(uncheck_locationx-20, uncheck_locationy)
			break
		except:	
			print("Waiting for response from uncheck")
		try:
			# time.sleep(1.0)
			check_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/check.png")
			print("check found")
			break
		except:	
			print("Waiting for response from check")	

	# # plu_check()
	# time.sleep(1.0)
	# pyautogui.click(plu_locationx+716, plu_locationy+51)				

def save():	
	global username
	while True:
		try:
			# time.sleep(1.0)
			save_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/save.png")
			print("save found")
			pyautogui.click(save_location)
			break
		except:	
			print("Waiting for response from save")
	# plu_check()
	# time.sleep(1.0)
	# pyautogui.click(plu_locationx+746, plu_locationy+521)	
	# pyautogui.click(plu_locationx+750, plu_locationy+543)

def save_alert():	
	global upload_status, username, pending_flag
	while True:
		try:
			# time.sleep(1.0)
			nothing_to_save_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/nothing_to_save.png")
			print("nothing_to_save found")
			time.sleep(1.0)
			nothing_to_save_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/nothing_to_save_ok.png")
			print("nothing_to_save_ok found")
			pyautogui.click(nothing_to_save_ok_location)
			upload_status=upload_status+"Already Uploaded\n"
			if not pending_flag:
				file_.write("Already Uploaded\n")
			break
		except:		
			try:
				# time.sleep(1.0)
				specification_has_been_saved_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/specification_has_been_saved.png")
				print("specification_has_been_saved found")
				nothing_to_save_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/nothing_to_save_ok.png")
				print("specification_has_been_saved_ok found")
				pyautogui.click(nothing_to_save_ok_location)
				upload_status=upload_status+"Uploaded\n"
				if not pending_flag:
					file_.write("Uploaded\n")
				break
			except:	
				try:
					# time.sleep(1.0)
					spec_not_save_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/spec_not_save.png")
					print("spec_not_save found")
					nothing_to_save_ok_location=pyautogui.locateCenterOnScreen("/home/"+username+"/Pictures/spec_upload/nothing_to_save_ok.png")
					print("spec_not_save_ok found")
					pyautogui.click(nothing_to_save_ok_location)
					save()
				except:	
					print("Waiting for response from specification_has_been_saved")	
				
issue_count=0
pending_flag=False
username = getpass.getuser()
print(username)
genre_not_found="Genre Not Found:\n"
format_not_found="Format Not Found:\n"
file_ = open('spec_upload_new_log', 'a+')

file_.write("\n\n"+str(date.today())+"\n")
upload_status=""
# input("Please copy specification and then press enter")
data_for_upload = pyperclip.paste()
data_for_upload_arr = [""]*10000
data_for_upload_arr_count=0
data_for_upload_arr[data_for_upload_arr_count]=""
for x in range(len(data_for_upload)):
	if(data_for_upload[x]=="\n"):
		data_for_upload_arr_count=data_for_upload_arr_count+1;
		print(str(data_for_upload_arr_count-1)+"    "+data_for_upload_arr[data_for_upload_arr_count-1])
	else:	
		data_for_upload_arr[data_for_upload_arr_count]=data_for_upload_arr[data_for_upload_arr_count]+data_for_upload[x]

print(str(data_for_upload_arr_count)+"    "+data_for_upload_arr[data_for_upload_arr_count])		

data_for_upload_arr_count=0

while data_for_upload_arr[data_for_upload_arr_count]!="":
	plu()
	edit()
	product_format()
	# genre()
	enable_on_site_tick()
	save()
	save_alert()
	pending_flag=False

if(genre_not_found!="Genre Not Found:\n"):
	file_.write("\n\n"+genre_not_found)
if(format_not_found!="Format Not Found:\n"):
	file_.write("\n\n"+format_not_found)

	
tkinter.messagebox.showinfo(title="Specification Uploaded", message="Issues Detected:"+str(issue_count)+"\nPlease check log file")
print("End")	