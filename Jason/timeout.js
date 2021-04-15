function doSomething(){
    console.log(33330);
};
console.log(12000);
setTimeout(()=> {console.log("waiting"),1000});
console.log(2000);

setInterval(function doSomething(){
    console.log(33330);

}, 1000);
