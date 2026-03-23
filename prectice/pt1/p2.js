function myTimer() {

  const d = new Date();

  document.getElementById("demo").innerHTML = d.toLocaleTimeString();

}

setInterval(myTimer, 1000);

