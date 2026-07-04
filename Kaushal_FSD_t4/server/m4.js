const mg=require('mongoose')
mg.connect('mongodb://127.0.0.1:27017/hi')
    .then(()=>{console.log('success')})
    .catch((err)=>(console.error(err)))



// create schema
const myschema = new mg.Schema({name:String,age:Number,status:Boolean})

mg.pluralize(null)
//create Model
const person = new mg.model('person1',myschema)

//save data
const createDoc = async()=>{
    try{
        const pdata=[{name:'xyz',age:20},{name:'pgr',age:100}]

        // const result = await person.insertMany(pdata)
        // console.log(result)

        const result1 = await person1.find({name:'xyz'})
        console.log(result1)
    }
    catch(err){
        console.log("problem")
    }
}
createDoc()