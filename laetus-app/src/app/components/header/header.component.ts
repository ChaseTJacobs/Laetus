import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http/http.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HttpService]
})
export class HeaderComponent implements OnInit {
  show:boolean = false;
  public sToken: string;
  isOpen = false;

  toggleCollapse() {
    this.show = !this.show;
  }
  constructor(private httpService: HttpService) {
    this.sToken = "false";
  }

  ngOnInit() {
   
  }

}
