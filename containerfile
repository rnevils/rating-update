FROM docker.io/rustlang/rust:nightly AS BUILD

WORKDIR /build
COPY . .
RUN cargo build --release

FROM docker.io/steamcmd/steamcmd:latest

RUN mkdir /startup
COPY ./docker_scripts /startup
COPY --from=BUILD /build /rating-update

ENTRYPOINT ["/startup/entrypoint.sh"]
