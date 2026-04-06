function A(data, C){
  // some work
  C(data);
}

function B(value){
  console.log(value);
}
A("Hello Callback", B);