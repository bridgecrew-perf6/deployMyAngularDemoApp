import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from 'src/app/servics/order-details.service';
OrderDetailsService
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private service:OrderDetailsService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData=this.service.foodDetails;
  }

}
