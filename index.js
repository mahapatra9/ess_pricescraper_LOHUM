const express = require('express');
const scrape = require('./scrape.js');

const app = express();
const PORT = 3000;

app.get('/price', async (req, res) => {
  try {
    const price = await scrape();
    res.json({ price });
  } catch (error) {
    res.status(500).json({ error: 'Unable to retrieve the latest price.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

