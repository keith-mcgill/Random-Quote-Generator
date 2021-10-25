/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// Variable that holds all of the quote objects that will be displayed on the web page.
const quotes = [
  {quote: '"He suffers more than necessary, who suffers before it is necessary."', source: 'Epictetus'},
  {quote: '"Begin at once to live, and count each seperate day as a separate life."', source: 'Epictetus'},
  {quote: '"If you want to be a writer, WRITE!"', source: 'Seneca'},
  {quote: '"Only put off until tomorrow, what you are willing to die having left undone"', source:  'Pablo Picasso', year: '1963'},
  {quote: '"We have two lives, and the second one begins when we realize we only have one"', source: 'Confucius'},
  {quote: '"Think of yourself as dead. You have lived your life. Now, take what\'s left and live it properly"', source: 'Marcus Aurelius'},
  {quote: '"A computer is like a mischievious genie. It will give you exactly what you ask for, but not always what you want"', source: 'Joe Sondow', citation: 'freeCodeCamp.org'},
  {quote: '"The major key to your better future......is YOU"', source: 'Jim Rohn'},
  {quote: '"Truth is not what you want it to be; it is what it is, and you must bend to it\'s power, or live a lie."', source: 'Miyamota Musashi'},
  {quote: '"Do not wait to strike till the iron is hot; but make it hot by striking"',
   source: 'William B. Sprague',
   citation: 'YouTube',
   year: '1865'   
  }
  ]


/***
 * `getRandomQuote` function
***/

/**
* function that generates a random number from the quotes array length and returns an array object using the random number
*
* @param {array} arr - The array argument that will be passed into the function.
* @returns {variable} - Holding array object back to the function calling it.
*/
const getRandomQuote = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
      let quote = arr[randomNumber];
      console.log(quote)
      return quote;
  }

/***
 * `printQuote` function
***/

/**
 * function that calls the geRandomQuote fucntion to get a random quote then displays the random quote to the web page using <p> and <span> tags. 
 * 
 */

const printQuote = () => {
  // Created a variable that calls the getRandomQuote() function.
      const getQuote = getRandomQuote(quotes);
      // variable that builds the HTML string to display on the page.
      let quoteParagraphs = '<p class="quote">' + getQuote.quote + '</p>' + '<p class="source">' + getQuote.source;
      // tests to see if the quote object has a citation key and adds a citation span to the string if true.
      if(getQuote.citation) {
         quoteParagraphs += '<span class="citation">' + getQuote.citation + '</span>'
      }
      // tests to see if the quote object has a year key and adds a year span to the string if true.
      if(getQuote.year) {
          quoteParagraphs += '<span class="year">' + getQuote.year  + '</span>'
      }
      // appends the final closing paragraph element tag to the final string after all conditional tests.
      quoteParagraphs += '</p>'
      //console.log(quoteParagraphs)
      // sets the quoteParagraphs string into the inner HTML of the web page.
      document.getElementById('quote-box').innerHTML = quoteParagraphs; 
  
  }
  // calls the printQuote function to set all actions into motion
  printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);