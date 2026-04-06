function task(callback){
    setTimeout(function(){
        console.log("Task completed");
        callback(next2Task);
    },200);
}

function nextTask(callback1){
    setTimeout(function(){
        console.log("Next task started");
        callback1();
    },200);
}

function next2Task(){
    setTimeout(function(){
        console.log("Next 2nd task started");
    },200);
}

task(nextTask);