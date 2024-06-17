import { Component, OnInit } from '@angular/core';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
  constructor(private servive:OrderDetailsService){ }
  foodData:any;
  ngOnInit(){
    this.foodData = this.servive.foodDetails;
  }

}
