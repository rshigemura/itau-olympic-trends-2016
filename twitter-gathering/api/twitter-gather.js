var Twitter = require('twitter');

TWITTER_CONSUMER_KEY = 'vHEW4fneu5r54bogZL3enwxXj';
TWITTER_CONSUMER_SECRET = 'VmuS9OOWXfqyQt7zbfxQuaGJ7AFSnwcsbIf65FW5u2ZDZuNVJ4';
WITTER_ACCESS_TOKEN_KEY = '755919650475614208-l3DhNgfdvuObZ0JILz28FVonaKpCCBU';
TWITTER_ACCESS_TOKEN_SECRET = ' tg0XM4VmPZSfmfiEsJTXH3GMQTqG9CL7Z82IGhPoP8gjp';

var client = new Twitter({
  consumer_secret: TWITTER_CONSUMER_SECRET,
  consumer_key: TWITTER_CONSUMER_KEY,
  access_token_key: TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: TWITTER_ACCESS_TOKEN_SECRET,
});

var stream = client.stream('statuses/filter', {track: 'javascript'});
stream.on('data', function(tweet) {
  console.log(tweet.text);
});

stream.on('error', function(error) {
  throw error;
});

// You can also get the stream in a callback if you prefer.
client.stream('statuses/filter', {track: 'javascript'}, function(stream) {
  stream.on('data', function(tweet) {
    console.log(tweet.text);
  });

  stream.on('error', function(error) {
    throw error;
  });
});
