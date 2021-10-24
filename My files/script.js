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
const quotes = [
  {quote: '"He suffers more than necessary, who suffers before it is necessary."', source: 'Epictetus'},
  {quote: '"Begin at once to live, and count each seperate day as a separate life."', source: 'Epictetus'},
  {quote: '"If you want to be a writer, WRITE!"', source: 'Seneca'},
  {quote: '"Only put off until tomorrow, what you are willing to die having left undone"', source:  'Pablo Picasso', year: '1963'},
  {quote: '"We have two lives, and the second one begins when we realize we only have one"', source: 'Confucius'},
  {quote: '"Think of yourself as dead. You have lived your life. Now, take what\'s left and live it properly"', source: 'Marcus Aurelius'},
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
//function that generates a random number from the array length and returns an array object using the random number
const getRandomQuote = (arr) => {
  const randomNumber = Math.floor(Math.random() * arr.length);
      let quote = arr[randomNumber];
      return quote;
  }

/***
 * `printQuote` function
***/
//function that displays the random quote to the web page using <p> and <span> tags.
const printQuote = () => {
  // Created a variable that calls the getRandomQuote() function.
      const getQuote = getRandomQuote(quotes);
  
      let quoteParagraphs = `<p class="quotes">${getQuote.quote}</p> <p class="source">${getQuote.source}`
      if(getQuote.citation) {
         quoteParagraphs += `<span class="citation">${getQuote.citation}</span>`
      }
      if(getQuote.year) {
          quoteParagraphs += `<span class="year">${getQuote.year}</span>`
      }
      quoteParagraphs += `</p>`
      console.log(quoteParagraphs)
  
      document.getElementById('quote-box').innerHTML = quoteParagraphs; 
  
  }
  printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);