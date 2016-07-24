// angular.module('starter.controllers', ['$scope', '$ionicModal'])
angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

})

.controller('VaksinCtrl', function($scope) {

})

// .controller('FullscreenImageCtrl', function($scope, $ionicModal) {
.controller('FullscreenImageCtrl', ['$scope', '$ionicModal', function ($scope, $ionicModal) {

    // $ionicModal.fromTemplateUrl('image-modal.html', {
    $ionicModal.fromTemplateUrl('image', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function(modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function() {
      $scope.modal.show();
    };

    $scope.closeModal = function() {
      $scope.modal.hide();
    };

    //Cleanup the modal when we're done with it!
    $scope.$on('$destroy', function() {
      $scope.modal.remove();
    });
    // Execute action on hide modal
    $scope.$on('modal.hide', function() {
      // Execute action
    });
    // Execute action on remove modal
    $scope.$on('modal.removed', function() {
      // Execute action
    });
    $scope.$on('modal.shown', function() {
      console.log('Modal is shown!');
    });

    $scope.imageSrc = 'http://ionicframework.com/img/ionic-logo-blog.png';

    $scope.showImage = function(index) {
      switch(index) {
        case 1:
          $scope.imageSrc = 'http://1.bp.blogspot.com/-wrcral5Fg5g/UQUbVyH__AI/AAAAAAAAAJw/FKNP9tGFdXg/s1600/DSC_0133.JPG';
          break;
        case 2:
          $scope.imageSrc  = 'http://3.bp.blogspot.com/-kITbvOUHWfY/VHDF1H6QkmI/AAAAAAAAGzA/gYtLOOkPUHU/s1600/Foto%2Bdan%2BGambar%2BKucing%2BAnggora%2B6.jpg';
          break;
        case 3:
          $scope.imageSrc  = 'http://3.bp.blogspot.com/-CoQ3aEDmiZU/UGRPKOBabuI/AAAAAAAACj8/XNUAFBb4yaE/s1600/Kucing+Persia.jpg';
          break;
        case 4:
          $scope.imageSrc  = 'http://1.bp.blogspot.com/-JCc8FvrqGAY/VY38Mzuw9eI/AAAAAAAAAqU/w9sX4eoR6ZA/s1600/Kucing-Bengal-snow.jpg';
          break;
        case 5:
          $scope.imageSrc  = 'http://2.bp.blogspot.com/-XvpsDUVrtA4/VpEtoYLcZhI/AAAAAAAAhF8/QTfNoY-nwBs/s1600/Kucing%2BMunchkin%2BHarga.jpg';
          break;
        case 6:
          $scope.imageSrc  = 'http://3.bp.blogspot.com/-wg880_nKOL0/UQvQKUaS4BI/AAAAAAAAAOM/2kneWFmxZ4w/s1600/DSC_0413.JPG';
          break;
          case 7:
            $scope.imageSrc  = 'http://iliketowastemytime.com/sites/default/files/imagecache/blog_image/pet-lynx-pavel-svetlana-kaluga2.jpg';
            break;
      }
      $scope.openModal();
    }
  }

])
// })

// .controller('DashCtrl', function($scope) {
//
// })

.controller('NutriCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('TipsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
