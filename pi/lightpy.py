#!/usr/bin/python

import sys, getopt

args = getopt.getopt(sys.argv, [])
args = args[1][1]

import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BCM)
GPIO.setup(21, GPIO.OUT)

GPIO.output(21, int(args))