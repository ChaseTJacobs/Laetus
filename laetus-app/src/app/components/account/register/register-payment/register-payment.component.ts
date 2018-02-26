import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-register-payment',
  templateUrl: './register-payment.component.html',
  styleUrls: ['./register-payment.component.css']
})
export class RegisterPaymentComponent implements OnInit {
  cardNumber: string;
  expiryMonth: string;
  expiryYear: string;
  cvc: string;

   message: string;


  constructor(private _zone: NgZone) {
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

        // Wrapping inside the Angular zone
        this._zone.run(() => {
          if (status === 200) {
            this.message = `Success! Card token ${response.card.id}.`;
          } else {
            this.message = response.error.message;
          }
        });
      });
  }

}
