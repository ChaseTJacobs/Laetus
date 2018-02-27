import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../../../services/payment/payment.service';

@Component({
  selector: 'app-register',
  templateUrl: './register-body.component.html',
  styleUrls: ['./register-body.component.css']
})
export class RegisterBodyComponent implements OnInit {



  constructor(private paySvc: PaymentService) {
  }

  ngOnInit() {

  }

}
