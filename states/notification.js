import push from 'push.js';
let promise

export const create = (title = '', body = '', icon = '') => {
    promise = push.create(title, {
      body,
      icon,
      timeout: 12000,
    });
  }
  export const onClick = (click) => { click }
  export const close = () => { promise && promise.then(function (notification) { notification.close() }) }
