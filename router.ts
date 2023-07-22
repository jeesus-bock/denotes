import { Router, Req, Res, WebApp } from './deps.ts';

export const initRoutes = (app: WebApp) => {
  const router = new Router();

  router.get('/', (_req: Req, res: Res) => {
    res.reply = JSON.stringify(Deno.env.toObject());
  });
  app.set(router);
};
