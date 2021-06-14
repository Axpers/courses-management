import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {CoursesComponent} from './courses/courses.component';
import {SidebarComponent} from './sidebar/sidebar.component';
import {HeaderComponent} from './header/header.component';
import {ListCoursesComponent} from './courses/list-courses/list-courses.component';
import {CourseFormComponent} from './courses/course-form/course-form.component';
import {CoursesListService} from './shared/courses-list.service';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SidebarComponent,
    HeaderComponent,
    ListCoursesComponent,
    CourseFormComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
  ],
  providers: [
    CoursesListService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
