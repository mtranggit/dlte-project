import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlurbComponent } from '../../blurb/blurb.component';

@Component({
  selector: 'dlte-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.scss']
})
export class ProjectDetailsComponent implements OnInit {

  projectId;
  projectInfoDetails;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.projectInfoDetails = this.getProjectDetails(this.activatedRoute.snapshot.params['id']);
  }

  private getProjectDetails(id: number) {
    const project = {
      id: id,
      name: 'Project Name',
      client_name: 'ACME Corp',
      blurb: 'Lorem ipsum dolor sit amet, consectetur ose elit. Commodi, rerum recusandae, provident ex temporibus officia.',
      description: `
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae doloremque 
        omnis libero deserunt fugiat odio aliquid quos fuga atque laudantium. Nihil 
        saepe asperiores similique nemo, dicta, deleniti inventore quidem tempore 
        voluptatibus ducimus animi, dolorum! Sequi deserunt deleniti saepe dolores fuga 
        nihil ipsa doloribus dicta temporibus, quos ea veniam harum quia.
      `,
      images: null
    };
    if (id % 2 === 0) {
      // add extra image and captions
      project.images = [
      {
        imageUrl: `https://lorempixel.com/1200/600?r=10`,
        imageCaption: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt sunt quidem',
      },
      {
        imageUrl: `https://lorempixel.com/1200/600?r=11}`,
        imageCaption: 'Lorem ipsum dolor sit amet.'
      },
      {
        imageUrl: `https://lorempixel.com/600/300?r=12`,
        imageCaption: 'Lorem ipsum dolor sit amet.'
      },
      {
        imageUrl: `https://lorempixel.com/600/300?r=13`,
        imageCaption: 'Lorem ipsum dolor sit amet.'
      }
      ];
    } else {
      project.images = [
      {
        imageUrl: `https://lorempixel.com/1200/600?r=1`,
      },
      {
        imageUrl: `https://lorempixel.com/1200/600?r=2`,
      },
      {
        imageUrl: `https://lorempixel.com/600/300?r=3`,
      },
      {
        imageUrl: `https://lorempixel.com/600/300?r=4`,
      }
      ];
    }

    return project;
  }
}
