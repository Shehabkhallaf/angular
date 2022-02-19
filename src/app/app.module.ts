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
import { CarouselComponent } from './Day 2/carousel/carousel.component';
import { ContentComponent } from './Day 2/content/content.component';
import { NavbarComponent } from './Day 2/navbar/navbar.component';
import { Header2Component } from './Day 2/header2/header2.component';
import { Footer2Component } from './Day 2/footer2/footer2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionOneComponent,
    SectionTwoComponent,
    AboutComponent,
    FooterComponent,
    SkillslistComponent,
    CarouselComponent,
    ContentComponent,
    NavbarComponent,
    Header2Component,
    Footer2Component
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
