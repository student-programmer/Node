const config = require('config');
const password = config.get('Parametrs.password');
const gmail = config.get('Parametrs.gmail');
const nodemailer = require("nodemailer")
 
exports.nodemailer_send = async (req, res) => {
    
    const {email, phone, name, description, category, totalPrice, totalCount} = req.body 
    
    try {
        const transporter = nodemailer.createTransport({
            service: 'mail',
            host: 'smtp.mail.ru',
            port: 465,
            secure: true,
            auth: {
                user:gmail,
                pass:password,
            },
        });
        try {
            await transporter.sendMail({
                from: gmail,
                to: "breeze161789@mail.ru",
                subject: "Заказ кондиционера с сайта",
                html: `Имя пользоателя: ${name}, его почта: ${email} и номер телефона: ${phone}, - описание работы: ${description}, а также кондиционер если есть ${category} ${totalPrice} ${totalCount}`,
                
            },);
            return res.json({ status: true, response: {msg: 'Сообщение успешно отправлено!' } });
        }
        catch (e) {
            return console.log(e);
        }
    
    } catch (e) {
        return console.log(e);
    }
}