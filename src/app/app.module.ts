import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Day 1/header/header.component';
import { SectionOneComponent } from './Day 1/section-one/section-one.component';
import { SectionTwoComponent } from './Day 1/section-two/section-two.component';
import { AboutComponent } from './Day 1/about/about.component';
import { FooterComponent } from './Day 1/footer/footer.component';
import { SkillslistComponent } from './Day 1/skillslist/skillslist.component';
import { Lab2Component } from './Day 2/lab2/lab2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionOneComponent,
    SectionTwoComponent,
    AboutComponent,
    FooterComponent,
    SkillslistComponent,
    Lab2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
