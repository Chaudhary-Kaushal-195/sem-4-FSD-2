var fs=require("fs")
fs.writeFile("help.txt","You are creating a file ",function(e){
    if(e) throw e;
    else{
        console.log("File created successfully")
        fs.appendFile("help.txt","You are appendinng the data",function(e){
            if(e) throw e;
            else{
                console.log("Data appended successfully")
                fs.readFile("help.txt","utf-8",function(e,data){
                    if(e) throw e;
                    console.log(data)
                    console.log("Thanks for using my program")
                })
            }
        })
    }
})