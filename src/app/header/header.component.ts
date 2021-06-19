import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() menuTriggered = new EventEmitter();

  constructor(private router: Router) {}

  linkToLoginComponent() {
    this.router.navigateByUrl('/login');
  }
}
