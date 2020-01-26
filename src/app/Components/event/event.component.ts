import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../Shared/common.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  timelineData;
  acceptTerms = false;
  terms: { [key: number]: string };
  modalHeader = 'Terms And Conditions';
  btnText = 'Agree and Pay'
  constructor(private cs: CommonService) { }

  ngOnInit() {
    this.cs.getTimelineData().subscribe(res => {
      this.timelineData = res;
    });

    this.cs.readTermsAndCondition().subscribe(res => {
      this.terms = res;
    });
  }
  showQrCode() {
    this.modalHeader = 'Payments';
    this.acceptTerms = true;
    this.btnText = 'Close'
  }

  hideQRCode() {
    this.acceptTerms = false;
    this.modalHeader = 'Terms And Conditions';
  }
}
