app.controller('GuideCtrl', function($scope, $http, guideFactory){
    guideFactory
    .getGuide()
    .then((res)=>{
            $scope.guide = res
            console.log("$scope.guide", $scope.guide);
    })


})
