import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {RouterOutlet} from "@angular/router";
import { PosteslistComponent } from './posteslist/posteslist.component';
import { PostedetailsComponent } from './postedetails/postedetails.component';

@NgModule({
  declarations: [
    AppComponent,
    PosteslistComponent,
    PostedetailsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
