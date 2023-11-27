const nodemailer = require('nodemailer');

const transport =  nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth:{
        user:'socorro763testenode@outlook.com',
        pass:'casaverde164',
    }
})
transport.sendMail({
    from:'gabriel <socorro763testenode@outlook.com>',
    to:'gabrielvieira.code@gmail.com',
    subject:'assunto',
    html:'<p>foi que foi</p>',
    text:'ola',
})
.then(()=>{
    console.log('erro')
}).catch((err)=>{console.log('erro ao enviar ',err)
})