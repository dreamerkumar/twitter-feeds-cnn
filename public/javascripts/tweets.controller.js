angular.module('tweets').controller('TweetsController', function($scope, $timeout, TweetsFactory) {

    /**
     * init controller and set defaults
     */
    function init () {

      // set a default username value
      $scope.username = "dreamerkumar";
      
      // empty tweet model
      $scope.tweetsResult = [];

      // initiate masonry.js
      $scope.msnry = new Masonry('#tweet-list', {
        columnWidth: 320,
        itemSelector: '.tweet-item'
      });

      // layout masonry.js on widgets.js loaded event
      twttr.events.bind('loaded', function () {
        $scope.msnry.reloadItems();
        $scope.msnry.layout();
      });

      $scope.getTweets();
    }

    /**
     * requests and processes tweet data
     */
    function getTweets (paging) {

      var params = {
        action: 'user_timeline',
        user: $scope.username
      };

      if ($scope.maxId) {
        params.max_id = $scope.maxId;
      }

      $scope.noTweetsFound = false;

      // GET request using the resource
      TweetsFactory.query(params, function (res) {

        if(!res || !res.length){
          $scope.tweetsResult = [];
          $scope.noTweetsFound = true;
        } else {

          if( angular.isUndefined(paging) ) {
            $scope.tweetsResult = [];
          }

          $scope.tweetsResult = $scope.tweetsResult.concat(res);

          // for paging - https://dev.twitter.com/docs/working-with-timelines
          $scope.maxId = res[res.length - 1].id;
        }

        // render tweets with widgets.js
        $timeout(function () {
          twttr.widgets.load();
        }, 30);

      });
    }

    /**
     * binded to @user input form
     */
    $scope.getTweets = function () {
      $scope.maxId = undefined;
      getTweets();
    }

    /**
     * binded to 'Get More Tweets' button
     */
    $scope.getMoreTweets = function () {
      getTweets(true);
    }

    init();
});