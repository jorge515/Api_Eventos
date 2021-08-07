
const{Schema , model}= require('mongoose') 

const eventoSchema = new Schema({
    titulo:        String,
    descripción:   String,
    destacado:     Boolean,
    lugar:         String,
    imagen:   String,
    lista_de_fechas:   Date 
  })

  eventoSchema.set('toJSON',{
    transform:(document,  returnedObject)=>{
      returnedObject.id =returnedObject._id 
      delete returnedObject._id  
      delete returnedObject.__v
    }

  })

  const Evento = model('Evento', eventoSchema)
  module.exports= Evento
