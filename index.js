var datetimeGenerator = require('tea-datetime-generator');

// index.js

const axios = require('axios');

async function getTokenDetails(name,token, accessKey, accessSign, accessTimestamp) {
 console.info('query start ' + name + ', now is ' + datetimeGenerator.generateFormattedDate("YYYY"))
  try {
    const response = await axios.get(`https://www.okx.com/api/v5/explorer/brc20/token-details?token=${token}`, {
      headers: {
        'OK-ACCESS-KEY': accessKey,
        'OK-ACCESS-SIGN': accessSign,
        'OK-ACCESS-TIMESTAMP': accessTimestamp
      }
    });
    console.info('query: end ' + name + ', now is ' + datetimeGenerator.generateFormattedDate("YYYY"))

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching token details: ${error.message}`);
  }
}

async function getBalance(name, accessKey, accessSign, accessTimestamp) {
  console.info('query start ' + name + ', now is ' + datetimeGenerator.generateFormattedDate("YYYY"));
  try {
    const response = await axios.get('https://www.okx.com/api/v5/account/balance', {
      headers: {
        'OK-ACCESS-KEY': accessKey,
        'OK-ACCESS-SIGN': accessSign,
        'OK-ACCESS-TIMESTAMP': accessTimestamp
      }
    });
    console.info('query: end ' + name + ', now is ' + datetimeGenerator.generateFormattedDate("YYYY"));
     return response.data;
  } catch (error) {
    throw new Error(`Error fetching balance: ${error.message}`);
  }
}
 module.exports = {
  getTokenDetails,
  getBalance
}