import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './sharepage/footer/footer.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  FooterComponent, NavbarComponent],
  standalone:true,
  templateUrl:'./app.component.html',
  styleUrls:['./app.component.css']
})

export class AppComponent {
}
