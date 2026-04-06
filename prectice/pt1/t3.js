function A(a,b,C){
 var sum=a+b;
 C(sum)
}
function B(data){
    console.log(data);
}
A(5,6,B)