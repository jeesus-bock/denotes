# denotes - testing deno and stuff

A testbed repo for testdriving deno, messing with docker and writing plain sql queries without fancy bells and whistles.

### The javascript engine:
You don't have to install deno as it is provided by the docker container.
- deno https://deno.land/

### Dependencies:
The dependencies are imported in deps.ts and are automatically fetched on build.
- denorest https://denorest.deno.dev/
- deno-postgres https://deno-postgres.com/#/

### Containerization
The main way to run the app is by docker compose. For this you need to install docker https://docs.docker.com/engine/install/
- `docker compose build` Build the deno image.
- `docker compose up` Run deno and postgres services. Point browser to http://localhost:8080 to see the result.
- `docker compose down --volumes` Get a clean slate, for example when you change the db credentials or something.
