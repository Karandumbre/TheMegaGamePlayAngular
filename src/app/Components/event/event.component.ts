import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../Shared/common.service';

@Component({
  selector: 'megagameplay-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  timelineData;
  acceptTerms = false;
  terms: { [key: number]: string };
  modalHeader = 'Terms And Conditions';
  constructor(private cs: CommonService) { }

  ngOnInit() {
    this.cs.readTermsAndCondition().subscribe(res => {
      this.terms = res;
    });
  }
  showQrCode() {
    setTimeout(() => {
      this.modalHeader = 'Payments';
      this.acceptTerms = true;
      document.getElementById('modal-body').style.height = 'auto';
    }, 500);

  }

}
