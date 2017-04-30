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
        client_name: 'ABC Corp',
        url: 'https://www.project1url.com',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, modi!j'
      },
      {
        id: 2,
        name: 'Project Two',
        client_name: 'ABCD Corp',
        url: 'https://www.project2url.com',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, eum?'
      },
      {
        id: 3,
        name: 'Project Three',
        client_name: 'ACME Ltd',
        url: 'https://www.project3url.com',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
      },
      {
        id: 4,
        name: 'Project Fourth',
        client_name: 'ACE Corp',
        url: 'https://www.project4url.com',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt!'
      },
      {
        id: 5,
        name: 'Project Five',
        client_name: 'XYZ Corp',
        url: 'https://www.project5url.com',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, ea.'
      }
    ];
  }

}
