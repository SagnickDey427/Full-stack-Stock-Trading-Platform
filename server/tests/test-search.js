// Correct import for the updated v3 module
const YahooFinance = require('yahoo-finance2').default;

// Correct instantiation
const yahooFinance = new YahooFinance();

async function testSingleQuote() {
  try {
    console.log("Fetching data for AAPL...");
    
    // Fetch the single quote object
    const quote = await yahooFinance.quote('SBIN.NS');
    console.log(quote);
    
    // Print the direct properties of the object
    console.log(`\n✅ Success! Here is the data:`);
    console.log(`- Name: ${quote.shortName}`);
    console.log(`- Symbol: ${quote.symbol}`);
    console.log(`- Exchange: ${quote.fullExchangeName}`);
    console.log(`- Current Price: $${quote.regularMarketPrice}`);
    
  } catch (error) {
    // If it fails, this will explicitly tell you why instead of failing silently
    console.error(`\n🚨 Failed! Error Details:`, error.message);
  }
}
async function debugTicker() {
  const failingTicker = 'AAPL'; // Put the failing one here
  
  try {
    console.log(`Attempting to fetch: ${failingTicker}`);
    const quote = await yahooFinance.quote(failingTicker);
    console.log(quote);
  } catch (error) {
    console.error(`\n🚨 THE EXACT ERROR:`);
    console.error(`Name: ${error.name}`);
    console.error(`Message: ${error.message}`);
  }
}





debugTicker();
//testSingleQuote();