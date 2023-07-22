import { Client } from 'https://deno.land/x/postgres@v0.17.0/mod.ts';

const client = new Client('postgres://postgres:postgres@postgres:5432/test');

await client.connect();

await client.end();
