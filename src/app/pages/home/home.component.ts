import { Component, OnInit } from '@angular/core';
import { OrderdetailsService } from 'src/app/services/orderdetails.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:OrderdetailsService){}
  clothdata:any;

  ngOnInit(): void {
    this.clothdata=this.service.orderdetails;
  }

}
