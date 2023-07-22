import { WebApp } from './deps.ts';
import './database.ts';
import { initRoutes } from './router.ts';

const app = new WebApp();

initRoutes(app);
const port = Deno.env.get('PORT');
app.listen(parseInt(port || '8080'));
