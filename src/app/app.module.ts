import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './Common/header/header.component';
import { FooterComponent } from './Common/footer/footer.component';
import { HomeComponent } from './Components/home/home.component';
import { UpcomingEventsComponent } from './Components/upcoming-events/upcoming-events.component';
import { ContactComponent } from './Components/contact/contact.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { EventComponent } from './Components/event/event.component';
import { RouterModule } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    UpcomingEventsComponent,
    ContactComponent,
    AboutUsComponent,
    EventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      }
    ], { useHash: true })
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
