import { Router, Request, Response } from "express";
//import { Client, LocalAuth, MessageMedia } from 'whatsapp-web.js';
//import qrcodeterminal from 'qrcode-terminal'
const router = Router()
/*
const client = new Client({
    authStrategy : new LocalAuth()
});
*/

router.get('/', (req: Request, res:Response, next)=>{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', 1);
    res.json({msg: 'estou aqui, abestado'})

    /*client.on('qr', qr => {
        res.send(qrcodeterminal.generate(qr, {small: true}));
    });

    client.on('ready', () => {
        console.log('Client is ready!');
    });   
    client.on('message', async msg => {
        console.log('MESSAGE RECEIVED', msg);
    })
    client.initialize();
    */
   next();
})

router.get('/teste', (req: Request, res:Response)=>{
    /*
    client.sendMessage('558192812164@c.us', `The bot has chats open.`);
    client.sendMessage('558187772234@c.us', `The bot has chats open.`);
    */
})
export default router;