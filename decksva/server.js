const express = require('express');
// const connectDB = require('./config/db');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const sgMail = require('@sendgrid/mail');
const generateEmailBody = require('./config/email');

dotenv.config();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();

app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(bodyParser.json({limit: '50mb'}));

// Init middleware
app.use(express.json({ extended: false }));

app.post('/contacts', (req, res) => {
    console.log(req.body);
    
    const emailBody = generateEmailBody(req.body);
    
    const msg = {
        to: `olga.repnitsyna@gmail.com`,
        from: req.body.email,
        subject: 'estimate requested',
        html: emailBody
    }

    sgMail.send(msg).then((msg) => console.log("success"))
    res.send("App is running")
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));