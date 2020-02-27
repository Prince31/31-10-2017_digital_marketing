import shutil, os
print(os.getcwd())
for oldFile in os.listdir("./prod_big"):
  	newFile=oldFile.replace( "prod", "big" )
	oldPath = os.path.join(os.path.expanduser('~'), 'Desktop', 'prod_big',oldFile)
	newPath = os.path.join(os.path.expanduser('~'), 'Desktop', 'prod_big',newFile)
	shutil.move(oldPath, newPath)