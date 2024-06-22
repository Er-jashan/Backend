// Basics of node.js
// Introduction to node.js 
// Installation of node.js and npm 

// node & npm
// Working with node and npm
// npm init


// Working with modules 
// File system operations 
// understanding http module

const fs=require('fs');

fs.writeFile("hye.txt",function(err){
    if(err)
        {
            console.log(err);
        }
        else{
            console.log("Done");
        }
});
