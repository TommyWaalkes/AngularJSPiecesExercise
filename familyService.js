"use strict";
{
    function familyService(){
    let family =[
        {name: "Joey", relation: "son", age: 32},
        {name: "Phil", relation:"son", age:35},
        {name: "Billy", relation: "unknown", age:"Old as dirt, but looks like a 10 year old"}
    
    ];
    const getFamily = function(){
        return family;
    };

    const setFamily = function(newFamily){
        family = newFamily;
    };

    return {
        getFamily,
        setFamily
    }
}
}