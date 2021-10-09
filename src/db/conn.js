const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb://localhost:27017/olympics',

    { useNewUrlParser: true },
    { useUnifiedTopology: true }
  )
  .then(() => {
    console.log('Connection is setup with MongoDB');
  })
  .catch((err) => {
    console.log('Connection Failed with MongoDB');
  });
