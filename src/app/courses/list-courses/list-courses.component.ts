import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-list-courses',
  templateUrl: './list-courses.component.html',
  styleUrls: ['./list-courses.component.scss']
})
export class ListCoursesComponent {
  @Input() courses;
  @Output() selected = new EventEmitter();
}
