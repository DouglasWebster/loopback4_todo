import {TodoApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {TodoApplication};

export async function main(options?: ApplicationConfig) {
  const app = new TodoApplication(options);
  await app.boot();
  await app.start();
  return app;
}
