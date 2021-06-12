import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent {
  @Input() selectedCourse;
  @Output() resetSelectedCourse = new EventEmitter();
}
