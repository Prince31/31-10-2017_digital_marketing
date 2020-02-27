import pyperclip, time

def header_find():
	global header_weights, body_text, header_output
	header_weights_list = header_weights.split(">\n")
	for i in range(len(header_weights_list)):
		if(i==(len(header_weights_list)-1)):
			break
		else:
			header_weights_list[i]+=">"	
	for i in range(len(body_text)):
		if body_text[i]=="<":
			print("<")
			for i1 in header_weights_list:
				print(i1)
				if body_text[i:i+len(i1)]==i1:
					print(body_text[i:i+len(i1)])
					i2=i+len(i1)
					while True:
						if(body_text[i2]=="<"):	# need to change < with opening tag to find closing tag
							header_output+="\n"
							break
						header_output+=body_text[i2]
						i2+=1

header_output=""
file_header_weights=open("header_weights", "r")
header_weights = file_header_weights.read()

input("Please copy body tag, wait for a second and then press enter")
body_text=pyperclip.paste()

header_find()

print(header_output)