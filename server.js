const express = require('express');
const app = express();
const port = 4000;

const routes = require('./api/routes/appRoutes');
routes(app);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

app.listen(port);

console.log('Server running on port ' + port);
