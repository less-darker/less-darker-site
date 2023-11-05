import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DownloadComponent } from './components/download/download.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SocialsComponent } from './components/socials/socials.component';

@NgModule({
  declarations: [
    AppComponent,
    DownloadComponent,
    HeaderComponent,
    FooterComponent,
    SocialsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
