import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopnavbarComponent } from './navigation/topnavbar/topnavbar.component';
import { SidenavbarComponent } from './navigation/sidenavbar/sidenavbar.component';

@NgModule({
  declarations: [
    AppComponent,
    TopnavbarComponent,
    SidenavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
