const express = require('express');
const path = require('path');
const paypal = require('paypal-rest-sdk');
paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'ASJXgASpwyGJ-f5iPcRwityEzK7zHf3i71QnyXq5WpS7nolXZpYMo8XNoIieRJNqPlORTJtmJfp-vfcy',
    'client_secret': 'EG_zrAPJ2qsf9MW1gyT5mbj_kUIGsbQfmh7DWliGXzUkNzCjQ7mXtK4aT4-N-AJN314C5QQJjjQNakju'
  });

const app = express();
const bodyParser = require('body-parser');


// app.use(express.static('client/build'));

// app.get('/', (req, res) => res.redirect('index.html');
// app.get('/', function(req, res) {
//     res.sendFile(path.join(__dirname + './public/index.html'));
// });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname+'/public/index.html');
// });
app.use(express.static(path.join(__dirname, '/public')));

app.use(bodyParser.urlencoded({
    extended: true
 }));
 app.use(bodyParser.json());

app.get('*', (req, res) => {
  res.render(path.join(__dirname, '/public'), 'plain')
//   console.log(res);
  res.end()
})
app.post('/pay', (req, res) => {
    const create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://localhost:3000/success",
            "cancel_url": "http://localhost:3000/cancel"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "3-Month Subscription",
                    "sku": "0001",
                    "price": "20.00",
                    "currency": "AUD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "AUD",
                "total": "20.00"
            },
            "description": "3-month for testing"
        }]
    };

    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            for (let i = 0;i< payment.links.length;i++){
                if(payment.links[i].rel === 'approval_url'){
                    res.redirect(payment.links[i].href);
                }
            }
            // console.log("Create Payment Response");
            // console.log(payment);
            // res.send('test');
        }
    });
});

app.listen(3000, () => console.log(`Server running on port 3000`));