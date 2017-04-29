import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule, NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    NgbCarouselConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
