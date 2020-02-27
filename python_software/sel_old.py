#!/usr/bin/env python3
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
browser = webdriver.Firefox()
browser.get('https://webami.aent.com/webami/logon?returnUrl=%2f')
elem_login = browser.find_element_by_css_selector('a.btn:nth-child(2)')
elem_login.click()
elem_cid = browser.find_element_by_css_selector('#CustId')
elem_cid.send_keys('9719')
elem_pw = browser.find_element_by_css_selector('#Password')
elem_pw.send_keys('fry')
elem_login_submit = browser.find_element_by_css_selector('input.btn')
elem_login_submit.click()
browser.get('https://webami.aent.com/3760014194566')
page = browser.page_source
file_ = open('page.html', 'w')
file_.write(page)
file_.write("*1234567890#")

browser.get('https://webami.aent.com/4260034864696')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")

browser.get('https://webami.aent.com/747313308170')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")

browser.get('https://webami.aent.com/747313389674')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")

browser.get('https://webami.aent.com/696177656999')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")

browser.get('https://webami.aent.com/3448960856324')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")

browser.get('https://webami.aent.com/8007144078188')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/4010228642926')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/9782844689221')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/761195130926')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/747313371372')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/5425019973292')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/691062060721')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/8711525527201')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/726708602420')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/9782844689146')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/8007144078386')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/608917471427')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/747313951987')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/4011790190228')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/655173118320')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/4012957310510')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/634457265721')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/809236154323')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/634457817425')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/5060676740018')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/5026328104430')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/681827949538')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/634457898127')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/600246985910')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/634457819429')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/634457267725')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/5060384615875')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/823134900424')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/623339912525')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/793579769187')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/5050580706385')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/5020145802906')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/689770738506')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/710347102724')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/710347126829')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/763467318025')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/763467318421')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/039841564624')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/039841565720')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/020286227670')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/808720026825')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/767981170121')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/193483475707')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/020286228059')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/3149020938126')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/705438069123')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/025041144025')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/5400863008512')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/802644863429')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/636551714525')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/5400863006624')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/020286228349')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/821826026629')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/819376016924')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/5037300848167')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/020286228301')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/822603189421')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/5060579520069')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/193483397269')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/803847116923')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/752830542877')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/644216263219')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/751097012727')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/888295871471')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/657481107324')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/634438507642')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/8016670115625')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/6430065587309')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/636551715126')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/636551714921')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/859700004326')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/8024391095027')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/856225005623')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/617884934828')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/810599022761')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/842812112645')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/050087372583')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/792755618721')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/602577377259')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/792755619728')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/028948362172')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/8435395502440')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/792755620021')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/792755618820')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/602577430237')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/8435395502372')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/888072084902')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/888072082106')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/192641065132')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/715187951921')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/093624900504')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/093624901327')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")
browser.get('https://webami.aent.com/093624901341')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)
file_.write("*1234567890#")

browser.get('https://webami.aent.com/093624901303')
page = browser.page_source
# file_ = open('page.html', 'a')
file_.write(page)


# file_ = open('page.html', 'a')
file_.write(page)





file_.close()
# elem_search = browser.find_element_by_css_selector('#q')
# elem_search.send_keys('4059251269946')
# elem_search_submit = browser.find_element_by_css_selector('#hd-search-submit')
# elem_search_submit.click()
# elem_dumy = browser.find_element_by_css_selector('#product-primaryinfo')
# print(elem_dumy.text)
# elem_dumy = browser.find_element_by_css_selector('#aec-main')
# print(elem_dumy.text)



# file_object = open('webami.txt', "wb")
# html = browser.page_source
# file_object.write(html)
# file_object.close() 

# playFile = open('webami.txt', 'wb')
# for chunk in browser.page_source.iter_content(100000):
# 	playFile.write(chunk)
# playFile.close()

