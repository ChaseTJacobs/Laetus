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


  constructor(private fb: FormBuilder, private acctSvc: AccountService, public paySvc: PaymentService) {
    this.payForm = fb.group({
      'cardNumber': [null, Validators.required],
      'expiryMonth': [null, Validators.required],
      'expiryYear': [null, Validators.required],
      'cvc': [null, Validators.required],
      'address': [null, Validators.required],
      'city': [null, Validators.required],
      'state': [null, Validators.required],
      'zip': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  getToken() {
    this.message = 'Loading...';

      (<any>window).Stripe.card.createToken({
        number: this.cardNumber,
        exp_month: this.expiryMonth,
        exp_year: this.expiryYear,
        cvc: this.cvc
      }, (status: number, response: any) => {
        console.log(response);
          if (response.error) {
            console.log(response.error);
            alert(response.error);
            // this.message = `Success! Card token ${response.token}.`;
          } else {
          console.log(response.id);
          alert(response.token);
            // this.message = response.error.message;
          }
        });
  }

}
