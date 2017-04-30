import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { CarouselComponent } from './carousel/carousel.component';
// import { BlurbComponent } from './blurb/blurb.component';
// import { ImageListComponent } from './image-list/image-list.component';
// import { ImageComponent } from './image/image.component';
import { ProjectsModule } from 'app/projects/projects.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    CarouselComponent,
    // BlurbComponent,
    // ImageListComponent,
    // ImageComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProjectsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    NgbCarouselConfig
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
