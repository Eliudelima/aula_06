import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AboutComponent } from './about/about.component';
import { DiscDetailsComponent } from './disc-details/disc-details.component';


@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '', component: ListComponent},
      {path: 'about', component: AboutComponent},
       {path: 'discs/:index', component: DiscDetailsComponent}


   ])
     ],
  declarations: [ AppComponent, ListComponent, AboutComponent, DiscDetailsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
