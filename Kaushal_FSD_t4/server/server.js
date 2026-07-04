const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/hi')
    .then(()=>{console.log('success')})
    .catch((err)=>(console.error(err)))



// create schema
const myschema = new mg.Schema({name:String,age:Number,status:Boolean})

mg.pluralize(null)
//create Model
const person = new mg.model('person',myschema)

//save data
const pdata=new person({name:'ABC',age:20,status:'true'})
pdata.save()