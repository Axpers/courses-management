import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from '../../shared/types/course';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  selectedCourse: Course = {
    id: null,
    name: '',
    description: '',
    percentageComplete: 0,
    favorite: false
  };
  originalTitle = '';

  @Output() resetSelectedCourse = new EventEmitter();
  @Output() submitCourse = new EventEmitter();

  @Input() set course(value: Course) {
    if (value) {
      this.selectedCourse = {...value};
      this.originalTitle = this.selectedCourse.name;
    }
  }

}
