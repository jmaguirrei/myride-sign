
// Dependencies
import path from 'path';
import server from '@libs/server';
import getEnv from '@root/env';
import config from '../config';
import methods from './api/methods';
import initServices from './lib/services';

const env = getEnv(path);

server.init({
  env: getEnv(path),
  config,
  methods,
})
.then(() => {
  initServices({ sendrigApiKey: env['_root'].sendrigApiKey });
  console.log('Server started, DB running.....');
})
.catch(err => {
  console.log(err);
});
