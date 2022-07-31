import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.on('waterFull', () => {
  console.log('pls turn off motor!');
  setTimeout(() => {
      console.log('pls turn off motor!');
  }, 3000);
});

myEmitter.emit('waterFull');