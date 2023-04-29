const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.metal.com/Lithium-ion-Battery/202303240001';

const scrape = async () => {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const element = $('span.strong___1JlBD.priceDown___2TbRQ').first();
    const value = element.text();
    return value;
  } catch (error) {
    throw new Error('Unable to retrieve the latest price.');
  }
};

module.exports = scrape;
