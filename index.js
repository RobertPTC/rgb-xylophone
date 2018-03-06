const express = require('express');

const app = new express();

app.use(express.static('src'));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/index.html`);
});

app.listen(4444, () => {
  console.log('app listening on port 4444');
});
