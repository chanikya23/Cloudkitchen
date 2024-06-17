import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit{

  constructor(private service:OrderDetailsService){}
  foodData:any;
  ngOnInit(){
    this.foodData=this.service.foodDetails;
  }

}
