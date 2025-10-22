import server from './server'

// configuramos el puerto
const port = process.env.PORT || 4000

server.listen(port, () => {
console.log(`REST API funcionando en ${port}`)
})