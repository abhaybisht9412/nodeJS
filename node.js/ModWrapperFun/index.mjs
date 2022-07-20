// const Name = 'abhay' ;
// console.log(Name);
//bts - har file module kehlata hai...us file k andar jo bhi scope hota hai wo sab by default private hota hai !
//IIFE concept of grouping functions into private

//module wrapper function IIFE

//  ( function(exports,require,module,__filename,__dirname){         //this is module wrapper function this is by default called  
//     const Name = 'abhay' ;
//     console.log(Name);
//  } ) this is by default format of nodejs IIFE
// exports,require,module,__filename,__dirname these are seperately local for each module . these are not global

 
//wrapper funvction
( function (){
    var a = 'abhay';
}) ();

console.log(a); //error
 
