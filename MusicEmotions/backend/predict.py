import tensorflow as tf
import os
from generate_data import dl_audio
from make_spectrogram import graph_spectrogram
from PIL import Image
import numpy as np
import parse_img as parse_img
import glob
import numpy as np
import time


label_to_emot = {0:'happy', 1:'motivational', 2:'relaxing', 3:'angry', 4:'sad', 5:'tense'}


def load_graph(graph_file_path):

	with tf.gfile.GFile(graph_file_path, 'rb') as f:
		#load the pbfile and get the unserialized graph_Def
		graph_def = tf.GraphDef()
		graph_def.ParseFromString(f.read())

	#import this graph_def into a new graph
	with tf.Graph().as_default() as graph:
		tf.import_graph_def(graph_def, name="inceptionv3")

	return graph


def inference(data):

	graph = load_graph('/home/super/Desktop/output_graph.pb')

	x = graph.get_tensor_by_name('inceptionv3/DecodeJpeg:0')
	y = graph.get_tensor_by_name('inceptionv3/final_result:0')

	with tf.Session(graph = graph) as sess:
		out = sess.run(y, feed_dict={x: data})
		label = sess.run(tf.argmax(tf.squeeze(out)))
		return label


def percent(x):

	perc = (x / np.sum(x))
	return perc

def predict_song(spec_list):

	label_list = [0, 0, 0, 0, 0, 0]

	for img in spec_list:

		img = parse_img.resize_crop(img, size=299, grey = False)

		lbl = inference(img)
		label_list[lbl] += 1

	return label_list


 def predict_class(youtube_link):

		t0 = time.time()

		dl_audio_path = dl_audio(audio, None)
		specs = graph_spectrogram(dl_audio_path, 10, save = False)
		os.remove(dl_audio_path)

		perc = predict_song(specs)
		print('took %f seconds to predict.' % (time.time() - t0))

