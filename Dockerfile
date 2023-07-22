FROM denoland/deno:latest as base

WORKDIR /denotes

COPY . ./

RUN deno cache server.ts

CMD ["run", "--allow-env", "--allow-read", "--allow-net", "server.ts"]