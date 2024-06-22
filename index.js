// Fundamentals of javaScript:-
// arrays and objects
// function and return
// async js coding
// foreach map filter find indexOf

var arr=[1,2,3,4];

var newarr=arr.map((val)=>{
     return 13;
});

console.log(newarr);


let ans=arr.filter(function(val){
    if(val>3){
        return true;
    }
    else{
        return false;
    }
}
);
console.log(ans);

console.log(arr.indexOf(2));

// Objects:-
let obj={
    name:'jashan',
}

console.log(obj.name);

// if you want to make constant the object
Object.freeze(obj);


function abcd(){
    return 2;
}

// async js:-
var blob=await fetch(`https://randomuser.me/api/`);
var res=await blob.json();
console.log(res);
