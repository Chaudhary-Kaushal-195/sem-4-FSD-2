function MainA(cl1){
    setTimeout(()=>{
        console.log("first task complete");
        cl1(thirdf);
    },2000)
}
function secondf(cl2){
    setTimeout(()=>{
        console.log("second task complete");
        cl2(fourthf);  
    },2000)
}
function thirdf(cl3){
    setTimeout(()=>{
        console.log("third task complete");
        cl3(fifthf);
    },2000)
}

function fourthf(cl4){
    setTimeout(function(){
    console.log("fourth task complete");
    cl4();
    },2000)
}
function fifthf(){
    setTimeout(function(){
    console.log("fifth task complete");
    },2000)
}

MainA(secondf)