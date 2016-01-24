
(function(){
"use strict";

angular
  .module('main')
  .controller('PicsController',function($interval,$scope,$state,$stateParams,$timeout,PicsService){
    $scope.albums= ['one','two','three','four'];
    $scope.albumObject = {
      // /Users/cglane/Desktop/FreelanceProjects/VDL/albums/three/
      one:[
        '9141509479_0d6d5fff8b_b.jpg',
        'clemson-m.jpg'
      ],
      two:[
        '9141509479_0d6d5fff8b_b%20(1).jpg',
        '9141509479_0d6d5fff8b_b(1).jpg',
        '9141509479_0d6d5fff8b_b(1).jpg',
      ],
      three:[
        '9141509479_0d6d5fff8b_b.jpg',
        '9141509479_0d6d5fff8b_b.jpg',
        '9141509479_0d6d5fff8b_b.jpg',
      ],
      four:[
        '9141509479_0d6d5fff8b_b%20(1).jpg',
        '9141509479_0d6d5fff8b_b(1).jpg',
        '9141509479_0d6d5fff8b_b(1).jpg',
      ]
    }
    //changing state
    $scope.album = $stateParams.album; //getting fooVal
    $scope.startLocation = $stateParams.startLocation;
  //..
    $scope.state = $state.current;
    $scope.params = $stateParams;
    //---------------- carousel--------//
    var myIncement = 600;
    var startLocation = $scope.startLocation;
      $scope.getCarouselPics = function(){
        var firstPic = $scope.albumObject[$scope.album][$scope.startLocation]
        $scope.carouselPics = [];
        $scope.carouselPics.push(firstPic);//starting location for carousel
        _.each($scope.albumObject[$scope.album],function(el){
          if(el != firstPic){
            $scope.carouselPics.push(el);
          }
        });
        console.log('getCarouselPics',$scope.carouselPics)
      };
      $scope.carouselMargin = {
        left:'400px'
      }
      var left = 400;
      $scope.moveLeft = function(){
        left -= myIncement;
        $scope.carouselMargin = {
          left: left+'px',
        }
      }
      $scope.moveRight = function(){
        console.log(left,'left')
        left += myIncement;
        $scope.carouselMargin = {
          left: left+'px',
        }
      }
      $scope.moveUp = function(){
        console.log('move-up')
        $('.main-div').css('margin-top','-400px')
      }
      $scope.moveDown = function(){
        $('.main-div').css('margin-top','0px');
        $state.go('pics');

      }
      $scope.showMenu= function(bool){
        if(bool){
          $scope.fadeCarousel = 'fade-half';
          $scope.showMenuClass = 'fade-in';

        }else{
          $scope.fadeCarousel = 'fade-whole';
          $scope.showMenuClass = 'fade-out';
        }
      }
      $scope.showContact = function(bool){
        if(bool)
        $('.contact-wrapper').css('top','50px');
        else{
          $('.contact-wrapper').css('top','-500px');
        }
      }


  });
})();
