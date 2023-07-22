import { Client } from './deps.ts';
// Just test that the connection works
const client = new Client(`postgres://${Deno.env.get('DBUSER')}:${Deno.env.get('DBPASSWORD')}@postgres:5432/${Deno.env.get('DBNAME')}`);
await client.connect();
await client.end();
