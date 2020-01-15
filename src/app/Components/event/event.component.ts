import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../Shared/common.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  timelineData;
  constructor(private cs: CommonService) { }

  ngOnInit() {
    this.cs.getTimelineData().subscribe(res => {
      this.timelineData = res;
    });
  }

}
