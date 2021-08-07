const mongoose = require('mongoose')
//const password= require('./password.js')
//const {model , Schema}= mongoose

const connectionString=process.env.MONGO_DB_URI
//mongodb+srv://root:<password>@cluster0.cbbyq.mongodb.net/test
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

   

 // Auto.find({}).then(result=>{
     // console.log(result)
     // mongoose.connection.close()
 // })

    //const Evento = model('Evento', eventoSchema)
    //const evento = new Evento({
       // Título:        'Reunion',
       // Descripción:   'Capacitacion',
        //Destacado:     true,
       // Lugar:         'Remoto',
       // Imágen:        ("https://picsum.photos/120/120"),
        //Lista_de_fechas:   '2021/08/01'

 // })

  //evento.save()
    //.then(result =>{
       // console.log(result)
       // mongoose.connection.close()
   //})
    //.catch(err =>{
       //console.error(err)
    //})

