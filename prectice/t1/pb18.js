var obj = JSON.parse(
    '{"fruit":"apple"}',
     function(a,b) 
        {
            if(b=="apple"){
                console.log(a,b);
                return "orange"; 
            }
            else 
                return b;
        }
)
console.log(obj)