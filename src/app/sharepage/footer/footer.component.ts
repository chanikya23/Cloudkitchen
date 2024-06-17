import { Component, OnInit ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone:true,
  templateUrl: './footer.component.html',
  styleUrls:['./footer.component.css'],
  imports:[RouterLink]
})
export class FooterComponent implements OnInit{
  constructor(){ }

  ngOnInit(){

  }
}
