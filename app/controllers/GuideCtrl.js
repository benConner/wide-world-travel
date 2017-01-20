app.controller('GuideCtrl', function($scope, $http, guideFactory){
    guideFactory
    .getGuide()
    .then((val)=>{
            $scope.guide = val
            console.log("$scope.guide", $scope.guide);
    })


})
