import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../app/Day 1/header/header.component';
import { SectionOneComponent } from '../app/Day 1/section-one/section-one.component';
import { SectionTwoComponent } from '../app/Day 1/section-two/section-two.component';
import { AboutComponent } from '../app/Day 1/about/about.component';
import { FooterComponent } from '../app/Day 1/footer/footer.component';
import { SkillslistComponent } from '../app/Day 1/skillslist/skillslist.component';
import { CarouselComponent } from '../app/Day 2/carousel/carousel.component';
import { ContentComponent } from '../app/Day 2/content/content.component';
import { NavbarComponent } from '../app/Day 2/navbar/navbar.component';
import { Header2Component } from '../app/Day 2/header2/header2.component';
import { Footer2Component } from '../app/Day 2/footer2/footer2.component';
import { Navbar1Component } from '../app/Day 3/task 1/navbar1/navbar1.component';
import { Content3Component } from '../app/Day 3/task 1/content3/content3.component';
import { ProductCardComponent } from '../app/Day 3/task 1/content3/product-card/product-card.component';
import { PipeNamePipe } from './pipe-name.pipe';
import { Header4Component } from '../app/Day 3/task 2/todo/header4/header4.component';
import { Body4Component } from '../app/Day 3/task 2/todo/body4/body4.component';
import { TodoComponent } from '../app/Day 3/task 2/todo/todo.component';
import { PipeDataPipe } from './Day 3/task 2/pipe-data.pipe';
import { SharedComponent } from './shared/shared/shared.component';
import { LoginComponent } from './Day 4/login/login.component';
import { RegisterComponent } from './Day 4/register/register.component';

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
    Footer2Component,
    Navbar1Component,
    Content3Component,
    ProductCardComponent,
    PipeNamePipe,
    Header4Component,
    Body4Component,
    TodoComponent,
    PipeDataPipe,
    SharedComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
