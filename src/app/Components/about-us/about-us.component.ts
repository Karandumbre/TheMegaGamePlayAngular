import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'megagameplay-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  data = [{
    name: 'Sulaxan Jadhav',
    title: 'STRATEGY / MARKETING HEAD',
    description: `An Computer Engineering with vast experience in Digital Marketing. 
    He plays a pivotal role in strategy formulation, execution and designing innovative structures. 
    A frequent speaker and guest lecturer at various institutions`,
  }, {
    name: 'ANKIT KALPANDE',
    title: 'FINANCE / VISUALIZER HEAD',
    description: `A Finance Graduate and a great visualizer, he has successfully pooled his finance knowledge in Virtual Games.
    He has guided the organisation inception with his leadership skills and achieved several path breaking mile stones.'
    `
  }];

  constructor() { }

  ngOnInit() {
  }
}
