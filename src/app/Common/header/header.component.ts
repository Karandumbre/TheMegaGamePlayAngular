import { Component, OnInit, HostListener } from '@angular/core';
import { CommonService } from '../../Shared/common.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'megagameplay-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerCss: string;
  showHeader = true;
  // tslint:disable-next-line: variable-name
  constructor(private _commonService: CommonService) {

  }

  ngOnInit() {
    this._commonService.routeChange.subscribe(res => {
      if (res === 'admin') {
        this.showHeader = false;
      }
    });
  }

  @HostListener('window:scroll', ['$event']) getScrollHeight() {
    window.pageYOffset > 500 ? this.headerCss = 'not-transparent' : this.headerCss = 'transparent';
  }

  scrollIntoView(el) {
    // el.focus();
    this._commonService.scrollToView(el);
  }
}
