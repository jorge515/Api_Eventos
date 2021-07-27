const mongoose = require('mongoose')
const password= require('./password.js')
//const {model , Schema}= mongoose

const connectionString='mongodb+srv://Hopicuvo1:<password>@cluster0.gahqv.mongodb.net/automovil?retryWrites=true&w=majority'

//const connectionString= 'mongodb+srv://Hopicuvo1:${password}@cluster0.gahqv.mongodb.net/test'

mongoose.connect(connectionString,{
   useNewUrlParser:true,
   useUnifiedTopology:true,
   useFindAndModify:false,
   useCreateIndex:true
})



  .then(()=>{
      console.log('Database conectada')
  }).catch(err =>{
      console.error(err)
  })

  //const autoSchema = new Schema({
    //vehiculo:   String,
    //marca:      String,
    //anio:       Number,
   // descripcion: String,
    //vendido:   Boolean,
    //created:   Date,
   // updated:   Date
  //})

  //const Auto = model('Auto', autoSchema)

 // Auto.find({}).then(result=>{
     // console.log(result)
     // mongoose.connection.close()
 // })


  //const auto= new Auto({
    //vehiculo:   'Camioneta',
    //marca:     'Toyota',
    //anio:       '2021',
    //descripcion: 'doble cabina',
    //vendido:   true,
    //created:  new Date(),
    //updated:   new Date()

  //})

  //auto.save()
    //.then(result =>{
        //console.log(result)
       // mongoose.connection.close()
   // })
    //.catch(err =>{
       //console.error(err)
   // })

