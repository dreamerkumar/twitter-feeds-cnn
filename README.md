Rendering Tweets with Angular & Node
===================

A responsive web application that displays twitter feeds


Installing and Running
----

Install [Node.js](http://nodejs.org/).

Clone GitHub repo:

```
git clone https://github.com/dreamerkumar/twitter-feeds-cnn.git
```

Integrating with Twitter API
----
A twitter application has already been created and the required Twitter App API Keys exist in config.js file. However, these keys will only work for a short time.

You should generate your own keys under your own login. For that, you will need to [create a Twitter application](https://apps.twitter.com/) using your twitter account. See screenshot for the same in the application-screenshots folder. From the created application, copy over the consumer key and consumer secret to the config.js file. Also generate an access token and access token secret. Update the config.js file with these values as well. 

Install node module dependencies:

```
npm install 
```

Run application:

```
npm start
```

Go to [http://localhost:5000](http://localhost:5000) in your browser.


Resources
----
- [Angular Developer Guide](https://docs.angularjs.org/guide)
- [Twitter API User Timeline Documentaion](https://dev.twitter.com/docs/api/1.1/get/statuses/user_timeline)
- [Twitter API oEmbed Documentation](https://dev.twitter.com/docs/api/1/get/statuses/oembed)