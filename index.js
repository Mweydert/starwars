'use strict';

var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
}];


function getRandomQuote()
{
  var randomIndex = Math.floor(Math.random()*quotes.length);
  var randomQuote = quotes[randomIndex];

  ReactDOM.render(
    React.createElement('h1', null, randomQuote.author),
   document.getElementById('quote-author')
   );

   ReactDOM.render(
     React.createElement('h2',null, randomQuote.quote),
    document.getElementById('quote-content')
    );

    ReactDOM.render(
      React.createElement('h2',null, randomQuote.quote),
     document.getElementById('quote-content')
     );
}
getRandomQuote();


function getQuoteFrom(string)
{
  var regexExpression = new RegExp(string);
  var arr = [];
  for(var i=0; i<quotes.length; i++)
  {
    if(regexExpression.test(quotes[i].author))
    {
      arr.push(quotes[i]);
    }
  }

  var randomIndex2 = Math.floor(Math.random()*arr.length);
  ReactDOM.render(
    React.createElement('h2',null, arr[randomIndex2].quote),
   document.getElementById('darthVader-content')
   );
}

console.log("Get quote of : Yoda");
getQuoteFrom("Yoda"); //attention au maj
