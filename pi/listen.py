import speech_recognition as sr
r = sr.Recognizer()

with sr.WavFile("test.wav") as source:
	audio = r.record(source)

try:
	print r.recognize(audio)
except LookupError:
	print "ERR"