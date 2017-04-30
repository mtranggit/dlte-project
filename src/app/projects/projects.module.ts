import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects.component';
import { ProjectComponent } from './project/project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';


@NgModule({
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  declarations: [
    ProjectsComponent,
    ProjectComponent,
    ProjectListComponent,
    ProjectDetailsComponent
  ]
})
export class ProjectsModule { }
