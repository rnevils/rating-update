FROM docker.io/rustlang/rust:nightly as builder

WORKDIR /rating-update
COPY . .
RUN cargo build --release


FROM ubuntu:latest

RUN mkdir /app
COPY docker_scripts/startx.sh /app
COPY --from=builder /rating-update /rating-update

ENV TZ=Etc/UTC
RUN DEBIAN_FRONTEND=noninteractive \
  && ln -fs /usr/share/zoneinfo/Etc/UTC /etc/localtime \
  && dpkg --add-architecture i386 \
  && apt-get update \
  && apt-get install -y steam xvfb x11vnc dbus-x11

#VNC
EXPOSE 5900/tcp

#app
EXPOSE 8000/tcp

CMD ["bash", "/app/startx.sh"]
