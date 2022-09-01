import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { PageContentModule } from './page-content/page-content.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    PageContentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
