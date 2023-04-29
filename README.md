# ess_pricescraper_LOHUM
*PROJECT- RestFul API which returns web scraped price of an ESS Battery Price from https://www.metal.com/Lithium-ion-Battery/202303240001

*DESCRIPTION -This is a Node.js application which servers real-time price of an ESS Battery through a REST API endpoint.

*FILES - 
** scrape.js - web scraper which uses Axios and Cheerio Libraries.It fetches the HTML content of the target website using the Axios library and extracts the latest price using Cheerio.

** index.js - entry point for the application. It uses Express to set up a REST API endpoint at '/price' that calls 'scrape.js' file to fetch the real-time price of the required object.If operation is successful it sends a JSON response with price else sends 500 HTTP status code.

*DEPENDENCIES -
** 'axios'
** 'cheerio'
** 'express'


