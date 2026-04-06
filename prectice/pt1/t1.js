function mainFunction(parameter, callback){
  // some work
  callback(parameter);
}

function callbackFunction(value){
  console.log(value);
}
mainFunction("Hello Callback", callbackFunction);