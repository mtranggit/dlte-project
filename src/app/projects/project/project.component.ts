import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dlte-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() project;

  constructor() { }

  ngOnInit() {
  }

  getProjectImage(id) {
    return `https://lorempixel.com/400/300?r=${id}`;
  }

  selectProject(item) {
    console.log('Go to project details', item);
  }
}
