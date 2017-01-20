app.factory('guideFactory', function($http){
    return{
        getGuide(){
            return $http.get('data/guides.json')
            .then((res)=>{
                console.log("res", res);
                return res.data.guides
            })
        }
    }
})
