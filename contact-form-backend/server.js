const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
    service: 'Gmail', // You can use other email services
    auth: {
        user: 'jibrinb271@gmail.com',
        pass: 'toyo ulmm hfbt gwoq'
    }
});


app.post('/send', (req, res) => {
    const { name, email, mobile, subject, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'jibrinb271@gmail.com', // Your email address
        subject: `Contact form submission: ${subject}`,
        text: `
            Name: ${name}
            Email: ${email}
            Mobile: ${mobile}
            Subject: ${subject}
            Message: ${message}
        `
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: error.toString() });
        }
        res.status(200).json({ message: 'Email sent successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
