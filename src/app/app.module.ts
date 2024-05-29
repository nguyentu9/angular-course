import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [AppComponent, CourseCardComponent],
  imports: [BrowserModule, BrowserAnimationsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
