import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaymentService } from '../../../../services/payment/payment.service';
import { AccountService } from '../../../../services/auth/account.service';

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.css']
})
export class RegisterPaymentComponent implements OnInit {

  payForm: FormGroup;
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  message: string;
  style : {
  base: {
    iconColor: '#2FCF99',
    color: '#31325F',
    lineHeight: '40px',
    fontWeight: 300,
    fontFamily: 'Helvetica Neue',
    fontSize: '15px',
    '::placeholder': {
      color: '#CFD7E0',
    },
  },
};
  
cardNumberElement = elements.create('cardNumber', {
  style: this.style
});

cardExpiryElement = elements.create('cardExpiry', {
  style: this.style
});

cardCvcElement = elements.create('cardCvc', {
  style: this.style
});

  ngOnInit() {
    this.cardNumberElement.mount('#card-number-element');
    this.cardExpiryElement.mount('#card-expiry-element');
    this.cardCvcElement.mount('#card-cvc-element');

    this.cardNumberElement.on('change', function(event) {
  this.setOutcome(event);
});

this.cardExpiryElement.on('change', function(event) {
  this.setOutcome(event);
});

this.cardCvcElement.on('change', function(event) {
  this.setOutcome(event);
});

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
//  var options = {
//    address_zip: document.getElementById('postal-code').value,
//  };
  stripe.createToken(this.cardNumberElement).then(this.setOutcome);
});

  }

  constructor(private fb: FormBuilder, private acctSvc: AccountService, public paySvc: PaymentService) {
//    this.payForm = fb.group({
//      'cardNumber': [null, Validators.required],
//      'expiryMonth': [null, Validators.required],
//      'expiryYear': [null, Validators.required],
//      'cvc': [null, Validators.required],
//      'address': [null, Validators.required],
//      'city': [null, Validators.required],
//      'state': [null, Validators.required],
//      'zip': [null, Validators.required]
//    });
  }



setOutcome(result) {
  var successElement = document.querySelector('.success');
  var errorElement = document.querySelector('.error');
  successElement.classList.remove('visible');
  errorElement.classList.remove('visible');

  if (result.token) {
    // In this example, we're simply displaying the token
    successElement.querySelector('.token').textContent = result.token.id;
    successElement.classList.add('visible');

    // In a real integration, you'd submit the form with the token to your backend server
    //var form = document.querySelector('form');
    //form.querySelector('input[name="token"]').setAttribute('value', result.token.id);
    //form.submit();
  } else if (result.error) {
    errorElement.textContent = result.error.message;
    errorElement.classList.add('visible');
  }
}

submitInformation() {
  console.log("This worked?");
}

//  getToken() {
//    this.message = 'Loading...';

//      (<any>window).Stripe.card.createToken({
//        number: this.cardNumber,
//        exp_month: this.expiryMonth,
//        exp_year: this.expiryYear,
//        cvc: this.cvc
//      }, (status: number, response: any) => {
//        console.log(response);
//          if (response.error) {
//            console.log(response.error);
//            alert(response.error);
//            // this.message = `Success! Card token ${response.token}.`;
//          } else {
//          console.log(response.id);
//          alert(response.token);
//            // this.message = response.error.message;
//          }
//        });
//  }
}

