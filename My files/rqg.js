const quoteArrays = [
{quote: '"He suffers more than necessary, who suffers before it is necessary."', author: 'Epictetus'},
{quote: '"Begin at once to live, and count each seperate day as a separate life."', author: 'Epictetus'},
{quote: '"If you want to be a writer, WRITE!"', author: 'Seneca'},
{quote: '"Only put off until tomorrow, what you are willing to die having left undone"', author:  'Pablo Picasso'},
{quote: '"We have two lives, and the second one begins when we realize we only have one"', author: 'Confucius'},
{quote: '"Think of yourself as dead. You have lived your life. Now, take what\'s left and live it properly"', author: 'Marcus Aurelius'},
]

//Function that pulls a random array object
const pullRandom = () => {
    const randomQuote = Math.floor(Math.random() * quoteArrays.length);
    if(randomQuote > -1) {
        console.log(randomQuote);
        console.log(`${quoteArrays[randomQuote].quote}- ${quoteArrays[randomQuote].author}`);
}
    }
    

const getRandom = pullRandom();