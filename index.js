
const express = require('express')
const app= express()
const cors = require('cors')
const Vehiculo= require('./models/Auto')
//const logger= require('./loggerMiddleware')
require('./mongo')


app.use(cors())
app.use(express.json())


//const http= require('http')

let vehiculos=[]
    //{
        //"id":1,
        //"content":"Aprendiendo Node.js",
        //"date":"2021-05-10",
        //"important":true
   // },
   // {
       // "id":2,
        //"content":"Aprendiendo Node.js",
       // "date":"2021-05-10",
       // "important":false
    //},
    //{
        //"id":3,
       // "content":"Repasando conceptos en  Node.js",
       // "date":"2021-05-10",
       // "important":true
   // }
//]


//const app = http.createServer((request , response)=> {
   // response.writeHead(200,{'content-'})
    //response.end('Hello World')
//})

app.get('/',(request,response)=>{
    response.send('<h1> Automoviles</h1>')
})

app.get('/api/vehiculos',(request, response)=>{
    Vehiculo.find({}).then(vehiculos=>{
        response.json(vehiculos)

    })
     
})

app.get('/api/notes/:id',(request, response)=>{
    const id=Number(request.params.id)
    const note= notes.find(note =>note.id === id)
    if (note){
        response.json(note)
    }else{
     response.status(404).end()
    }
    //console.log({note})
    //response.json(note)
})

app.delete('/api/notes/:id',(request, response)=>{
    const id=Number(request.params.id)
    notes= notes.filter(note => note.id != id)
    response.status(204).end()
})

app.post('/api/notes',(request, response)=>{
    const note = request.body
    if (!note || !note.content){
        return response.status(400).json({
            error: 'note.content is missing'
        })
    }


    const ids= notes.map(note => note.id)
    const maxId= Math.max(...ids)

    const newNote = {
        id:maxId + 1,
        content : note.content,
        important: typeof note.important != 'undefined'? note.important :false,
        date: new Date().toISOString()
    }
    //console.log(note)
    notes=[...notes, newNote]
    response.json(newNote)
})

app.use((request, response)=>{
    response.status(404).json({
        error:'Not found'
    })
})

const PORT= 3002
app.listen(PORT,()=>{
    console.log('Server running en port ${PORT}') 
})
