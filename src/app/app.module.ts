import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import {  NgxProgressiveImgLoaderModule } from 'ngx-progressive-img-loader';
import { FooterComponent } from './footer/footer.component';
import { StyleDirective } from './style.directive';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    StyleDirective

  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    NgxProgressiveImgLoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AboutComponent]
})
export class AppModule { }
