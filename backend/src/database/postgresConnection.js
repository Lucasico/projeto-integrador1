const { createConnection } = require('typeorm');

const connectionOptions = require('./connectionOptions');

createConnection(connectionOptions)
  .then(() => {
    console.info('Database Connected');
  })
  .catch((e) => {
    console.error('Error Connecting With Database', e);
  });
