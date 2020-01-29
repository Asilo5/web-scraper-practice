var Nightmare = require('nightmare');
var nightmare = Nightmare({ show: true });

nightmare
  .goto('https://www.rightmove.co.uk/')
  .wait(2000)
  .click('input[name="searchLocation"]')
  .type('input[name="searchLocation"]', 'finsbury park')
  .wait(2000)
  .click('button[name="rent"]')
  .wait(2000)
  .click('button[type="submit"]')
  .wait(2000)
  .evaluate((result, done) => {
      const listings = Array.from(document.querySelectorAll('div[class="propertyCard-section"]')).map(listing => listing.innerHTML);
      return listings;
  })
  .end()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.error('Search failed:', error);
  });