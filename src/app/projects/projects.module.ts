import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { BlurbComponent } from '../blurb/blurb.component';
import { ImageListComponent } from '../image-list/image-list.component';
@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  exports: [
    BlurbComponent,
    ImageListComponent
  ],
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    BlurbComponent,
    ImageListComponent
  ]
})
export class ProjectsModule { }
