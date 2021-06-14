import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesListService {

  constructor() {
  }

  private courses = [
    {
      id: 0,
      name: 'cours1Nom',
      description: 'cours1Description',
      percentageComplete: 10,
      favorite: true,
    },
    {
      id: 1,
      name: 'cours2Nom',
      description: 'cours2Description',
      percentageComplete: 50,
      favorite: false,
    }
  ];

  getAllCourses() {
    return this.courses;
  }

  deleteCourse(course) {
    const index = this.courses.indexOf(course);
    this.courses.splice(index, 1);
  }

  createCourse(course) {
    this.courses.push(course);
  }

  updateCourse(course) {
    const courses = this.courses;
    const index = courses.findIndex(v => v.id === course.id);
    courses[index] = {...course};
  }

  updateOrCreate(course) {
    const itExists = this.courses.find(v => v.id === course.id);
    if (itExists) {
      this.updateCourse(course);
      console.log('Course updated!', course);
    } else {
      course.id = this.courses.length;
      this.createCourse(course);
      console.log('Course created!', course);
    }
  }

  /*
  submitCourse(course) {
    const courses = (this.coursesService.getAllCourses()).filter(v => v.id === course.id);
    if (courses.length === 0) {
      course.id = courses.length;
      this.coursesService.createCourse(course);
      console.log('Course created!', course);
    } else {
      this.coursesService.updateCourse(course);
      console.log('Course updated!', course);
    }
    this.loadCourses();
  }
   */
}


