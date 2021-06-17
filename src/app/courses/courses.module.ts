import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CoursesRoutingModule} from './courses-routing.module';
import {MaterialModule} from '../material/material.module';
import {FormsModule} from '@angular/forms';
import {CoursesComponent} from './courses.component';
import {ListCoursesComponent} from './list-courses/list-courses.component';
import {CourseFormComponent} from './course-form/course-form.component';
import {CoursesListService} from '../shared/courses-list.service';


@NgModule({
  imports: [
    CommonModule,
    CoursesRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    CoursesComponent,
    ListCoursesComponent,
    CourseFormComponent
  ],
  providers: [
    CoursesListService,
  ]
})
export class CoursesModule {
}
