import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { OrderDetailsService } from '../../services/order-details.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menupage',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './menupage.component.html',
  styleUrl: './menupage.component.css'
})
export class MenupageComponent implements OnInit{
  constructor(private param: ActivatedRoute, private service:OrderDetailsService){  }
  getMenuId:any; 
  menuData:any;
  ngOnInit() : void{
    this.getMenuId = this.param.snapshot.paramMap.get('id');  
    console.log(this.getMenuId, 'getmenu');
    if(this.getMenuId)
    {
      this.menuData =this.service.foodDetails.filter((value)=>{
        return value.id == this.getMenuId;
      });
    }
    // else if(this.getName){
    //   this.menuData=this.service.foodDetails.filter((value)=>{
    //     return value.foodName == this.getName;
    //   });
    // }
  }   
}
