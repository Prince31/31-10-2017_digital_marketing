#!/usr/bin/env python3
import pyautogui, time, pyperclip

def loading():
	while True:
		try:
			global upc
			# time.sleep(1.0)
			tab_logo_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/webami_infinite/tab_logo.png")
			print("Page load for upc: "+upc)
			break
		except:
			print("waiting for page load for upc: "+upc)
			
def body():
	while True:
		try:
			global upc
			global last_upc
			# time.sleep(1.0)
			body_locationx, body_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/webami_infinite/body.png")
			print("body detected for upc: "+upc)
			pyautogui.click(body_locationx-30,body_locationy)
			# time.sleep(1.0)
			pyautogui.hotkey('ctrl', 'c')
			time.sleep(0.5)
			page = pyperclip.paste()
			file_.write(page)
			if(last_upc == 0):
				file_.write("*1234567890#")
			break
		except:
			print("waiting for body for upc: "+upc)
		# inspector_close()	

def inspector_close():
	while True:
		try:
			global upc
			# time.sleep(1.0)
			inspector_close_location=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/webami_infinite/inspector_close.png")
			pyautogui.click(inspector_close_location)	
			break
		except:
			print("waiting for inspector_close for upc: "+upc)		

def html():
	while True:
		try:	
			global upc
			global file_
			# time.sleep(1.0)
			search_locationx, search_locationy=pyautogui.locateCenterOnScreen("/home/princesethi/Pictures/webami_infinite/search.png")
			pyautogui.click(search_locationx,search_locationy+50)
			pyautogui.hotkey('ctrl', 'a')
			# time.sleep(1.0)
			pyperclip.copy("https://webami.aent.com/"+upc)
			pyautogui.hotkey('ctrl', 'v')
			pyautogui.press('enter')
			break						
		except:	
			print("Waiting for response from search at upc: "+ upc)
	loading()
	pyautogui.press("f12")
	body()		

