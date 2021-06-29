import express from 'express';

const app = express();

app.get('/test', (req, res) => {
  return res.send('Olá, João')
})

app.listen(3333, () => console.log('Server is running'));