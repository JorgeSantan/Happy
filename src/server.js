// Importar dependencia
const express = require('express');
const path = require('path');
const pages = require('./pages.js');




// Iniciando express 
const server = express()
server
// Utilizando os arquivos estaticos
.use(express.static('public'))
// utilizando body do req
.use(express.urlencoded({ extended:true }))

// Configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs')
// Criar uma rota
.get('/', pages.index)
.get('/orphanage', pages.orphanage)
.get('/orphanages', pages.orphanages)
.get('/create-orphanage', pages.createOrphanage)
.post('/save-orphanage', pages.saveOrphanage)

    
   


// Ligando servidor
server.listen(5500)