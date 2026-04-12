// Write node js script to handle events as asked below.

// 1) Check the radius is negative or not. If negative then display message “Radius” must be positive” else calculate the perimeter of circle. 

// 2) Check side is negative or not. If negative then display message “Side must be positive” else calculate the perimeter of square.



var fs=require('fs')
var e=require('events')
var ee = new e()




ee.on('check',()=>{
    fs.writeFile('new.txt','That is data',(err)=>{
        if(err) throw err
        console.log('write done')

    })
})
ee.emit('check')
