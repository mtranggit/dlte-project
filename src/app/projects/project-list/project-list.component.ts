import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dlte-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects;
  constructor() { }

  ngOnInit() {
    this.projects = [
      {
        id: 1,
        name: 'Project One',
        client: 'ABC Corp',
        url: 'https://www.project1url.com',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, modi!j'
      },
      {
        id: 2,
        name: 'Project Two',
        client: 'ABCD Corp',
        url: 'https://www.project2url.com',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, eum?'
      },
      {
        id: 3,
        name: 'Project Three',
        client: 'ACME Ltd',
        url: 'https://www.project3url.com',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 1,
        name: 'Project Fourth',
        client: 'ACE Corp',
        url: 'https://www.project4url.com',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt!'
      },
      {
        id: 1,
        name: 'Project Five',
        client: 'XYZ Corp',
        url: 'https://www.project5url.com',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, ea.'
      }
    ];
  }

}
