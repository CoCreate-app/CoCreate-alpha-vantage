const http = require('http');

const API_KEY = 'TRGN6DECILJLHBBE';
const FUNCTION = 'TIME_SERIES_DAILY'; // TIME_SERIES_INTRADAY, TIME_SERIES_DAILY, TIME_SERIES_DAILY_ADJUSTED, TIME_SERIES_WEEKLY, TIME_SERIES_WEEKLY_ADJUSTED, TIME_SERIES_MONTHLY, TIME_SERIES_MONTHLY_ADJUSTED, GLOBAL_QUOTE, FX_INTRADAY, FX_DAILY, FX_WEEKLY, FX_MONTHLY, CRYPTO_INTRADAY, CRYPTO_DAILY, CRYPTO_WEEKLY, CRYPTO_MONTHLY
const SYMBOL = 'IBM';
const OUTPUTSIZE = 'full';  // compact, full
const DATATYPE = 'json';  // json, csv

const URL = `http://www.alphavantage.co/query?function=${FUNCTION}&symbol=${SYMBOL}&apikey=${API_KEY}&outputsize=${OUTPUTSIZE}`;

http.get(URL, (res) => {
    let data = '';

    // A chunk of data has been received.
    res.on('data', (chunk) => {
        data += chunk;
    });

    // The whole response has been received.
    res.on('end', () => {
        console.log(JSON.parse(data));
    });
}).on("error", (err) => {
    console.error("Error: " + err.message);
});
