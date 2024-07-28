#!/usr/bin/env bash

source .env

STEAM_API_LIB=`find /rating-update/target/release/build/ -name libsteam_api.so`

while true; do
	crash_count=`ls /data/crash-* | wc -l`
	if [ $crash_count -gt 5 ]; then
		sleep 60
	fi;

	if [ $crash_count -gt 20 ]; then
		sleep 240
	fi;

	if [ $crash_count -gt 32 ]; then
		exit 1
	fi;

	LD_PRELOAD="$STEAM_API_LIB" target/release/rating-update $@
	mv "${LOGFILE_PATH}" /data/crash-`date +%s`.log
	sleep 5
done;


