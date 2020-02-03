import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { CommonService } from '../../Shared/common.service';
import { filter } from 'rxjs/operators';


@Component({
  selector: 'megagameplay-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild('aboutUs', { static: false }) aboutUs: ElementRef;
  @ViewChild('event', { static: false }) event: ElementRef;
  @ViewChild('contact', { static: false }) contact: ElementRef;
  @ViewChild('home', { static: false }) home: ElementRef;

  private timer;
  private compareDate = new Date();
  public seconds: any;
  public minutes: any;
  public hours: any;
  public days: any;
  public currentEvent: any;
  // tslint:disable-next-line: variable-name
  constructor(private _commonService: CommonService) {
  }

  ngOnInit() {
    this._commonService.changeRouteData('');
    this._commonService.getEventData().subscribe(res => {
      this.currentEvent = res[0];
      this.compareDate = new Date(this.currentEvent.date);
    });
    this.compareDate.setDate(this.compareDate.getDate() + 7); // just for this demo today + 7 days
    this.countDown();
    this._commonService.scrollViewTag.subscribe(res => {
      switch (res) {
        case 'aboutUs':
          this.aboutUs.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          break;

        case 'event':
          this.event.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          break;

        case 'contact':
          this.contact.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
          break;
      }
    });
  }

  countDown() {
    this.timer = setInterval(() => {
      this.timeBetweenDates(this.compareDate);
    }, 1000);

  }

  timeBetweenDates(toDate) {
    const dateEntered = toDate;
    const now = new Date();
    const difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {
      // Timer done
      clearInterval(this.timer);
    } else {

      this.seconds = Math.floor(difference / 1000);
      this.minutes = Math.floor(this.seconds / 60);
      this.hours = Math.floor(this.minutes / 60);
      this.days = Math.floor(this.hours / 24);
      this.hours %= 24;
      this.minutes %= 60;
      this.seconds %= 60;
    }
  }
}
