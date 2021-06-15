import {Component, OnInit} from '@angular/core';
import {CoursesListService} from '../shared/courses-list.service';
import {Course} from '../shared/types/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];

  selectedCourse: Course = {
    id: null,
    name: '',
    description: '',
    percentageComplete: 0,
    favorite: false,
  };

  constructor(private coursesService: CoursesListService) {
  }

  ngOnInit(): void {
    this.loadCourses();
  }

  resetSelectedCourse() {
    this.selectedCourse = {
      id: null,
      name: '',
      description: '',
      percentageComplete: 0,
      favorite: false,
    };
  }

  getCourses() {
    this.courses = this.coursesService.getAllCourses();
  }

  loadCourses() {
    this.resetSelectedCourse();
    this.getCourses();
  }

  selectCourse(course: Course) {
    this.selectedCourse = course;
  }

  deleteCourse(course: Course) {
    this.coursesService.deleteCourse(course);
    this.loadCourses();
  }

  submitCourse(course: Course) {
    this.coursesService.updateOrCreate(course);
    this.loadCourses();
  }

}
