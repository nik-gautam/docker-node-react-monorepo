import 'reflect-metadata';
import 'dotenv/config';
import * as express from 'express';
import * as morgan from 'morgan';

(async () => {
  const app = await express();

  app.use(express.json());

  app.use(morgan('dev'));

  console.log(process.env.MONGO_URI);

  app.use('/', (_, res: express.Response) => {
    res.send('Hello api changed');
  });

  console.log('DB Connected');

  await app.listen(process.env.PORT);
  console.log(`Server started at ${process.env.PORT}`);
})();
