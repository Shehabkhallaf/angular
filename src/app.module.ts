import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppModule } from './app/Day 1/app.module';
import { AppComponent } from './app/Day 1/app.component';
import { FooterComponent } from './app/day 1/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AppModule,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
