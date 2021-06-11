import {Component, OnInit} from '@angular/core';
import {CoursesListService} from '../shared/courses-list.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses = [];

  selectedCourse = null;

  constructor(private coursesService: CoursesListService) {
  }

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.getCourses();
  }

  resetSelectedCourse(){
    this.selectedCourse = {
      id: null,
      name: '',
      description: '',
      percentageComplete: 0,
      favorite: null,
    };
  }

  selectCourse(course) {
    this.selectedCourse = course;
    console.log(this.selectedCourse);
  }

  getCourses() {
    this.courses = this.coursesService.getAllCourses();
  }

  deleteCourse(course) {
    this.coursesService.deleteCourse(course);
  }

}
