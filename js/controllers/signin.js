'use strict';



angular.module('copay.signin').controller('SigninController',
  function($scope, $rootScope, $location, walletFactory, controllerUtils) {

//    var peerData = Storage.get($rootScope.walletId, 'peerData');
//    $rootScope.peerId = peerData ? peerData.peerId : null;
    $scope.loading = false;

    $scope.walletIds = walletFactory.getWalletIds();
    $scope.selectedWalletId = $scope.walletIds?$scope.walletIds.shift():null;

    $scope.create = function() {
      $location.path('setup');
    };

    $scope.open = function(walletId) {
      $scope.loading = true;

      var w = walletFactory.open(walletId);
      controllerUtils.setupUxHandlers(w);
      w.netStart();
    };

    $scope.join = function(cid) {
console.log('[signin.js.42:join:]'); //TODO
      $scope.loading = true;
      walletFactory.connectTo(cid, function(w) {
console.log('[signin.js.50]'); //TODO
        controllerUtils.setupUxHandlers(w);
        w.netStart();
      });
    };


//
//       if (cid) {
//         var w = walletFactory.(walletId);
        //TODO
        // Network.init(null, function() {
        //   Network.connect(cid, 
        //     function() {
        //       $location.path('peer');
        //       $rootScope.$digest();
        //     }, function() {
        //       $rootScope.flashMessage = { message: 'Connection refussed', type: 'error'};
        //       $location.path('home');
        //       $rootScope.$digest();
        //   });
        // });
//      }

    // if (peerData && peerData.peerId && peerData.connectedPeers.length > 0) {
    //   $rootScope.peerId = peerData.peerId;
    //   $scope.join(peerData.connectedPeers);
    // }
  });

