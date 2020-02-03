import { Injectable } from '@angular/core';
import { Subject, Observable, pipe } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  routeChange = new Subject<any>();
  scrollViewTag = new Subject<any>();
  constructor(private http: HttpClient) { }

  changeRouteData(data: string) {
    this.routeChange.next(data);
  }

  scrollToView(data: string) {
    this.scrollViewTag.next(data);
  }

  saveContactusDetails(data): Observable<any> {
    return this.http.post<any>(`${environment.serverui}clientMessages`, data);
  }

  getClientMessages(skip): Observable<any> {
    return this.http.get(`${environment.serverui}clientMessages/fetch`, skip);
  }

  fetchTotalCount(): Observable<any> {
    return this.http.get(`${environment.serverui}clientMessages/fetchTotalCount`);
  }
  getClientMessageUsingId(id): Observable<any> {
    return this.http.post(`${environment.serverui}clientMessages/getClientMessageUsingId`, { _id: id });
  }

  // getTimelineData() {
  // return this.http.get<any>(`${environment.serverui}timelineData/timelineData`);
  // }

  getEventData(): Observable<any> {
    // return this.http.get<any>(`${environment.serverui}timelineData/getEventData`);
    return this.http.get<any>('./../../assets/Data/eventData.json').pipe(map(events => {
      return events.filter(res => {
        if (new Date(res.date) > new Date()) {
          return res;
        }
      });
    }));
  }

  addUpdateEventData(data): Observable<any> {
    return this.http.post<any>(`${environment.serverui}timelineData/addUpdateEventData`, data);
  }

  readTermsAndCondition(): Observable<any> {
    return this.http.get<any>('./../../assets/Data/terms.json');
  }
}
