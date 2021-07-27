
const{Schema , model}= require('mongoose') 

const autoSchema = new Schema({
    vehiculo:   String,
    marca:      String,
    anio:       Number,
    descripcion: String,
    vendido:   Boolean,
    created:   Date,
    updated:   Date
  })

  const Auto = model('Auto', autoSchema)
  module.exports= Auto
