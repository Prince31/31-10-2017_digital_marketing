import pyperclip, time
from goto import with_goto

@with_goto
def header_training():
	global header_text, html_text, pair, pair_count
	angle_bracket_start=0
	header_attributes=""
	header_text_length=int(len(header_text))
	for i in range(len(html_text)):
		if html_text[i]=="<":
			angle_bracket_start=i
		elif html_text[i:i+header_text_length] == header_text:
			temp_angle_bracket_start=angle_bracket_start
			while html_text[angle_bracket_start]!=">":
				header_attributes+=html_text[angle_bracket_start]
				angle_bracket_start+=1
			i=angle_bracket_start	
			header_attributes+=">\n"
	# if pair[0]=="" and pair_count==0:
	if header_attributes=="":
		print("Header attribute not found. Retry")
		return 0
	print(header_text)
	pair[pair_count]=header_attributes
	pair_count+=1
	# else:
	# 	common_line_check=""
	# 	for i in range(len(header_attributes)):
	# 		if(header_attributes[i]=="\n"):
	# 			for i1 in range(pair_count):
	# 				common_line_check_index=pair[i1].find(common_line_check)
	# 				if common_line_check_index!=-1 :
	# 					goto .begin

	# 			common_line_check=""		
	# 		else:
	# 			common_line_check+=header_attributes[i]	

	# 	pair[pair_count]=header_attributes
	# 	pair_count+=1	

	# 	label .begin


#code to remove tags with greater matches from entire body as tag with greater match out of two
#exact matches has lesser probability of being a tag we want.

def multipleTagRemove(pair_final_part1, pair_final_part2):
	part1_count=0; part2_count=0
	for i in range(len(html_text)):
		if html_text[i:i+len(pair_final_part1)]==pair_final_part1:
			part1_count+=1
		elif	html_text[i:i+len(pair_final_part2)]==pair_final_part2:
			part2_count+=1
	if part1_count>part2_count:
		return 1
	elif part1_count<part2_count:
		return	0
	else:
		return	0		


file_html_body=open("samsung_body", "r")
html_text = file_html_body.read()
time.sleep(1.0)
pair=[""]*10000
pair_count=0
while True:
	temp_header_text=input("Please copy Header and then press enter")
	if(temp_header_text=="end123"):
		break
	header_text=">"+ pyperclip.paste()
	
	time.sleep(1.0)
	
	header_training()	

pair_final=[""]*10000
pair_final_count=0

#code to find tags which occurs in max pairs from a given pair
print("start")		
print(pair)
print("done")
for i in pair:
	if i=="":
		break
	loop_count=0
	common_pair_final_last_count=0
	common_pair_final=""
	while True:
		if i[loop_count-1:loop_count+1]==">\n":

			common_pair_final_count=0

			for i1 in pair:
				if i1=="":
					break
				common_pair_final_index=i1.find(common_pair_final)
				if(common_pair_final_index!=-1):
					common_pair_final_count+=1
					print("common_pair_final_index")
			if common_pair_final_count>common_pair_final_last_count:
					pair_final[pair_final_count]=common_pair_final+"\n"
					common_pair_final_last_count=common_pair_final_count	
			elif common_pair_final_count==common_pair_final_last_count:

				if(pair_final[pair_final_count]!=common_pair_final):
					tag_remove_ans=multipleTagRemove(pair_final[pair_final_count], common_pair_final)
					if tag_remove_ans==1:
						pair_final[pair_final_count]=common_pair_final+"\n"
						common_pair_final_last_count=common_pair_final_count
			common_pair_final=""	
		else:
			common_pair_final+=i[loop_count]	
		loop_count+=1
		if loop_count==len(i):
			break
	pair_final_count+=1


#code to keep unique tags only:
for i in range(pair_final_count):
	for i1 in range(pair_final_count):
		if(pair_final[pair_final_count-(i+1)]==pair_final[i1] and i1!=pair_final_count-(i+1)):
			pair_final[pair_final_count-(i+1)]=""
			break


file_html_body=open("header_weights", "r")
header_weights = file_html_body.read()

if header_weights!="":
	header_weights+="\n"
	# print("start")		
	# print(pair_final)
	# print("done")
	for i in pair_final:
		if i=="":
			break

		common_header_weights_index=header_weights.find(i)
		if common_header_weights_index==-1:
			header_weights+=i
			print(header_weights+""+i)
else:

	i=0
	while pair_final[i]!="":
		header_weights+=str(pair_final[i])
		i+=1



header_weights=header_weights.strip()
file_header_weights = open('header_weights', 'w')
file_header_weights.write(header_weights)	