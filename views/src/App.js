import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/usersRoutes.js';

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use('/api/users', usersRoutes);

app.listen(port, () =>
  console.log(`Server running on port: http://localhost:${port}`)
);
