const express = require('express');
const mensRoute = require('./routers/mensRoute');
const port = process.env.Port || 5000;
const app = express();

//-----------------POst---------------//
app.use(express.json()); // Handling Json

app.use(mensRoute);

app.listen(port, () => {
  console.log(`Listen to ${port}`);
});
