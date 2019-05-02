// #################### [ Default Anglar ] ####################
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


// #################### [ Modules ] ####################
import { AppRoutes } from './app.routes';


// #################### [ Layouts ] ####################
import { AppComponent } from './app.component';
import { FullLayoutComponent } from './layout/full-layout.component';



@NgModule({
  declarations: [
    AppComponent,
    FullLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
