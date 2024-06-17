import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { MenupageComponent } from './pages/menupage/menupage.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'footer', component:FooterComponent},
    {path:'navbar', component:NavbarComponent},
    {path:'menu/:id', component:MenupageComponent},
    {path:'menu', component:MenuComponent},
    {path:'contact',component:ContactComponent},
    {path:'about', component:AboutComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }