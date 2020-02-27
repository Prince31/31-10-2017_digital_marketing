#! /usr/bin/env python

from gimpfu import *

from glob import glob

from PIL import Image

import os

def image_resize():
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_01.jpg")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 329.875)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_02.jpg")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 274.75)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_03.jpg")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 331.625)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_04.jpg")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 332.5)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_05.jpg")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 331.625)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_06.png")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 266)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_07.png")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 185.5)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_08.jpg")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 241.5)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_09.png")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 1000, 455)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_10.jpg")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 214.375)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_11.png")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 1000, 368)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_12.jpg")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 213.5)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_13.jpg")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 245)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_14.jpg")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 323.75)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_15.png")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 216.125)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_16.png")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 350, 219.625)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
    fname = os.path.join(os.path.expanduser("~"), "Desktop", "webami", "9698063","images", "9698063_17.png")
    img = pdb.gimp_file_load(fname, fname)
    pdb.gimp_image_scale(img, 1000, 488)
    drawable = pdb.gimp_image_active_drawable(img)
    if img.name.find("png") == -1:
        pdb.file_jpeg_save(img, drawable, fname, img.name, 0.9, 0, 0, 0, "", 0, 0, 0, 0)
    else:
        pdb.file_png_save(img, drawable, fname, img.name,0,9,1,1,1,1,1)
    pdb.gimp_image_delete(img)
register(
        "image_resize",
        "Prints a message from Willy invert_current_layer",
        "Prints a message from Willy invert_current_layer",
        "User3870315",
        "User3870315",
        "2015",
        "<Toolbox>/Tools/image_resize",
        "",
        [],
        [],
        image_resize)

main()