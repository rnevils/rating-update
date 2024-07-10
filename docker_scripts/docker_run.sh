docker run --rm -d --privileged --mount type=bind,source=/rating-update,target=/data --shm-size=1g -p 5900:5900 -p 8000:8000 -t ratingupdate 
