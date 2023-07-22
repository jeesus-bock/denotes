# denotes - testing deno and stuff

A testbed repo for testdriving deno, messing with docker and writing plain sql queries without fancy bells.
### The Javascript engine:
- deno https://deno.land/

### Dependencies:

- denorest https://denorest.deno.dev/
- deno-postgres https://deno-postgres.com/#/

### Containerization
- `docker compose build` build the deno image
- `docker compose up` run deno and postgres services
- `docker compose down --volumes` get a clean slate, for example when you change the db credentials or something.