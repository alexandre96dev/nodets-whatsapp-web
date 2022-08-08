import express, {Request, Response} from 'express';
import mainRoutes from './routes/index';
import path from 'path';
import mustache from 'mustache-express';

const server = express()

//setando o mustache como template engine
server.set('view engine', 'mustache')

//setando a pasta views como pasta padrão das views do projeto
server.set('views', path.join(__dirname, 'views'))
console.log(path.join(__dirname, 'views'))
//configurando a engine com o mustache
server.engine('mustache', mustache())

server.use(express.static(path.join(__dirname, '../public')))

server.use(express.urlencoded({extended: true}))

server.use(mainRoutes)

server.use((req:Request, res:Response)=>{
    res.status(404).send('Pagina não encontrada')
})

server.listen(3000)