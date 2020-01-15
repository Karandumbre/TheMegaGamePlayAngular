import { Component, OnInit } from '@angular/core';
import { CommonService } from './../../Shared/common.service';

@Component({
  selector: 'megagameplay-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data: any;
  currentPage;
  totalPage;
  clientMessage: any;
  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.commonService.fetchTotalCount().subscribe(res => {
      console.log('response', res);
      this.totalPage = Array.from({ length: Math.ceil(res.body / 5) }, (v, k) => k + 1);
    }, (err) => {
      console.log(err);
    });
    this.currentDataTab();
  }
  currentDataTab(skip = 1) {
    this.currentPage = skip;
    this.commonService.getClientMessages({ 'skip': (skip - 1) * 5 }).subscribe(res => {
      console.log(res);
      this.data = res;
    }, (err) => {
      console.log(err);
    });
  }

  nextandForwardTab(arg) {
    if (arg === 'next' && this.currentPage < this.totalPage.length) {
      this.currentPage = this.currentPage + 1;
    }
    if (arg === 'back' && this.currentPage > 1) {
      this.currentPage = this.currentPage - 1;
    }
    this.currentDataTab(this.currentPage);
  }

  fetchClientDetails(id) {
    this.commonService.getClientMessageUsingId(id).subscribe(res => {
      this.clientMessage = res;
    });
  }

  erazeData() {
    this.clientMessage = {};
  }
}
