import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import {TranslateModule} from "@ngx-translate/core";
// import {TranslateLoader} from "@ngx-translate/core";

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from "@angular/material/tree";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
// import {TranslateHttpLoader} from "@ngx-translate/http-loader";
// import {HttpClientModule} from "@angular/common/http";
// import {HttpClient} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTreeModule,
    MatIconModule,
    MatButtonModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
