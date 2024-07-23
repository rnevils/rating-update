#!/usr/bin/env bash

# source .env

STEAM_API_LIB=`find /rating-update/target/release/build/ -name libsteam_api.so`

while true; do
	crash_count=`ls /data/crash-* | wc -l`
	if [ $crash_count -gt 5 ]; then
		exit
	fi;

	LD_PRELOAD="$STEAM_API_LIB" target/release/rating-update $@
	mv "${LOGFILE_PATH}" /data/crash-`date -I`.log
	sleep 5
done;


