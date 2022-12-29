const { spy } = require("chai");

function receivesAFunction(callback){
    const spy=callback();
}

receivesAFunction(spy);


function returnsANamedFunction(){
    return function namedfunction(){
        console.log("Hello everyone");
    }
}

function  returnsAnAnonymousFunction(){
    return function(){
        console.log("hello hello");
    }
}
