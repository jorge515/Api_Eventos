require('dotenv').config()
require('./mongo')
const express = require('express')
const app= express()
const cors = require('cors')
const Evento= require('./models/Evento')
//const { noExtendLeft } = require('sequelize/types/lib/operators')
//const logger= require('./loggerMiddleware')



app.use(cors())
app.use(express.json())


//const http= require('http')


app.get('/',(request,response)=>{
    response.send('<h1> Listado de Eventos</h1>')
})

app.get('/api/eventos',(request, response)=>{
    Evento.find({}).then(evento=>{
        response.json(evento)

    })
     
})

app.get('/api/eventos/:id',(request, response,next)=>{
    const {id} = request.params
    //const evento= eventos.find(note =>note.id === id)
    Evento.findById(id).then(evento=>{
        if (evento){
            return response.json(evento)
        }else{
         response.status(404).end()
        }
    }).catch(err =>{
        next(err)
        
    })
   
    })


app.post('/api/eventos',(request, response)=>{
    const evento = request.body

    if (!evento.titulo){
        return response.status(400).json({
            error: 'required "titulo" field is missing'
        })
    }
    const event = new Evento({
        titulo:        evento.titulo,
        descripción:   evento.descripcion,
        destacado:     evento.destacado,
        lugar:         evento.lugar,
        imágen:        ("https://picsum.photos/120/120"),
        lista_de_fechas:   evento.lista_de_fechas
    })
   
    
    //console.log(note)
    event.save().then(savedEvento=>{
        response.json(savedEvento)
    
})

})

app.put('api/eventos/:id',(request , response , next) =>{
    const {id}= request.params
    const evento = request.body

    const newEventoinfo ={
        titulo:        evento.titulo,
        descripción:   evento.descripcion,
        destacado:     evento.destacado,
        lugar:         evento.lugar,
        imágen:        evento.imagen,
        lista_de_fechas:   evento.lista_de_fechas

    }
    Evento.findByIdAndUpdate(id, newEventoinfo,{new : true})
      .then(result => {
          response.json(result)
      })
})




app.delete('/api/notes/:id',(request, response)=>{
    const id=Number(request.params.id)
    notes= notes.filter(note => note.id != id)
    response.status(204).end()
})

app.use((error, response ,next)=>{
    response.status(404).end()
})


app.use((error , request , response ,next) => {
    console.error(error)
    //console.log(error.name)
    if (error.name === 'CastError'){
        response.status(400).send({ error: 'id utilizada es incorrecta'})
    } else{
        response.status(500).end()
    }
    })
    

const PORT= process.env.PORT 
app.listen(PORT, () => {
    console.log(`Server running en port ${PORT}`) 
    
})

