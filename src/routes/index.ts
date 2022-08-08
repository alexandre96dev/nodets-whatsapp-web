import { Router, Request, Response } from "express";
import { Client, LocalAuth, MessageMedia } from 'whatsapp-web.js';
import qrcodeterminal from 'qrcode-terminal'
import venom from 'venom-bot';
const router = Router()
const client = new Client({
    authStrategy : new LocalAuth()
});


router.get('/', (req: Request, res:Response)=>{
    
   

    client.on('qr', qr => {
        res.send(qrcodeterminal.generate(qr, {small: true}));
    });

    client.on('ready', () => {
        console.log('Client is ready!');
    });   
    client.on('message', async msg => {
        console.log('MESSAGE RECEIVED', msg);
    })
    client.initialize();
    
})

router.get('/teste', (req: Request, res:Response)=>{
    client.sendMessage('558192812164@c.us', `The bot has chats open.`);
    client.sendMessage('558187772234@c.us', `The bot has chats open.`);
})
export default router;