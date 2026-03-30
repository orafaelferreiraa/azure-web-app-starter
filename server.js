const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, 'public');

app.use(express.static(publicPath));
app.use('/foo', express.static('/foo'));

app.get('*', (_request, response) => {
  response.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});