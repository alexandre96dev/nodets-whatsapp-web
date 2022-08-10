import { Router, Request, Response } from "express";
import { Client, LocalAuth, MessageMedia } from 'whatsapp-web.js';
import  QRCode from "qrcode";
import qrcodeterminal from 'qrcode-terminal'
import jwt from "jsonwebtoken";

const router = Router()
let qrcode: any = '';
let qrMsg: any = '';
const client = new Client({
    authStrategy : new LocalAuth()
});
router.get('/login', (req: Request, res:Response, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 1);
    const id: number = 1;
    const token = jwt.sign({ id }, 'teste', {
        expiresIn: 300 // expires in 5min
    });
    client.on('qr', qr => {

        //console.log(typeof qrcodeterminal.generate(qr, {small: true}))
        QRCode.toDataURL(qr)
        .then(url => {
            console.log(url)
            qrcode = url
        })
        .catch(err => {
            console.error(err)
        })
    });

    client.on('ready', () => {
        console.log('Client is ready!');
        qrMsg = 'ready';
        client.sendMessage('558181093595@c.us', `Lembrete para nossa reunião as 21:30 OBS: essa msg foi enviada pela API`);
    }); 
    client.initialize();
    return res.status(200).json({ auth: true, token: token });
    next();
})

router.get('/', (req: Request, res:Response, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 1);
    console.log("acessou")
    
    return res.json({msg: qrcode})
   next();
})

router.get('/teste', (req: Request, res:Response, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 1);
    res.json({qrcode:qrcode})
    /*
    client.sendMessage('558192812164@c.us', `The bot has chats open.`);
    client.sendMessage('558187772234@c.us', `The bot has chats open.`);
    */
   next();
})

router.get('/msgTest', (req: Request, res:Response, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', 1);
    
    
   next();
})
export default router;