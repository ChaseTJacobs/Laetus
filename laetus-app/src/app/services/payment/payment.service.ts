import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {
  public showPaymentForm: boolean = false;


  constructor() {
 }

 getShowPaymentForm() {
   return this.showPaymentForm;
 }

 setShowPaymentForm(showPaymentForm) {
   this.showPaymentForm = showPaymentForm;
 }

}
