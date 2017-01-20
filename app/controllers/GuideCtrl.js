app.controller('GuideCtrl', function($scope, $http){
    $http.get('data/guides.json')
        .then((res)=>{
            console.log("res", res.data);
            //return res.data.guides
            $scope.guide = res.data.guides
            console.log($scope.guide)
        })

})
