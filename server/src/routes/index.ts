import { Express } from 'express';
import postsRouter from './posts';
import authRouter from './auth';
import usersRouter from './users';

export default (app: Express) => {
  // all routes files need to be called here
  authRouter(app);
  postsRouter(app);
  usersRouter(app);

  //@ts-ignore
  app.use((err, req, res, next) => {
    console.error(err.stack);
    console.log('yooooooooooooooo errrooooooooooor');
    res.status(500).send('Something broke!');
  });
}