last_upc = 0
file_ = open('page.html', 'w')
upc = "602577508547"
html()
upc = "714822890045"
html()
upc = "602577644245"
html()
upc = "785147006220"
html()
upc = "603497856121"
html()
upc = "602567722793"
html()
upc = "801837701722"
html()
upc = "708630007887"
html()
upc = "6430065587361"
html()
upc = "6430065587378"
html()
upc = "644110038616"
html()
upc = "644110038623"
html()
upc = "822603981315"
html()
upc = "028948369133"
html()
upc = "3700477828400"
html()
upc = "886922841224"
html()
upc = "886922841217"
html()
upc = "602577524547"
html()
upc = "5060262791516"
html()
upc = "761203513925"
html()
upc = "5060113445209"
html()
upc = "5060113445193"
html()
upc = "5028421957661"
html()
upc = "644216810611"
html()
upc = "644216810512"
html()
upc = "4260234831948"
html()
upc = "4260234832082"
html()
upc = "885470012131"
html()
upc = "810016760214"
html()
upc = "5029365101660"
html()
upc = "805859068528"
html()
upc = "805859068627"
html()
upc = "5028165109425"
html()
upc = "602567790631"
html()
upc = "190295605223"
html()
upc = "822603950922"
html()
upc = "822603150919"
html()
upc = "7320470240885"
html()
upc = "193483692616"
html()
upc = "5024709173112"
html()
upc = "5028421958354"
html()
upc = "5028421957845"
html()
upc = "8007194107067"
html()
upc = "5028421956060"
html()
upc = "44747368528"
html()
upc = "5028165109821"
html()
upc = "647213312836"
html()
upc = "647213312829"
html()
upc = "8436556421228"
html()
upc = "5052442015628"
html()
upc = "5024545852011"
html()
upc = "889466136610"
html()
upc = "8007068222537"
html()
upc = "16861740726"
html()
upc = "5016198443128"
html()
upc = "8007194107012"
html()
upc = "892118001174"
html()
upc = "5902547015484"
html()
upc = "5055036265652"
html()
upc = "5055036215657"
html()
upc = "5016958162825"
html()
upc = "5016958162917"
html()
upc = "8021945003439"
html()
upc = "602577487828"
html()
upc = "602577394911"
html()
upc = "192641064661"
html()
upc = "602577656187"
html()
upc = "653078763492"
html()
upc = "7318590024355"
html()
upc = "5991813280527"
html()
upc = "602577640285"
html()
upc = "028948328697"
html()
upc = "634457813922"
html()
upc = "634457813915"
html()
upc = "4260036255553"
html()
upc = "5060113444271"
html()
upc = "5028421958224"
html()
upc = "803847117227"
html()
upc = "7318599923642"
html()
upc = "635212057421"
html()
upc = "4050538478624"
html()
upc = "4050538478631"
html()
upc = "4600317124961"
html()
upc = "5060189561001"
html()
upc = "039841565027"
html()
upc = "801837013726"
html()
upc = "5060446123386"
html()
upc = "5060446123379"
html()
upc = "821826025509"
html()
upc = "821826025493"
html()
upc = "7318599923475"
html()
upc = "811408032285"
html()
upc = "811408032292"
html()
upc = "602577509230"
html()
upc = "028948348909"
html()
upc = "714822890052"
html()
upc = "8424562235175"
html()
upc = "7350049515670"
html()
upc = "7350049515687"
html()
upc = "662582718928"
html()
upc = "705438068829"
html()
upc = "4260036256574"
html()
upc = "653738032814"
html()
upc = "617884941529"
html()
upc = "673681140794"
html()
upc = "673681140756"
html()
upc = "888072092051"
html()
upc = "822231703228"
html()
upc = "887828044627"
html()
upc = "887828044610"
html()
upc = "061297807789"
html()
upc = "8007068123728"
html()
upc = "090771408112"
html()
upc = "602567636168"
html()
upc = "888072099548"
html()
upc = "602577426582"
html()
upc = "644216808519"
html()
upc = "644216808410"
html()
upc = "4050538479515"
html()
upc = "4050538479539"
html()
upc = "829421770640"
html()
upc = "4022143977656"
html()
upc = "095115213629"
html()
upc = "710357597626"
html()
upc = "677516148313"
html()
upc = "7318599924205"
html()
upc = "020286228530"
html()
upc = "4260036256550"
html()
upc = "602577456077"
html()
upc = "600685102916"
html()
upc = "7318599922850"
html()
upc = "885470011943"
html()
upc = "5410939803125"
html()
upc = "4018767039016"
html()
upc = "602577384011"
html()
upc = "608917282122"
html()
upc = "095115523520"
html()
upc = "5060216349084"
html()
upc = "648401027129"
html()
upc = "648401027112"
html()
upc = "5028421959092"
html()
upc = "5060146099363"
html()
upc = "761203519224"
html()
upc = "889466136818"
html()
upc = "840588122776"
html()
upc = "840588122783"
html()
upc = "5060262791479"
html()
upc = "8435408099349"
html()
upc = "5028421959115"
html()
upc = "822252240627"
html()
upc = "5028421957357"
html()
upc = "655646189864"
html()
upc = "028948369942"
html()
upc = "602577587214"
html()
upc = "843563111413"
html()
upc = "662582710328"
html()
upc = "848064008842"
html()
upc = "9120040732196"
html()
upc = "602577426704"
html()
upc = "028948370870"
html()
upc = "093674604254"
html()
upc = "808720027020"
html()
upc = "808720027013"
html()
upc = "7318599922324"
html()
upc = "4260123643140"
html()
upc = "044747366425"
html()
upc = "843190049967"
html()
upc = "5029365101769"
html()
upc = "5400863011055"
html()
upc = "5400863011048"
html()
upc = "635212057520"
html()
upc = "4260158839792"
html()
upc = "4260158839808"
html()
upc = "4260158839990"
html()
upc = "4260158839839"
html()
upc = "4260158839815"
html()
upc = "829421584018"
html()
upc = "888072090187"
html()
upc = "687606011526"
html()
upc = "853739006962"
html()
upc = "819873018773"
html()
upc = "819873018766"
html()
upc = "711574869114"
html()
upc = "822252240924"
html()
upc = "4050486115930"
html()
upc = "677517301328"
html()
upc = "677517301311"
html()
upc = "7640123420144"
html()
upc = "761203523023"
html()
upc = "3375250219401"
html()
upc = "028948348947"
html()
upc = "4050538477306"
html()
upc = "4050538477313"
html()
upc = "801837013221"
html()
upc = "885470012919"
html()
upc = "632433350324"
html()
upc = "801837013924"
html()
upc = "4600317125845"
html()
upc = "095115208328"
html()
upc = "5902547015385"
html()
upc = "5060113442062"
html()
upc = "5015959465027"
html()
upc = "710357638428"
html()
upc = "099925426620"
html()
upc = "634457822115"
html()
upc = "801061030322"
html()
upc = "801061030315"
html()
upc = "602577089992"
html()
upc = "6430065587064"
html()
upc = "6430065587071"
html()
upc = "004747371627"
html()
upc = "030911214722"
html()
upc = "705438069826"
html()
upc = "880882356828"
html()
upc = "880882356811"
html()
upc = "880882359515"
html()
upc = "193483664392"
html()
upc = "193483661889"
html()
upc = "769623609327"
html()
upc = "848064009023"
html()
upc = "018771855422"
html()
upc = "008771855514"
html()
upc = "5020926911025"
html()
upc = "889466123610"
html()
upc = "7318599923659"
html()
upc = "5410939758920"
html()
upc = "859700004623"
html()
upc = "889466121524"
html()
upc = "889466121517"
html()
upc = "4260036256598"
html()
upc = "794558041225"
html()
upc = "794558041218"
html()
upc = "603497851577"
html()
upc = "708535794127"
html()
upc = "5065001341601"
html()
upc = "827949080067"
html()
upc = "790692263417"
html()
upc = "696177656982"
html()
upc = "191400014121"
html()
upc = "191400014114"
html()
upc = "090404952524"
html()
upc = "8436556420719"
html()
upc = "5028421958170"
html()
upc = "8436556421044"
html()
upc = "5028421954318"
html()
upc = "5026328104270"
html()
upc = "5026328004273"
html()
upc = "644216810819"
html()
upc = "644216810710"
html()
upc = "857387005698"
html()
upc = "857387005674"
html()
upc = "9788895450575"
html()
upc = "8011570371294"
html()
upc = "090771408211"
html()
upc = "5902547015675"
html()
upc = "828021617423"
html()
upc = "785147004820"
html()
upc = "812474030403"
html()
upc = "812474030410"
html()
upc = "5902547014739"
html()
upc = "761203504121"
html()
upc = "4035719001761"
html()
upc = "4260234831986"
html()
upc = "608917135923"
html()
upc = "617884942229"
html()
upc = "634457812314"
html()
upc = "822603958614"
html()
upc = "634457812512"
html()
upc = "4025438073033"
html()
upc = "081227934316"
html()
upc = "191402003628"
html()
upc = "5902547012971"
html()
upc = "7318599923543"
html()
upc = "750958011138"
html()
upc = "750958011145"
html()
upc = "093624901112"
html()
upc = "093624901129"
html()
upc = "885470012117"
html()
upc = "193483397078"
html()
upc = "193483397085"
html()
upc = "4009350833104"
html()
upc = "880040419020"
html()
upc = "8007144077051"
html()
upc = "5709499832332"
html()
upc = "8007068222933"
html()
upc = "803847116916"
html()
upc = "5902547015491"
html()
upc = "602577426674"
html()
upc = "634457264120"
html()
upc = "634457264113"
html()
upc = "848064008538"
html()
upc = "761203527021"
html()
upc = "717101432622"
html()
upc = "602577404238"
html()
upc = "855380008692"
html()
upc = "855380008685"
html()
upc = "656191039024"
html()
upc = "656191039017"
html()
upc = "7318599923284"
html()
upc = "095115208625"
html()
upc = "602577527449"
html()
upc = "886922882623"
html()
upc = "886922882616"
html()
upc = "4260234831955"
html()


file_.close()