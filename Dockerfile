FROM denoland/deno:latest as base

WORKDIR /denotes

COPY . ./

RUN deno cache mod.ts

CMD ["run", "--allow-net", "mod.ts"]